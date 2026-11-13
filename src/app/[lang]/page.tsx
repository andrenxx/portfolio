import Home from "@/components/home";
import { TEXT, type Locale } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const OTHER = ["en", "es"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return OTHER.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = TEXT[lang as Locale];
  if (!t) return {};
  return {
    description: t.description,
    openGraph: { description: t.description, locale: t.ogLocale },
    alternates: { canonical: `/${lang}`, languages: { "pt-BR": "/", en: "/en", es: "/es" } },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!(OTHER as readonly string[]).includes(lang)) notFound();
  return <Home locale={lang as Locale} />;
}
