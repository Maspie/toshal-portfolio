
export async function askOpenRouter(userMessage: string): Promise<string> {
  const prompt = `
You are an assistant for Toshal Warke's portfolio website.
Reply in structured JSON when needed or in short messages otherwise.

Examples:
User: Show me your resume
Assistant: { "action": "open", "target": "resume" }

User: Show React projects
Assistant: { "action": "scroll", "target": "projects" }

User: Contact Toshal
Assistant: { "action": "scroll", "target": "contact" }

User: Who are you?
Assistant: I’m Toshal’s assistant, here to help explore his work!

User: ${userMessage}
Assistant:
  `;

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://yourwebsite.com",
      "X-Title": "Toshal Portfolio Assistant"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        { role: "system", content: "You are a helpful assistant for Toshal's portfolio website." },
        { role: "user", content: prompt }
      ]
    }),
  });

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content || "";
  return reply;
}
