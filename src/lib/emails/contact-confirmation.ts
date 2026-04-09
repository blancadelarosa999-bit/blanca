export function contactConfirmationEmail({ name }: { name: string }): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#FDF8F0;font-family:Georgia,serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="background-color:#02206D;padding:24px 32px;border-radius:2px 2px 0 0;">
      <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:bold;">Blanca De La Rosa</h1>
    </div>
    <div style="background-color:#ffffff;padding:32px;border:1px solid #e5e0d8;border-top:none;">
      <p style="color:#2D2D2D;font-size:18px;line-height:1.7;margin:0 0 16px 0;">
        Dear ${escapeHtml(name)},
      </p>
      <p style="color:#2D2D2D;font-size:16px;line-height:1.7;margin:0 0 16px 0;">
        Thank you for reaching out. I have received your message and will get back to you as soon as possible.
      </p>
      <p style="color:#2D2D2D;font-size:16px;line-height:1.7;margin:0 0 16px 0;">
        In the meantime, feel free to explore my published works at
        <a href="https://authorblancadelarosa.com/books" style="color:#018A9E;">authorblancadelarosa.com/books</a>.
      </p>
      <div style="margin-top:24px;padding-top:24px;border-top:2px solid #C5A258;">
        <p style="color:#2D2D2D;font-size:16px;line-height:1.7;margin:0;">
          Warm regards,<br>
          <strong>Blanca De La Rosa</strong>
        </p>
        <p style="color:#888;font-size:13px;font-style:italic;margin:8px 0 0 0;">
          Write to Inspire, Uplift, and Encourage Through My Words
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
