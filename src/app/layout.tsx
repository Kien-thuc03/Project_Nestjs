import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "NextJS Application",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
