import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hasana-portfolio.vercel.app"),
  title: {
    default: "Hasana Zahid | AI Engineer",
    template: "%s | Hasana Zahid",
  },
  description:
    "Portfolio of Hasana Zahid, an AI engineer specializing in Generative AI, Agentic AI, computer vision, and real-world ML systems.",
  openGraph: {
    title: "Hasana Zahid | AI Engineer",
    description:
      "Building intelligent systems that turn research into deployable AI products.",
    url: "https://hasana-portfolio.vercel.app",
    siteName: "Hasana Zahid",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasana Zahid | AI Engineer",
    description:
      "Generative AI, Agentic AI, CV, and production-grade ML systems.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0e17] text-white">{children}</body>
    </html>
  );
}
