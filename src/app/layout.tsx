import { DATA, TEXT } from "@/data/resume";
import type { Metadata } from "next";
import "./portfolio.css";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: { default: DATA.name, template: `%s | ${DATA.name}` },
  description: TEXT.pt.description,
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en", es: "/es" } },
  openGraph: {
    title: DATA.name,
    description: TEXT.pt.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: { title: DATA.name, card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap"
        />
      </head>
      <body className="pf">{children}</body>
    </html>
  );
}
