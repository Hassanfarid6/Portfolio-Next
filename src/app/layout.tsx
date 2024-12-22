
import localFont from "next/font/local";
// import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
// import WhatsappButton from "@/components/WhatsappButton";
import "./globals.css";
// import MouseTrackingBackground from "@/components/MouseTrackingComponent";

export const metadata:Metadata = {
  title: {
    default:"CodeAN-Portfolio",
    template:"%s | CodeAN-Portfolio ",
  },
  description: "Developed by Ahmed Noorani",
  icons:"/image.png"
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <div className="">

        {children}
        {/* <WhatsappButton/> */}
    </div>
  </body>
</html>

  );
}
