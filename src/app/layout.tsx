import type { Metadata } from "next";
import '@fontsource-variable/space-grotesk';
import "./globals.css";

export const metadata: Metadata = {
  title: "Tan Chia Chun",
  description: "A personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'antialiased'}>
        {children}
      </body>
    </html>
  );
}
