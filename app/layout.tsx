import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { ShieldCheck, Flame, Users } from "lucide-react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata
export const metadata: Metadata = {
  title: "Mode Féminine Lifestyle | Collections TikTok & Instagram VIRALES",
  description: "✨ Découvrez les collections de mode les plus demandées sur TikTok & Instagram. Sélection validée par +50K influenceuses. Livraison Express 24h, Retour Gratuit.",
  keywords: "mode féminine, tendance tiktok, collection instagram, influenceuse mode, streetwear, glamour, beauté, routine glow",
  openGraph: {
    title: "Mode Féminine Lifestyle | Collections VIRALES TikTok & Instagram",
    description: "✨ Collections de mode validées par +50K influenceuses. Livraison Express 24h, Retour Gratuit.",
    images: [
      {
        url: "/files/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mode Féminine Lifestyle - Collections VIRALES",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mode Féminine Lifestyle | Collections VIRALES",
    description: "✨ Collections de mode validées par +50K influenceuses. Livraison Express 24h, Retour Gratuit.",
    images: ["/files/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.amazon.fr" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical assets */}
        <link rel="preload" href="/files/picture6.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/files/picture17.jpg" as="image" />
        <link rel="preload" href="/files/picture14.jpg" as="image" />
        <link rel="preload" href="/files/picture15.jpg" as="image" />
      </Head>
      <body className={`${inter.className} antialiased`}>
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

            {/* Newsletter Component */}
            <div className="order-2 md:order-1">
              <Newsletter />
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-sm px-6">
            © {new Date().getFullYear()} BADXISTA. Tous droits réservés.
          </div>
        </footer>
        {/* Scripts de tracking et analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'votre-id-ga');

              // Facebook Pixel
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'votre-id-pixel');
              fbq('track', 'PageView');
            `,
          }}
        />
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
