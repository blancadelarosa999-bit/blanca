export function contactNotificationEmail({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#FDF8F0;font-family:Georgia,serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="background-color:#02206D;padding:24px 32px;border-radius:2px 2px 0 0;">
      <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:bold;">New Contact Form Message</h1>
    </div>
    <div style="background-color:#ffffff;padding:32px;border:1px solid #e5e0d8;border-top:none;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#555;font-size:13px;text-transform:uppercase;letter-spacing:1px;width:100px;vertical-align:top;">Name</td>
          <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#2D2D2D;font-size:16px;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#555;font-size:13px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Email</td>
          <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#2D2D2D;font-size:16px;"><a href="mailto:${escapeHtml(email)}" style="color:#018A9E;">${escapeHtml(email)}</a></td>
        </tr>
        ${phone ? `<tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#555;font-size:13px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Phone</td>
          <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#2D2D2D;font-size:16px;">${escapeHtml(phone)}</td>
        </tr>` : ""}
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#555;font-size:13px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Subject</td>
          <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#2D2D2D;font-size:16px;font-weight:bold;">${escapeHtml(subject)}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;color:#555;font-size:13px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Message</td>
          <td style="padding:12px 0;color:#2D2D2D;font-size:16px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</td>
        </tr>
      </table>
    </div>
    <p style="margin-top:20px;text-align:center;color:#999;font-size:12px;">
      Sent from authorblancadelarosa.com contact form
    </p>
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
