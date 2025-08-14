import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PolarBuy | Domine Sua Cidade, Recupere Seu Lucro",
  description: "Pare de pagar taxas abusivas. Com o PolarBuy e a tecnologia PolarChain™, você corta custos, controla sua entrega e aumenta suas vendas.",
  keywords: "PolarBuy, e-commerce, taxas baixas, entrega local, PolarChain, comércio local",
  authors: [{ name: "PolarBuy Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
