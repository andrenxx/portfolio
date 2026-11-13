import { ProjectPage, SLUGS, type Slug } from "@/components/projects";
import { TEXT, type Locale } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const OTHER = ["en", "es"] as const;
export const dynamicParams = false;
export function generateStaticParams() {
  return OTHER.flatMap((lang) => SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const t = TEXT[lang as Locale];
  if (!t) return {};
  const name = slug === "dumpit" ? t.project.name : t.clover.name;
  const short = slug === "dumpit" ? t.project.short : t.clover.short;
  return { title: name, description: short, alternates: { languages: { "pt-BR": `/p/${slug}`, en: `/en/p/${slug}`, es: `/es/p/${slug}` } } };
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!(OTHER as readonly string[]).includes(lang) || !(SLUGS as readonly string[]).includes(slug)) notFound();
  return <ProjectPage locale={lang as Locale} slug={slug as Slug} />;
}
