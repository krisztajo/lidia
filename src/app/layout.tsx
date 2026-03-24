import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lídia Coaching | Emelkedj a Következő Szintre",
  description:
    "Prémium coaching szolgáltatás – Fedezd fel a benned rejlő potenciált, és lépj a tudatosság magasabb szintjére.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${playfair.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
