import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codebandhan.com'),
  title: "Engineering Governance Platform for Mobile & Backend Teams | CodeBandhan",
  description: "CodeBandhan provides automated architecture validation and governance scoring for Flutter and Express teams. Prevent structural drift before it becomes technical debt.",
  keywords: "engineering governance platform, flutter architecture validation, backend structural governance, codebase health monitoring, mobile architecture integrity, typescript backend structure validation",
  openGraph: {
    title: "Engineering Governance Platform | CodeBandhan",
    description: "Automated architecture validation and structural scoring for scaling engineering teams.",
    type: "website",
    url: "https://codebandhan.com",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Governance Platform | CodeBandhan",
    description: "Prevent structural drift before it becomes technical debt.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CodeBandhan",
  "url": "https://codebandhan.com",
  "logo": "https://codebandhan.com/logo.png",
  "description": "Engineering governance platform providing automated architecture validation and scoring.",
  "sameAs": [
    "https://github.com/codebandhan"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased text-white selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  );
}
