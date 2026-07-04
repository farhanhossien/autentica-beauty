import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProduct, getRelated } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product Not Found — Autêntica" };
  return {
    title: `${product.name} — ${product.brand} | Autêntica`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const related = getRelated(product);
  return <ProductDetail product={product} related={related} />;
}
