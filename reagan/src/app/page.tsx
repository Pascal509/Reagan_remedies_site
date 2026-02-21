import {
  Hero,
  NewsSection,
  ProductPreview,
  ResearchHighlight,
  Stats
} from "@/components/home";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <ProductPreview />
      <ResearchHighlight />
      <NewsSection />
    </div>
  );
}
