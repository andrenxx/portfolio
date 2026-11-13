"use client";

import { useEffect } from "react";

// Mantém o atributo lang do <html> igual ao idioma da página.
export default function LangSync({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
