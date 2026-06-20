import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "CloudWhisper - Webflow HTML website template",
  description:
    "Looking to build a bold online presence for your AI startup? Cloudwhisper is a Generative AI template crafted to highlight your tech, drive engagement, and inspire trust.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-wf-domain="cloudwhispertemplate.webflow.io"
      data-wf-page="682751255bcef0a07bed29e2"
      data-wf-site="682751255bcef0a07bed2a01"
      className={`w-mod-js ${inter.variable} ${interTight.variable}`}
    >
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
