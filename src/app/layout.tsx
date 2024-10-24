import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minicurso Next.js",
  description: "Aprendendo os Principios do Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-300">
        {children}
      </body>
    </html>
  );
}
