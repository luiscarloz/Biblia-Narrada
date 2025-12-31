import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="antialiased"
        style={{ fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#c89635' }}
      >
        {children}
      </body>
    </html>
  );
}
