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

    // 2. Email content
    const mailOptions = {
      from: process.env.email_user,
      to: email,
      subject: subject,
      text: message,
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
