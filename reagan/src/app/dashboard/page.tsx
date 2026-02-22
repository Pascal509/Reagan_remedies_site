import { Container, Section, SectionHeader } from "@/components/common";

export default function DashboardPage() {
  return (
    <Section aria-labelledby="dashboard-heading">
      <Container>
        <SectionHeader
          title="Subscriber Dashboard"
          subtitle="Access your saved research updates, publications, and personalized notifications."
          titleId="dashboard-heading"
        />
      </Container>
    </Section>
  );
}
