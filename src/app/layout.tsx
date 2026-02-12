import type { Metadata } from "next";
import { ClientLayout } from "@/components/layout/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Stephanie Macêdo | Arquitetura e Design — Projetos Modernos e Contemporâneos",
  description:
    "Escritório de arquitetura e design especializado em projetos residenciais e comerciais de linguagem moderna e contemporânea. Transformamos espaços em experiências.",
  keywords:
    "arquitetura, design de interiores, projetos modernos, arquitetura contemporânea, Stephanie Macêdo, reforma, projeto residencial, projeto comercial, Sorocaba",
  openGraph: {
    title: "Stephanie Macêdo | Arquitetura e Design",
    description:
      "Projetos modernos e contemporâneos que transformam espaços em experiências.",
    url: "https://stemacedoarquitetura.com.br",
    siteName: "Stephanie Macêdo Arquitetura e Design",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Stephanie Macêdo Arquitetura e Design",
              description:
                "Escritório de arquitetura e design especializado em projetos residenciais e comerciais de linguagem moderna e contemporânea.",
              url: "https://stemacedoarquitetura.com.br",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sorocaba",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              email: "contato@stemacedoarquitetura.com",
              taxID: "49.956.284/0001-83",
              sameAs: [
                "https://www.instagram.com/stemacedoarquitetura",
                "https://www.facebook.com/arq.stemacedo/",
              ],
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "$$",
              image: "https://stemacedoarquitetura.com.br/og-image.jpg",
            }),
          }}
        />
      </head>
      <body className="grain-overlay">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
