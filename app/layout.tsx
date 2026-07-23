import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["cyrillic", "latin"], weight: ["400", "500", "600"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["cyrillic", "latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Дмитрий Тихомиров — ведущий событий в Костроме",
  description: "Современные свадьбы, корпоративы, юбилеи и выпускные без шаблонов. Узнайте свободную дату и обсудите ваше событие.",
  keywords: ["ведущий Кострома", "ведущий на свадьбу", "ведущий на корпоратив", "Дмитрий Тихомиров"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Дмитрий Тихомиров — праздник, который звучит как вы",
    description: "Живая атмосфера, точный юмор и внимание к людям.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/og.png", width: 1680, height: 945, alt: "Дмитрий Тихомиров — ведущий событий" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Person", "LocalBusiness"],
    name: "Дмитрий Тихомиров",
    jobTitle: "Ведущий мероприятий",
    areaServed: ["Кострома", "Россия"],
    sameAs: ["https://vk.ru/id265160270", "https://www.instagram.com/tihomirov_dim/"],
  };
  return (
    <html lang="ru">
      <body className={`${display.variable} ${sans.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
