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
    if (!res.ok) return Response.json({ error: 'upstream' }, { status: 502 });
    const data = await res.json();
    const text = (data.content || []).map((c) => c.text || '').join('').trim();
    return Response.json({ text });
  } catch (e) {
    return Response.json({ error: 'server' }, { status: 500 });
  }
}
