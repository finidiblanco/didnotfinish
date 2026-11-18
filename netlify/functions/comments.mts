import type { Config } from "@netlify/functions";
import { getDatabase } from "@netlify/database";
import { findNews } from "../../news-data.js";

const MAX_NAME = 60;
const MAX_MESSAGE = 2000;

const json = (data: unknown, status = 200) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

export default async (req: Request) => {
  const db = getDatabase();

  if (req.method === "GET") {
    const slug = new URL(req.url).searchParams.get("slug") || "";
    if (!findNews(slug)) return json({ error: "Noticia no encontrada." }, 404);

    const rows = await db.sql`
      SELECT id, name, message, created_at
      FROM news_comments
      WHERE slug = ${slug}
      ORDER BY created_at ASC
      LIMIT 500
    `;
    return json({
      comments: rows.map((r: any) => ({
        id: r.id,
        name: r.name,
        message: r.message,
        createdAt: new Date(r.created_at).toISOString(),
      })),
    });
  }

  if (req.method === "POST") {
    let body: any;
    try {
      body = await req.json();
    } catch {
      return json({ error: "Petición no válida." }, 400);
    }

    // Campo trampa para bots: las personas no lo ven ni lo rellenan.
    if (body?.website) return json({ ok: true }, 201);

    const slug = String(body?.slug || "");
    const name = String(body?.name || "").trim().replace(/\s+/g, " ");
    const message = String(body?.message || "").trim().replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n");

    if (!findNews(slug)) return json({ error: "Noticia no encontrada." }, 404);
    if (!name || !message) return json({ error: "Escribe tu nombre y tu comentario." }, 400);
    if (name.length > MAX_NAME) return json({ error: `El nombre no puede superar ${MAX_NAME} caracteres.` }, 400);
    if (message.length > MAX_MESSAGE) return json({ error: `El comentario no puede superar ${MAX_MESSAGE} caracteres.` }, 400);

    const [row] = await db.sql`
      INSERT INTO news_comments (slug, name, message)
      VALUES (${slug}, ${name}, ${message})
      RETURNING id, name, message, created_at
    `;
    return json(
      { comment: { id: row.id, name: row.name, message: row.message, createdAt: new Date(row.created_at).toISOString() } },
      201,
    );
  }

  return json({ error: "Método no permitido." }, 405);
};

export const config: Config = {
  path: "/api/comments",
};
