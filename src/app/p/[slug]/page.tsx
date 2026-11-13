import { ProjectPage, SLUGS, type Slug } from "@/components/projects";
import { TEXT } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;
export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = TEXT.pt;
  const name = slug === "ledger" ? t.ledger.name : slug === "dumpit" ? t.project.name : t.clover.name;
  const short = slug === "ledger" ? t.ledger.short : slug === "dumpit" ? t.project.short : t.clover.short;
  return { title: name, description: short, alternates: { languages: { "pt-BR": `/p/${slug}`, en: `/en/p/${slug}`, es: `/es/p/${slug}` } } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(SLUGS as readonly string[]).includes(slug)) notFound();
  return <ProjectPage locale="pt" slug={slug as Slug} />;
}
