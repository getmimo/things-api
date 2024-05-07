import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100">
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Syne+Mono&family=Ubuntu+Mono&display=swap"
        rel="stylesheet"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
