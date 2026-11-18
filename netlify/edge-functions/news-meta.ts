import type { Config, Context } from "@netlify/edge-functions";
import { findNews, plainText } from "../../news-data.js";

const SITE_NAME = "DIDNOTFINISH";

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Añade título, descripción y etiquetas Open Graph / Twitter a cada noticia
// para que Facebook, X, WhatsApp, etc. muestren una vista previa correcta.
export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  const match = url.pathname.match(/^\/noticias\/([^/]+)\/?$/);
  const item = match ? findNews(decodeURIComponent(match[1])) : null;

  const response = await context.next();
  if (!item || !(response.headers.get("content-type") || "").includes("text/html")) return response;

  const title = `${plainText(item.title)} — ${SITE_NAME}`;
  const rawDescription = plainText(item.subtitle || item.body);
  const description = rawDescription.length > 200 ? rawDescription.slice(0, 197).trimEnd() + "…" : rawDescription;
  const canonical = `${url.origin}/noticias/${match![1]}`;

  const tags = [
    `<meta name="description" content="${escapeAttr(description)}">`,
    `<link rel="canonical" href="${escapeAttr(canonical)}">`,
    `<meta property="og:type" content="article">`,
    `<meta property="og:site_name" content="${SITE_NAME}">`,
    `<meta property="og:locale" content="es_ES">`,
    `<meta property="og:title" content="${escapeAttr(plainText(item.title))}">`,
    `<meta property="og:description" content="${escapeAttr(description)}">`,
    `<meta property="og:url" content="${escapeAttr(canonical)}">`,
    item.image ? `<meta property="og:image" content="${escapeAttr(new URL(item.image, url.origin).href)}">` : "",
    `<meta name="twitter:card" content="${item.image ? "summary_large_image" : "summary"}">`,
    `<meta name="twitter:title" content="${escapeAttr(plainText(item.title))}">`,
    `<meta name="twitter:description" content="${escapeAttr(description)}">`,
  ].filter(Boolean).join("\n");

  let html = await response.text();
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(title)}</title>\n${tags}`);

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  return new Response(html, { status: response.status, headers });
};

export const config: Config = {
  path: "/noticias/*",
};
