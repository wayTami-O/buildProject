import type { Metadata } from "next";
import "../styles/globals.css";
import { inter } from "@/styles/fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";
import { ExpandedTelegram } from "@/lib/expanded-telegram";
import { DesktopProvider } from "@/common/providers/desktop";

export const metadata: Metadata = {
  title: "Telegram App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="tg-web" src="https://telegram.org/js/telegram-web-app.js"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"/>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ExpandedTelegram/>
        <DesktopProvider/>
        
      </body>
    </html>
  );
}
