
export default function handleBotResponse(response: any) {
  if (response.action === 'scroll' && response.target) {
    const el = document.getElementById(response.target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  if (response.action === 'open' && response.target === 'resume') {
    window.open('/your-resume.pdf', '_blank');
  }
}
