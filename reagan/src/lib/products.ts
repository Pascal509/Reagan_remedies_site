export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  image: string;
  category: string;
  regulatoryStatus: string;
  clinicalPhase: string;
  activeIngredient: string;
  dosage: string;
}

export const products: Product[] = [
  {
    id: "prd-001",
    slug: "respiracore",
    name: "RespiraCore",
    shortDescription:
      "Advanced inhalation platform for optimized pulmonary performance and comfort.",
    fullDescription:
      "RespiraCore delivers targeted respiratory support with clinically validated delivery precision and patient-centric adherence monitoring.",
    price: "$1,250 / treatment cycle",
    image: "/images/Ashnil-R.jpg",
    category: "Respiratory",
    regulatoryStatus: "FDA Approved",
    clinicalPhase: "Phase 4",
    activeIngredient: "Fluticasone propionate",
    dosage: "2 inhalations daily"
  },
  {
    id: "prd-002",
    slug: "ophthaguard",
    name: "OphthaGuard",
    shortDescription:
      "Precision formulation designed to protect and enhance ocular health.",
    fullDescription:
      "OphthaGuard provides sustained ocular protection with advanced delivery technology and enhanced tolerability for long-term use.",
    price: "$620 / monthly supply",
    image: "/images/eye-drop.jpg",
    category: "Ophthalmology",
    regulatoryStatus: "EMA Approved",
    clinicalPhase: "Phase 4",
    activeIngredient: "Cyclosporine A",
    dosage: "1 drop per eye twice daily"
  },
  {
    id: "prd-003",
    slug: "nutriva",
    name: "Nutriva",
    shortDescription:
      "Comprehensive nutritional support engineered for optimal absorption.",
    fullDescription:
      "Nutriva supports patient recovery and long-term wellness with precision-formulated micronutrients and evidence-backed absorption pathways.",
    price: "$280 / monthly regimen",
    image: "/images/Folic-acids.jpg",
    category: "Nutrition",
    regulatoryStatus: "Global Compliance",
    clinicalPhase: "Phase 3",
    activeIngredient: "Methylfolate complex",
    dosage: "1 capsule daily"
  },
  {
    id: "prd-004",
    slug: "gyneva",
    name: "Gyneva",
    shortDescription:
      "Targeted therapy designed to support women's health with precision.",
    fullDescription:
      "Gyneva delivers hormone-regulated support with a clinically validated profile, optimized for efficacy and long-term safety.",
    price: "$940 / treatment cycle",
    image: "/images/gestinine.jpg",
    category: "Gynecology",
    regulatoryStatus: "FDA Fast Track",
    clinicalPhase: "Phase 3",
    activeIngredient: "Estradiol valerate",
    dosage: "1 tablet daily"
  },
  {
    id: "prd-005",
    slug: "reastomy",
    name: "Reastomy",
    shortDescription: "Chewable stomach tablet formulated for rapid acid relief.",
    fullDescription:
      "Reastomy is a chewable antacid designed to provide fast, reliable relief for gastric discomfort with a patient-friendly dosing profile.",
    price: "$120 / box",
    image: "/images/reastomy.jpg",
    category: "Gastroenterology",
    regulatoryStatus: "OTC", 
    clinicalPhase: "Marketed",
    activeIngredient: "Aluminum hydroxide + Magnesium hydroxide",
    dosage: "Chew 1–2 tablets as needed"
  },
  {
    id: "prd-006",
    slug: "reacoten-v6",
    name: "Reacoten V6",
    shortDescription: "Clotrimazole vaginal tablet for targeted antifungal care.",
    fullDescription:
      "Reacoten V6 provides localized antifungal therapy with clotrimazole to support effective management of vaginal candidiasis.",
    price: "$180 / pack",
    image: "/images/reacoten-v6.jpg",
    category: "Gynecology / Infectious Disease",
    regulatoryStatus: "Rx",
    clinicalPhase: "Marketed",
    activeIngredient: "Clotrimazole",
    dosage: "1 vaginal tablet nightly for 6 days"
  },
  {
    id: "prd-007",
    slug: "mazoka",
    name: "Mazoka",
    shortDescription: "Analgesic/NSAID combination for musculoskeletal pain relief.",
    fullDescription:
      "Mazoka combines paracetamol and diclofenac for fast-acting relief of pain, inflammation, and fever associated with musculoskeletal conditions.",
    price: "$95 / box",
    image: "/images/mazoka.jpg",
    category: "General Medicine / Pain Management",
    regulatoryStatus: "OTC",
    clinicalPhase: "Marketed",
    activeIngredient: "Paracetamol 500mg + Diclofenac 50mg",
    dosage: "1 tablet twice daily after meals"
  }
];
