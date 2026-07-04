export type Badge =
  | "Authentic"
  | "Portugal"
  | "Pre-order"
  | "Best Seller"
  | "Trending"
  | "New Arrival"
  | "Limited Stock";

export type Category =
  | "Perfume"
  | "Skincare"
  | "Makeup"
  | "Foundation"
  | "Lip Products"
  | "Serums"
  | "Gift Sets";

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  categories: Category[];
  price: number;
  compareAt?: number;
  size: string;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  badges: Badge[];
  availability: "Pre-order" | "In Stock" | "Limited Stock";
  bestSeller?: boolean;
  featured?: boolean;
  shortDescription: string;
  description: string;
  ingredients: string;
  benefits: string[];
  howToUse: string;
}

export const BRANDS = [
  { name: "CeraVe", tagline: "Dermatologist Developed" },
  { name: "The Ordinary", tagline: "Clinical Formulations" },
  { name: "KIKO Milano", tagline: "Italian Colour" },
  { name: "Dior", tagline: "Parisian Couture" },
  { name: "Jean Paul Gaultier", tagline: "Iconic Fragrance" },
  { name: "ZARA", tagline: "Modern Essentials" },
];

export const CATEGORIES: { name: Category; image: string; blurb: string }[] = [
  { name: "Perfume", image: "/products/dior-sauvage-edp.jpg", blurb: "Iconic European fragrances" },
  { name: "Skincare", image: "/products/cerave-set.jpg", blurb: "Barrier-loving essentials" },
  { name: "Makeup", image: "/products/kiko-makeup-collection.jpg", blurb: "Italian colour, refined" },
  { name: "Foundation", image: "/products/kiko-unlimited-foundation.jpg", blurb: "Flawless, weightless wear" },
  { name: "Lip Products", image: "/products/kiko-glossy-lip-set.jpg", blurb: "High-shine, hydrating" },
  { name: "Serums", image: "/products/ordinary-niacinamide.jpg", blurb: "Targeted active care" },
  { name: "Gift Sets", image: "/products/kiko-glossy-lip-set.jpg", blurb: "Curated to gift" },
];

export const products: Product[] = [
  {
    slug: "dior-sauvage-elixir",
    name: "Sauvage Elixir",
    brand: "Dior",
    category: "Perfume",
    categories: ["Perfume"],
    price: 18500,
    compareAt: 21000,
    size: "60 ml Parfum",
    rating: 5,
    reviews: 214,
    image: "/products/dior-sauvage-elixir.jpg",
    gallery: [
      "/products/dior-sauvage-elixir.jpg",
      "/products/dior-sauvage-elixir-mini.jpg",
    ],
    badges: ["Best Seller", "Authentic", "Portugal"],
    availability: "Pre-order",
    bestSeller: true,
    featured: true,
    shortDescription:
      "A concentrate of spices and woods. Lavender, nutmeg and a liquorice accord in a bold, magnetic signature.",
    description:
      "Sauvage Elixir is an intensely concentrated interpretation of the Sauvage universe. A spicy freshness of cinnamon, nutmeg and cardamom meets a liquorice accord and a powerful concentrate of lavender essence, all resting on a woody signature blending three exceptional essences. Composed by François Demachy, it is radiant, magnetic and unmistakably Dior.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Lavandula Angustifolia (Lavender) Oil, Cinnamomum Zeylanicum, Linalool, Coumarin, Limonene.",
    benefits: [
      "Exceptional longevity and sillage",
      "Concentrated parfum strength",
      "Signature lavender & spice accord",
    ],
    howToUse:
      "Apply to pulse points — wrists, neck and behind the ears. A little is enough; the elixir concentration lingers for hours.",
  },
  {
    slug: "dior-sauvage-eau-de-parfum",
    name: "Sauvage Eau de Parfum",
    brand: "Dior",
    category: "Perfume",
    categories: ["Perfume"],
    price: 13900,
    compareAt: 15500,
    size: "100 ml EDP",
    rating: 5,
    reviews: 389,
    image: "/products/dior-sauvage-edp.jpg",
    gallery: ["/products/dior-sauvage-edp.jpg", "/products/dior-sauvage-parfum.jpg"],
    badges: ["Best Seller", "Authentic", "Portugal"],
    availability: "Pre-order",
    bestSeller: true,
    featured: true,
    shortDescription:
      "Radiant, powerful and noble all at once. Bergamot lifts an ambroxan-rich, deeply woody trail.",
    description:
      "Sauvage Eau de Parfum reveals a powerfully fresh, subtly sweet and sensual composition. Notes of Calabrian bergamot bring radiant freshness, while ambroxan — drawn from precious ambergris — unfurls a powerful, deep and vibrant trail. An unmistakable modern classic.",
    ingredients:
      "Alcohol Denat., Aqua (Water), Parfum (Fragrance), Ambroxan, Citrus Bergamia (Bergamot) Peel Oil, Limonene, Coumarin.",
    benefits: [
      "Versatile day-to-night wear",
      "Fresh bergamot opening",
      "Warm ambroxan drydown",
    ],
    howToUse:
      "Spray onto pulse points from a short distance. Reapply lightly through the day to refresh the trail.",
  },
  {
    slug: "dior-sauvage-parfum",
    name: "Sauvage Parfum",
    brand: "Dior",
    category: "Perfume",
    categories: ["Perfume"],
    price: 15500,
    size: "60 ml Parfum",
    rating: 5,
    reviews: 156,
    image: "/products/dior-sauvage-parfum.jpg",
    gallery: ["/products/dior-sauvage-parfum.jpg", "/products/dior-sauvage-edp.jpg"],
    badges: ["Authentic", "Portugal", "Trending"],
    availability: "Pre-order",
    featured: true,
    shortDescription:
      "A warmer, woodier Sauvage. Mandarin brightness over a sensual sandalwood and tonka base.",
    description:
      "Sauvage Parfum wraps the Sauvage signature in warmth. Bright mandarin and a green, aromatic heart give way to a creamy, enveloping base of sandalwood and tonka bean — sensual, refined and long-lasting.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Santalum Album (Sandalwood) Oil, Citrus Nobilis (Mandarin) Peel Oil, Coumarin, Limonene.",
    benefits: [
      "Warm woody-oriental character",
      "Ideal for evening wear",
      "Rich sandalwood base",
    ],
    howToUse:
      "Apply sparingly to warm pulse points. The parfum concentration develops beautifully over several hours.",
  },
  {
    slug: "jpg-le-male-elixir",
    name: "Le Male Elixir",
    brand: "Jean Paul Gaultier",
    category: "Perfume",
    categories: ["Perfume"],
    price: 16900,
    compareAt: 18900,
    size: "125 ml Parfum",
    rating: 5,
    reviews: 178,
    image: "/products/jpg-le-male-elixir.jpg",
    gallery: ["/products/jpg-le-male-elixir.jpg", "/products/jpg-le-male-duo.jpg"],
    badges: ["Best Seller", "Authentic", "Limited Stock"],
    availability: "Limited Stock",
    bestSeller: true,
    featured: true,
    shortDescription:
      "The iconic sailor bust reimagined in gold. Honeyed lavender, vanilla and benzoin — addictive and warm.",
    description:
      "Le Male Elixir dresses the legendary Gaultier bust in radiant gold. An overdose of lavender is sweetened with honey and rich vanilla, wrapped in benzoin and tonka for an intensely warm, gourmand and magnetic parfum. A modern evolution of an all-time icon.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Lavandula Angustifolia Oil, Vanilla, Benzoin, Coumarin, Linalool.",
    benefits: [
      "Sweet, honeyed lavender signature",
      "Outstanding longevity",
      "Collectible gold flacon",
    ],
    howToUse:
      "Spray on pulse points and clothing. The gourmand base performs especially well in cooler weather.",
  },
  {
    slug: "jpg-le-male",
    name: "Le Male Le Parfum",
    brand: "Jean Paul Gaultier",
    category: "Perfume",
    categories: ["Perfume"],
    price: 11500,
    size: "125 ml EDP Intense",
    rating: 4,
    reviews: 142,
    image: "/products/jpg-le-male-duo.jpg",
    gallery: ["/products/jpg-le-male-duo.jpg", "/products/jpg-le-male-elixir.jpg"],
    badges: ["Authentic", "Portugal", "Trending"],
    availability: "Pre-order",
    shortDescription:
      "The definitive Gaultier bust in black. Cardamom, lavender and a smooth amber-vanilla drydown.",
    description:
      "Le Male Le Parfum is an intense, oriental reworking of the timeless Le Male. Fresh cardamom and lavender open onto a warm, enveloping amber and vanilla base for a seductive, sophisticated masculine signature.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Lavandula Angustifolia Oil, Vanilla, Amber Accord, Coumarin, Linalool.",
    benefits: [
      "Warm amber-vanilla base",
      "Refined evening character",
      "Iconic collectible bottle",
    ],
    howToUse:
      "Apply to pulse points. Layer lightly for daytime or build for a richer evening trail.",
  },
  {
    slug: "zara-immortal-vanilla",
    name: "Immortal Vanilla",
    brand: "ZARA",
    category: "Perfume",
    categories: ["Perfume"],
    price: 3200,
    size: "90 ml EDP",
    rating: 4,
    reviews: 96,
    image: "/products/zara-immortal-vanilla.jpg",
    gallery: ["/products/zara-immortal-vanilla.jpg"],
    badges: ["New Arrival", "Authentic", "Trending"],
    availability: "Pre-order",
    featured: true,
    shortDescription:
      "A creamy, addictive vanilla with warm amber. Modern luxury at an unbeatable price.",
    description:
      "ZARA Immortal Vanilla is a warm, gourmand fragrance built around a rich, creamy vanilla heart. Amber and soft woods add depth and longevity, making it a cosy, versatile signature that punches far above its price.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Vanilla, Amber Accord, Benzyl Salicylate, Coumarin, Linalool.",
    benefits: [
      "Creamy gourmand vanilla",
      "Surprisingly long-lasting",
      "Everyday luxury value",
    ],
    howToUse:
      "Spray generously onto pulse points and hair. Perfect for cool evenings and layering.",
  },
  {
    slug: "kiko-unlimited-foundation",
    name: "Unlimited Foundation",
    brand: "KIKO Milano",
    category: "Foundation",
    categories: ["Makeup", "Foundation"],
    price: 2600,
    compareAt: 3100,
    size: "35 ml + Concealer",
    rating: 5,
    reviews: 87,
    image: "/products/kiko-unlimited-foundation.jpg",
    gallery: ["/products/kiko-unlimited-foundation.jpg", "/products/kiko-full-coverage.jpg"],
    badges: ["Best Seller", "Authentic", "Portugal"],
    availability: "Pre-order",
    bestSeller: true,
    featured: true,
    shortDescription:
      "Longwear & comfort foundation paired with the Skin Tone concealer for a flawless, natural finish.",
    description:
      "KIKO Milano Unlimited Foundation delivers longwear coverage with a comfortable, second-skin feel. Buildable and breathable, it evens tone without caking, paired here with the Skin Tone concealer to brighten and perfect. An Italian-makeup essential.",
    ingredients:
      "Aqua, Cyclopentasiloxane, Glycerin, PEG-10 Dimethicone, Titanium Dioxide, Iron Oxides, Tocopheryl Acetate.",
    benefits: [
      "Longwear, comfortable coverage",
      "Natural, non-cakey finish",
      "Includes Skin Tone concealer",
    ],
    howToUse:
      "Apply with a brush or sponge from the centre of the face outward. Spot-conceal with the Skin Tone concealer, then blend.",
  },
  {
    slug: "kiko-full-coverage-foundation",
    name: "Full Coverage 2-in-1 Foundation",
    brand: "KIKO Milano",
    category: "Foundation",
    categories: ["Makeup", "Foundation"],
    price: 2400,
    size: "30 ml",
    rating: 4,
    reviews: 64,
    image: "/products/kiko-full-coverage.jpg",
    gallery: ["/products/kiko-full-coverage.jpg", "/products/kiko-unlimited-foundation.jpg"],
    badges: ["Authentic", "Portugal", "Trending"],
    availability: "Pre-order",
    featured: true,
    shortDescription:
      "Foundation and concealer in one. Full, flawless coverage with a soft matte finish.",
    description:
      "The KIKO Milano Full Coverage 2-in-1 Foundation and Concealer gives complete, even coverage in a single step. Its lightweight formula blurs imperfections for a smooth, soft-matte complexion that lasts all day.",
    ingredients:
      "Aqua, Dimethicone, Glycerin, Silica, Titanium Dioxide, Iron Oxides, Phenoxyethanol.",
    benefits: [
      "Full coverage in one step",
      "Soft matte finish",
      "Doubles as a concealer",
    ],
    howToUse:
      "Dot onto the face and blend outward with a sponge or brush. Build coverage where needed.",
  },
  {
    slug: "kiko-glossy-lip-set",
    name: "Glossy Lip Set",
    brand: "KIKO Milano",
    category: "Gift Sets",
    categories: ["Makeup", "Lip Products", "Gift Sets"],
    price: 2900,
    compareAt: 3500,
    size: "3 x 6.5 ml",
    rating: 5,
    reviews: 73,
    image: "/products/kiko-glossy-lip-set.jpg",
    gallery: ["/products/kiko-glossy-lip-set.jpg", "/products/kiko-makeup-collection.jpg"],
    badges: ["Best Seller", "Authentic", "Limited Stock"],
    availability: "Limited Stock",
    bestSeller: true,
    featured: true,
    shortDescription:
      "A trio of high-shine, hydrating lip glosses in beautifully wearable everyday shades.",
    description:
      "The KIKO Milano Glossy Lip Set brings together three plumping, high-shine lip products in a sleek gift-ready case. From 3D Hydra Lipgloss to a volumising lip cream, the shades layer effortlessly for a hydrated, glassy finish.",
    ingredients:
      "Polybutene, Hydrogenated Polyisobutene, Silica Dimethyl Silylate, Tocopheryl Acetate, Aroma, Mica.",
    benefits: [
      "Three high-shine shades",
      "Plumping, hydrating formulas",
      "Gift-ready presentation",
    ],
    howToUse:
      "Sweep across bare lips or layer over lipstick. Reapply through the day for lasting shine.",
  },
  {
    slug: "kiko-makeup-collection",
    name: "Trendsetter Makeup Collection",
    brand: "KIKO Milano",
    category: "Makeup",
    categories: ["Makeup", "Gift Sets"],
    price: 5900,
    compareAt: 6900,
    size: "Curated Set",
    rating: 5,
    reviews: 41,
    image: "/products/kiko-makeup-collection.jpg",
    gallery: ["/products/kiko-makeup-collection.jpg", "/products/kiko-glossy-lip-set.jpg"],
    badges: ["New Arrival", "Authentic", "Portugal"],
    availability: "Pre-order",
    featured: true,
    shortDescription:
      "A curated edit of KIKO essentials — blush, pressed powder, eyeliner, eyeshadow and lip.",
    description:
      "A hand-picked KIKO Milano collection covering the everyday essentials: a luminous blush, Matte Fusion pressed powder, definition eyeliner, high-pigment eyeshadow and an Unlimited double-touch lip. Everything you need for a complete Italian-makeup routine.",
    ingredients:
      "Varies by product. Talc, Mica, Iron Oxides, Dimethicone, Titanium Dioxide, Tocopheryl Acetate.",
    benefits: [
      "Complete makeup routine",
      "High-pigment Italian formulas",
      "Exceptional value edit",
    ],
    howToUse:
      "Build your base with the powder, add colour with blush and eyeshadow, define with liner and finish with lip colour.",
  },
  {
    slug: "the-ordinary-niacinamide",
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    category: "Serums",
    categories: ["Skincare", "Serums"],
    price: 1450,
    size: "30 ml",
    rating: 5,
    reviews: 512,
    image: "/products/ordinary-niacinamide.jpg",
    gallery: ["/products/ordinary-niacinamide.jpg"],
    badges: ["Best Seller", "Authentic", "Portugal"],
    availability: "In Stock",
    bestSeller: true,
    featured: true,
    shortDescription:
      "A high-strength vitamin and mineral serum to visibly reduce blemishes and balance oil.",
    description:
      "The Ordinary Niacinamide 10% + Zinc 1% is a high-strength blemish formula. Niacinamide (Vitamin B3) reduces the look of blemishes and congestion, while zinc balances visible sebum. A cult clinical essential for clearer, more balanced skin.",
    ingredients:
      "Aqua, Niacinamide, Pentylene Glycol, Zinc PCA, Tamarindus Indica Seed Gum, Xanthan Gum, Phenoxyethanol.",
    benefits: [
      "Visibly reduces blemishes",
      "Balances excess oil",
      "Lightweight, fast-absorbing",
    ],
    howToUse:
      "Apply a few drops to clean skin morning and evening before heavier creams. Always follow with SPF in the day.",
  },
  {
    slug: "cerave-skincare-set",
    name: "Hydrating Cleanser & Moisturising Set",
    brand: "CeraVe",
    category: "Skincare",
    categories: ["Skincare", "Gift Sets"],
    price: 3400,
    compareAt: 3900,
    size: "Cleanser + Lotion",
    rating: 5,
    reviews: 268,
    image: "/products/cerave-set.jpg",
    gallery: ["/products/cerave-set.jpg", "/products/ordinary-niacinamide.jpg"],
    badges: ["Best Seller", "Authentic", "Portugal"],
    availability: "Pre-order",
    bestSeller: true,
    featured: true,
    shortDescription:
      "The dermatologist-loved duo — Hydrating Cleanser and Moisturising Lotion with 3 essential ceramides.",
    description:
      "This CeraVe set pairs the Hydrating Cleanser with the Moisturising Lotion for a complete barrier-supporting routine. Formulated with three essential ceramides and hyaluronic acid, it cleanses and hydrates without stripping — suitable for normal to dry skin.",
    ingredients:
      "Aqua, Glycerin, Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Cholesterol, Phytosphingosine.",
    benefits: [
      "3 essential ceramides",
      "Supports the skin barrier",
      "Fragrance-free, non-stripping",
    ],
    howToUse:
      "Cleanse morning and night with the Hydrating Cleanser, then smooth the Moisturising Lotion over face and body.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getRelated = (product: Product) =>
  products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.brand === product.brand ||
          p.categories.some((c) => product.categories.includes(c)))
    )
    .slice(0, 4);
