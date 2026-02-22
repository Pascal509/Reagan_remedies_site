import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@reaganremedies.com",
    password: "Admin@123",
    role: "Admin"
  },
  {
    id: "2",
    name: "Research Lead",
    email: "research@reaganremedies.com",
    password: "Research@123",
    role: "Researcher"
  },
  {
    id: "3",
    name: "Subscriber",
    email: "subscriber@reaganremedies.com",
    password: "Subscriber@123",
    role: "Subscriber"
  }
];

const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase();
        const password = credentials?.password;

        const user = users.find(
          (u) => u.email.toLowerCase() === email && u.password === password
        );

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    }
  }
});

export { handler as GET, handler as POST };
