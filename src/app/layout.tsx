import type { Metadata } from "next";
import '@fontsource-variable/space-grotesk';
import "./globals.css";

export const metadata: Metadata = {
  title: "Tan Chia Chun",
  description: "Personal portfolio website of Tan Chia Chun",
  applicationName: "Tan Chia Chun",
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
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
