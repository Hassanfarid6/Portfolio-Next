import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

   // 1. Create the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email_user, // your Gmail
        pass: process.env.email_pass, // your Gmail App Password
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${email}>`,
      to: process.env.email_user,
      replyTo: email,
      subject: `📩 Message from (${email}) — ${subject}`,
      text: `New message from: ${email}\n\n${message}`,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ status: 200, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ status: 500, message: "Failed to send email", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
