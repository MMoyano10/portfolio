// app/api/kick/status/route.ts
import { NextResponse } from 'next/server';

export const revalidate = 0; 
export const dynamic = 'force-dynamic';

type KickChannelResponse =
  | {
      livestream?: { is_live?: boolean; session_title?: string; title?: string } | null;
      recent_livestream?: { is_live?: boolean; session_title?: string; title?: string } | null;
      current_livestream?: { is_live?: boolean; session_title?: string; title?: string } | null;
      is_live?: boolean;
      slug?: string;
      // algunos esquemas traen 'title' a nivel raíz
      title?: string;
    }
  | Record<string, any>;

function pickIsLive(obj: KickChannelResponse | undefined | null): boolean | null {
  if (!obj || typeof obj !== 'object') return null;
  const candidates = [
    obj?.livestream?.is_live,
    obj?.recent_livestream?.is_live,
    obj?.current_livestream?.is_live,
    (obj as any)?.is_live,
  ];
  for (const c of candidates) {
    if (typeof c === 'boolean') return c;
  }
  return null;
}

function pickTitle(obj: KickChannelResponse | undefined | null): string | null {
  if (!obj || typeof obj !== 'object') return null;
  const candidates = [
    obj?.livestream?.session_title,
    obj?.livestream?.title,
    obj?.current_livestream?.session_title,
    obj?.current_livestream?.title,
    obj?.recent_livestream?.session_title,
    obj?.recent_livestream?.title,
    (obj as any)?.title,
    (obj as any)?.slug,
  ];
  for (const c of candidates) {
    if (typeof c === 'string' && c.trim()) return c;
  }
  return null;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const user = searchParams.get('user') || process.env.NEXT_PUBLIC_KICK_USERNAME;

    if (!user) {
      return NextResponse.json(
        { live: false, error: 'Falta el usuario. Usa ?user=miUsuario o define NEXT_PUBLIC_KICK_USERNAME.' },
        { status: 400 }
      );
    }

    // Simulador opcional
    if ((process.env.KICK_USE_SIMULATOR || '').toLowerCase() === 'true') {
      const minutes = new Date().getUTCMinutes();
      const live = minutes % 5 === 0;
      return NextResponse.json(
        { live, source: 'simulator', user, title: live ? 'Simulador en vivo' : null, updatedAt: new Date().toISOString() },
        { status: 200, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    let live: boolean | null = null;
    let title: string | null = null;
    let source: 'api.kick.com' | 'kick.com' | 'unknown' = 'unknown';

    // 1) API privada
    try {
      const r1 = await fetch(
        `https://api.kick.com/private/v1/channels/${encodeURIComponent(user)}`,
        { cache: 'no-store', next: { revalidate: 0 }, headers: { 'User-Agent': 'Mozilla/5.0' } }
      );
      if (r1.ok) {
        const j1 = (await r1.json()) as KickChannelResponse;
        const v1 = pickIsLive(j1);
        if (v1 !== null) {
          live = v1;
          source = 'api.kick.com';
          title = pickTitle(j1) ?? title;
        }
      }
    } catch { /* no-op */ }

    // 2) API pública v2 (fallback)
    if (live === null) {
      const r2 = await fetch(
        `https://kick.com/api/v2/channels/${encodeURIComponent(user)}/livestream`,
        { cache: 'no-store', next: { revalidate: 0 }, headers: { 'User-Agent': 'Mozilla/5.0' } }
      );
      if (r2.ok) {
        const j2 = (await r2.json()) as KickChannelResponse;
        const v2 = pickIsLive(j2);
        if (v2 !== null) {
          live = v2;
          source = 'kick.com';
          title = pickTitle(j2) ?? title;
        }
      }
    }

    if (live === null) {
      return NextResponse.json(
        { live: false, user, source, title: null, note: 'No se pudo determinar el estado del canal.' },
        { status: 200, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    return NextResponse.json(
      { live, user, source, title, updatedAt: new Date().toISOString() },
      { status: 200, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0' } }
    );
  } catch (e: any) {
    return NextResponse.json(
      { live: false, title: null, error: e?.message ?? 'Error desconocido' },
      { status: 200, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
