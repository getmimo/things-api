import { Creepster, Inter, Press_Start_2P, Russo_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-creepster",
});
const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});
const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo-one",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-white ${creepster.variable} ${pressStart.variable} ${russoOne.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
