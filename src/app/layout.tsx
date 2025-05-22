import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Natan – Desenvolvedor Front-End | Portfólio",
  description: "Portfólio de Natan, desenvolvedor Front-End com experiência em React, Next.js, Stencil.js, TypeScript, VTEX IO e Drupal. Interfaces modernas e performáticas.",
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
    <html lang="pt-br">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Toaster 
          position="top-center" 
          toastOptions={{ duration: 3000 }} 
        />
      </body>
    </html>
  );
}
