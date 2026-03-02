import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  if (!parsedUrl.hostname.endsWith("chess-results.com")) {
    return NextResponse.json(
      { error: "URL must be from chess-results.com" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; ChessArbiter/1.0)" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch page" },
        { status: 502 }
      );
    }

    const html = await res.text();
    return new NextResponse(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch page" },
      { status: 502 }
    );
  }
}
