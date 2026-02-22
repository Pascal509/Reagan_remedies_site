import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "src", "content");

export type CaseStudyRecord = {
  slug: string;
  title: string;
  category: "Case Study" | "Research Publication";
  date: string;
  author: string;
  department: string;
  summary: string;
  trialPhase: string;
  therapeuticArea: string;
  regulatoryStatus: string;
  citation: string;
  heroImage: string;
  heroAlt: string;
  background: string;
  clinicalApproach: string;
  outcomes: string;
  scientificSignificance: string;
  body: string;
};

export type ProductRecord = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string;
};

async function readMarkdownFiles(folder: string) {
  const directory = path.join(contentRoot, folder);
  const files = await fs.readdir(directory);
  return files.filter((file) => file.endsWith(".md"));
}

export async function getCaseStudies(): Promise<CaseStudyRecord[]> {
  const files = await readMarkdownFiles("case-studies");

  const items = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(contentRoot, "case-studies", file);
      const raw = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title,
        category: data.category,
        date: data.date,
        author: data.author,
        department: data.department,
        summary: data.summary,
        trialPhase: data.trialPhase,
        therapeuticArea: data.therapeuticArea,
        regulatoryStatus: data.regulatoryStatus,
        citation: data.citation,
        heroImage: data.heroImage,
        heroAlt: data.heroAlt,
        background: data.background,
        clinicalApproach: data.clinicalApproach,
        outcomes: data.outcomes,
        scientificSignificance: data.scientificSignificance,
        body: content.trim()
      } as CaseStudyRecord;
    })
  );

  return items;
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudyRecord | null> {
  const items = await getCaseStudies();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getProducts(): Promise<ProductRecord[]> {
  const files = await readMarkdownFiles("products");

  const items = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(contentRoot, "products", file);
      const raw = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title,
        category: data.category,
        summary: data.summary,
        body: content.trim()
      } as ProductRecord;
    })
  );

  return items;
}
