import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geistSans = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nolan Whittaker — Junior Software Developer",
  description:
    "Portfolio of Nolan Whittaker, a junior student software developer building accessible, full-stack web applications with TypeScript, React and Node. With an interest in Cloud applications.",
  generator: "v0.app",
  openGraph: {
    title: "Nolan Whittaker — Junior Software Developer",
    description:
      "Selected projects, experience and writing from a junior software developer focused on the web.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/images/profilephoto.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/profilephoto.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/profilephoto.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfd" },
    { media: "(prefers-color-scheme: dark)", color: "#131417" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
