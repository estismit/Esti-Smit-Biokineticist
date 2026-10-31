export async function GET() {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return Response.json({ hasKey: false });
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-haiku-4-5', max_tokens: 5, messages: [{ role: 'user', content: 'Say ok' }] }),
    });
    const text = await res.text();
    return Response.json({ hasKey: true, keyStart: key.slice(0, 7), status: res.status, detail: text.slice(0, 300) });
  } catch (e) {
    return Response.json({ hasKey: true, error: String(e) });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const raw = Array.isArray(body.messages) ? body.messages.slice(0, 7) : [];
    const messages = raw
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .map((m) => ({ role: m.role, content: m.content.slice(0, 6000) }));
    if (!messages.length || messages[0].role !== 'user') {
      return Response.json({ error: 'bad request' }, { status: 400 });
    }
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 400,
        messages,
      }),
    });
    if (!res.ok) {
      console.error('anthropic error', res.status, (await res.text()).slice(0, 300));
      return Response.json({ error: 'upstream' }, { status: 502 });
    }
    const data = await res.json();
    const text = (data.content || []).map((c) => c.text || '').join('').trim();
    return Response.json({ text });
  } catch (e) {
    console.error('chat route error', String(e));
    return Response.json({ error: 'server' }, { status: 500 });
  }
}
