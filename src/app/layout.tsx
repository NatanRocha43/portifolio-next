import type { Metadata, Viewport } from "next";
import { Sora, Fraunces } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Natan Rocha – Desenvolvedor Front-End | Portfólio",
  description: "Portfólio de Natan Rocha, desenvolvedor Front-End especializado em React, Next.js, Stencil.js, TypeScript, VTEX IO e Drupal DX8. Interfaces escaláveis, de alta conversão e acessíveis.",
  keywords: ["Portfólio", "Front-End", "Desenvolvedor Web", "React", "Next.js", "Drupal", "VTEX IO", "Stencil.js", "TypeScript"],
  authors: [{ name: "Natan Rocha" }],
  creator: "Natan Rocha",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Natan Rocha | Desenvolvedor Front-End",
    description: "Portfólio profissional de Natan Rocha, especialista em engenharia de interface, performance web e e-commerce.",
    url: "https://portifolio-next-eight.vercel.app",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable} ${fraunces.variable} antialiased`}>
        {children}
        <Toaster 
          position="top-center" 
          toastOptions={{ duration: 3000 }} 
        />
      </body>
    </html>
  );
}
