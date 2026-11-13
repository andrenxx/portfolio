/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { DATA, TEXT } from "@/data/resume";

// Imagem que aparece quando o link é compartilhado (LinkedIn, WhatsApp etc.).
export const alt = `${DATA.name} · ${TEXT.pt.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
  const pub = path.join(process.cwd(), "public");
  const [display, text, photo] = await Promise.all([
    readFile(path.join(pub, "fonts/archivo-cond-800.ttf")),
    readFile(path.join(pub, "fonts/archivo-500.ttf")),
    readFile(path.join(pub, "me.jpg")),
  ]);
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const t = TEXT.pt;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0a0c11", padding: 64, gap: 56, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Display", fontSize: 132, lineHeight: 0.86, letterSpacing: -2, textTransform: "uppercase" }}>
            <span style={{ color: "#eceef4" }}>{DATA.firstName}</span>
            <span style={{ color: "#6880bb" }}>{DATA.lastName}</span>
          </div>
          <div style={{ marginTop: 36, fontFamily: "Text", fontSize: 30, color: "#eceef4" }}>
            {`${t.role} · ${t.location}`}
          </div>
          <div style={{ marginTop: 14, fontFamily: "Text", fontSize: 24, lineHeight: 1.4, color: "#b0b6c6", maxWidth: 720 }}>
            React Native · Node.js · TypeScript · PostgreSQL · Cloudflare
          </div>
        </div>
        <div style={{ display: "flex", width: 360, height: 450, borderRadius: 24, overflow: "hidden", border: "2px solid rgba(236,238,244,0.14)" }}>
          <img src={src} width={360} height={450} alt="" style={{ objectFit: "cover", objectPosition: "30% 30%" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Display", data: display, weight: 800, style: "normal" },
        { name: "Text", data: text, weight: 500, style: "normal" },
      ],
    }
  );
}
