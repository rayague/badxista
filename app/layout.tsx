import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ShieldCheck, Flame, Users } from "lucide-react";
import Head from "next/head";
// Fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "BADXISTA | Style Bad Girl 2024 - Tenues TikTok Tendances 🔥",
    template: "%s | BADXISTA",
  },
  description:
    "Collection officielle des looks Bad Girl viraux sur TikTok. Packs Complets Streetwear & Soirée ⚡ Livraison Express · Paiement Sécurisé · Avis 5⭐",
  keywords: [
    "tenue tiktok tendance 2024",
    "bad girl outfit pas cher",
    "pack streetwear instagram",
    "glow-up transformation look",
    "robe soirée sculptante",
    "cargo femme style rihanna",
    "basket streetwear clean",
    "maquillage glow-up viral",
    "accessoires tendance gen z",
    "parfum célébrité abordable",
    "look kylie jenner pas cher",
    "tenue club nuit tendance",
    "glow oil corps brillant",
    "mode féminine abordable",
    "achat vêtements amazon",
    "outfit tendance 2025",
    "vêtements stylés pas chers",
    "tenue glam inspiration pinterest",
    "glow-up soins peau lisse",
    "ensemble fashion femme amazon",
    "mode urbaine féminine chic",
    "tenue festival été tendance",
    "idées look femme stylée",
    "jogging femme streetwear stylé",
    "tops viraux instagram",
    "manteau oversize bad girl",
    "legging push-up tendance",
    "tenue comfy chic amazon",
    "bijoux tendance 2024 pas cher",
    "soin visage glow naturel",
    "influenceuses look street glam",
    "style vestimentaire gen z",
    "lookbook amazon fashion",
    "inspirations mode célébrités",
    "produits beauté tendance tiktok",
    "routine beauté glow-up",
    "crop top viral tiktok",
    "tenue deux pièces tendance",
    "robe moulante amazon",
    "vêtements sexy chic femme",
    "haute couture abordable",
    "look fashionista 2024",
    "tenue soirée satinée",
    "maquillage soirée glow",
    "chaussures plateforme tendance",
    "eyeliner sirène look",
    "set lounge femme",
    "sac à main tendance 2024",
    "nail art viral tiktok",
    "look minimaliste glam",
    "accessoires cheveux stylés",
    "tenue bad baddie vibes",
    "routine skincare éclat",
    "corset mode amazon",
    "look esthétique tumblr",
    "ensemble comfy amazon",
    "idée tenue glow-up 2024",
    "look complet amazon pas cher",
    "tenue instagrammable tendance",
    "coffret maquillage viral",
    "outfit soirée fille stylée",
    "kit glow routine complète",
    "robe fendue glamour 2024",
    "inspiration look street fashion",
    "haut backless sexy",
    "vêtement amazon qui cartonne",
    "tenue fashion nova style",
    "glow-up skincare routine",
    "outfit baddie amazon",
    "must have beauté 2024",
    "parfum femme qui dure",
    "pack vêtements été 2024",
    "top corset tiktok viral",
    "maquillage soirée paillettes",
    "look red carpet abordable",
    "ensemble glam fit amazon",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://badxista.vercel.app/",
    siteName: "BADXISTA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BADXISTA - Looks Bad Girl Tendances 2024",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@badxista",
  },
};

// Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/globe.svg" />
        <meta
          name="description"
          content="BADXISTA – Découvrez les looks Bad Girl viraux TikTok : streetwear oversize, glamwear scintillant et routines glow-up. Livraison express, paiement sécurisé, avis 5⭐."
        />
        <meta
          name="keywords"
          content="bad girl, streetwear, glamwear, fashion 2024, tendance femme, outfit TikTok, tenues virales, looks stylés, tenues soirée, pack vêtements, glow routine, parfum femme, tenues chic, looks bad girl, total look, tenues pas chères, vêtements femme tendance, style urbaine, habits glam, tenues d'été, vêtements AR, robe strass, talons glam, sac banane tendance, legging sculptant, routine beauté, idée tenue, influenceuse style, tenues comfy, chill vibes, jogging femme, mode TikTok, idées de look, tenues AR, vêtements Amazon, Amazon fashion, pack prêt à commander, tenues 2024, mode ado fille, habits de soirée, mode pas chère, look Instagram, looks sexy, mode jeune femme, habits viraux, tenues casual, mode comfy chic, looks stylés Amazon, style glow up, look transformation, parfum sucré, outfit festival, outfit street chic, tenue jour/nuit, style transformation, Amazon tendance, collection femme, mode lookbook, tenues TikTok girl, style TikTok, Amazon wishlist"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="BADXISTA" />
        <meta
          property="og:title"
          content="BADXISTA | Looks Bad Girl TikTok – Streetwear, Glamwear & Glow-Up"
        />
        <meta
          property="og:description"
          content="Plongez dans l’univers BADXISTA : tenues oversize, paillettes et routines beauté glow-up. Livraison rapide et avis 5 étoiles !"
        />
        <meta
          property="og:image"
          content="https://badxista.vercel.app/og-image.jpg"
        />
        <meta property="og:url" content="https://badxista.vercel.app/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@badxista" />
        <meta
          name="twitter:title"
          content="BADXISTA | Streetwear, Glamwear & Glow-Up TikTok"
        />
        <meta
          name="twitter:description"
          content="BADXISTA – Tes looks Bad Girl préférés sur TikTok : packs mode, routines beauté & accessoires tendances. 🚀"
        />
        <meta
          name="twitter:image"
          content="https://badxista.vercel.app/og-image.jpg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-gray-100 antialiased`}
      >
        <Navbar />

        <main className="min-h-[calc(100vh-140px)]">{children}</main>

        <footer className="bg-gradient-to-b from-black via-black to-[#0f0c29] text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Bloc Avantages */}
            <div className="order-1 md:order-2 space-y-8 text-center md:text-left">
              <AvantageItem
                icon={<ShieldCheck className="w-7 h-7 text-green-400" />}
                title="Paiement sécurisé"
                description="Notre plateforme est protégée. Tes données le sont aussi."
              />
              <AvantageItem
                icon={<Flame className="w-7 h-7 text-orange-400" />}
                title="Quantités limitées"
                description="Nos pièces partent vite. Ce que tu vois ne sera peut-être plus là demain."
              />
              <AvantageItem
                icon={<Users className="w-7 h-7 text-purple-400" />}
                title="+40K fashionistas"
                description="Une communauté stylée, engagée, et toujours à la pointe. Tu viens ?"
              />
            </div>

            {/* Bloc Newsletter */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">
                💌 Reste dans la boucle
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto md:mx-0">
                Reçois nos offres secrètes, sélections limitées et pépites avant
                tout le monde. Zéro spam. Juste des looks 🔥.
              </p>
              <form
                action="https://systeme.io/ton-formulaire"
                method="POST"
                target="_blank"
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto md:mx-0"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Entre ton email ici"
                  className="w-full px-5 py-3 rounded-full text-black placeholder-gray-400 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 transition-colors px-8 py-3 rounded-full font-semibold text-white"
                >
                  Je m’abonne
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-sm px-6">
            © {new Date().getFullYear()} BADXISTA. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}

// Composant interne pour chaque bloc avantage
function AvantageItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
      {icon}
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
