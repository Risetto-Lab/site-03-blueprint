import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://site-03-blueprint.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ProjectPack UK — CDM & property templates for small contractors",
  description:
    "Editable, UK-specific CDM and property compliance templates in plain English. Get the paperwork sorted before the job starts.",
  openGraph: {
    title: "ProjectPack UK — CDM & property templates for small contractors",
    description:
      "Editable, UK-specific CDM and property compliance templates in plain English. Get the paperwork sorted before the job starts.",
    url: SITE_URL,
    siteName: "ProjectPack UK",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ProjectPack UK — a blueprint-style hero with the tagline: get the paperwork sorted before the job starts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectPack UK — CDM & property templates for small contractors",
    description:
      "Editable, UK-specific CDM and property compliance templates in plain English.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#EFF3F6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`h-full ${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="h-full bg-bg text-ink antialiased font-body">
        <a
          href="#main"
          className="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
