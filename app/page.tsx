"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ChevronRight,
  Sparkles,
  Magnet,
  Calendar,
  Mail,
  ShieldCheck,
  Flame,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Configuration commune des animations
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <motion.div
        style={{ y, scale }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <source src="/files/picture6.mp4" type="video/mp4" />
        </motion.video>

        <motion.div
          className="relative z-20 h-full flex items-center justify-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold mb-8 text-white"
            >
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Révolutionnez
              </span>{" "}
              votre style
            </motion.h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                "Streetwear Bad Girl",
                "Soirée Séduction / Glamwear",
                "Glow Routine & Parfums Pré-Soirée",
              ].map((name, i) => (
                <Link
                  href={`/${name.toLowerCase().replace(/ /g, "-")}`}
                  key={i}
                  passHref
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-white/20 transition-all cursor-pointer text-sm md:text-base"
                    role="button"
                    tabIndex={0}
                  >
                    {name}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const StrategySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {[
            {
              icon: Sparkles,
              text: "Sélections triées sur le volet pour un style immédiat",
            },
            {
              icon: Calendar,
              text: "Essentiels pour chaque événement marquant",
            },
            {
              icon: Magnet,
              text: "Pièces qui boostent votre confiance au quotidien",
            },
          ].map(({ icon: Icon, text }, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl backdrop-blur-lg border border-white/10 hover:border-pink-400/30 transition-colors"
            >
              <Icon className="w-8 h-8 md:w-12 md:h-12 mb-4 text-pink-400" />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProductGallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-[150vh] py-20 bg-black">
      <motion.div
        style={{ y, opacity }}
        className="sticky top-20 space-y-20 px-4 max-w-7xl mx-auto"
      >
        {[
          {
            title: "Streetwear Urbain",
            description:
              "Une sélection urbaine affirmée, pour imposer ton flow dans les rues comme sur les réseaux.",
            items: [
              {
                name: "Baskers Oversized",
                price: "89€",
                image: "/streetwear-shoes.jpg",
                link: "#",
              },
              {
                name: "Ceinture Chaînes Métal",
                price: "45€",
                image: "/chain-belt.jpg",
                link: "#",
              },
              {
                name: "Veste Cargo Noire",
                price: "109€",
                image: "/cargo-jacket.jpg",
                link: "#",
              },
              {
                name: "Pantalon Large à Poches",
                price: "69€",
                image: "/wide-pants.jpg",
                link: "#",
              },
            ],
          },
          {
            title: "Glamour Nocturne",
            description:
              "Brille toute la nuit avec des pièces sensuelles, sophistiquées et résolument puissantes.",

            items: [
              {
                name: "Robe Moulante Strass",
                price: "129€",
                image: "/sparkly-dress.jpg",
                link: "#",
              },
              {
                name: "Chaussures à Talons Cristaux",
                price: "159€",
                image: "/crystal-heels.jpg",
                link: "#",
              },
              {
                name: "Clutch Métallisée",
                price: "79€",
                image: "/metallic-clutch.jpg",
                link: "#",
              },
              {
                name: "Boucles d'Oreilles Chandelier",
                price: "39€",
                image: "/chandelier-earrings.jpg",
                link: "#",
              },
            ],
          },
          {
            title: "Glow Routine & Parfums Pré-Soirée",
            description:
              "Ta préparation rituelle pour rayonner. Glow, senteurs & soins irrésistibles pour la mise en lumière.",
            items: [
              {
                name: "Highlighter Liquide Ultra Glow",
                price: "35€",
                image: "/liquid-highlighter.jpg",
                link: "#",
              },
              {
                name: "Brume Corporelle Pailletée",
                price: "42€",
                image: "/shimmer-body-spray.jpg",
                link: "#",
              },
              {
                name: "Parfum Sensuel Ambre & Vanille",
                price: "89€",
                image: "/amber-perfume.jpg",
                link: "#",
              },
              {
                name: "Kit Skincare Éclat Intense",
                price: "59€",
                image: "/glow-skincare-kit.jpg",
                link: "#",
              },
            ],
          },
        ].map((collection, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              {collection.title}
            </h2>

            <p className="text-gray-300 text-lg text-center mb-6">
              {collection.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collection.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="relative group overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="relative h-80">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-pink-400 font-bold">
                        {item.price}
                      </span>
                      <a
                        href={item.link}
                        className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition-colors"
                      >
                        Voir sur Amazon
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-block px-6 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Voir plus de {collection.title}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const ProductPacks = () => {
  const packs = [
    {
      title: "COLLECTION JOUR – BAD GIRL STREET",
      image: "/packs/day-badgirl.jpg",
      items: [
        "Jean cargo beige / noir (40€)",
        "Top court 'cut' blanc ou noir (25€)",
        "Basket blanche clean (60€)",
        "Casquette brodée street (20€)",
      ],
      price: "119€",
      value: "145€",
      saving: "~65€",
      link: "https://www.amazon.fr/hz/wishlist/ls/1DAYPACKEXEMPLE?tag=tonaffid",
      description:
        "Un look street chic pour ta journée. Parfait pour allier confort et style dans la rue.",
      buttonText: "Voir plus",
    },
    {
      title: "COLLECTION NUIT – DIVA SÉDUCTRICE",
      image: "/packs/night-diva.jpg",
      items: [
        "Robe nude sculptante (50€)",
        "Talons transparents à strass (45€)",
        "Pochette dorée ou noire (20€)",
        "Brume corporelle sucrée (25€)",
      ],
      price: "129€",
      value: "160€",
      saving: "~80€",
      link: "https://www.amazon.fr/hz/wishlist/ls/1NIGHTPACKEXEMPLE?tag=tonaffid",
      description:
        "Élégance et glamour, ce pack est fait pour briller lors de tes soirées les plus mémorables.",
      buttonText: "Voir plus",
    },
    {
      title: "COLLECTION SPORTY – GYM & GLOW",
      image: "/packs/sporty-glow.jpg",
      items: [
        "Legging taille haute sculptant (35€)",
        "Brassière assortie (25€)",
        "Sweat zippé crop (30€)",
        "Sac de sport compact & stylé (20€)",
      ],
      price: "99€",
      value: "130€",
      saving: "~60€",
      link: "https://www.amazon.fr/hz/wishlist/ls/1GYMPACKEXEMPLE?tag=tonaffid",
      description:
        "Pour un look sportif et tendance, ce pack allie confort et style pour ton entraînement et au-delà.",
      buttonText: "Voir plus",
    },
    {
      title: "COLLECTION FESTIVAL – BOHO VIBES",
      image: "/packs/boho-festival.jpg",
      items: [
        "Robe crochet / franges (40€)",
        "Lunettes teintées rétro (20€)",
        "Sandales plates stylées (35€)",
        "Sac banane bohème (25€)",
      ],
      price: "109€",
      value: "145€",
      saving: "~70€",
      link: "https://www.amazon.fr/hz/wishlist/ls/1BOHOPACKEXEMPLE?tag=tonaffid",
      description:
        "Le pack idéal pour un festival ou une journée décontractée avec un style bohème chic.",
      buttonText: "Voir plus",
    },
    {
      title: "COLLECTION CHILL – SUNDAY COMFY",
      image: "/packs/sunday-comfy.jpg",
      items: [
        "Jogging molletonné beige (30€)",
        "Sweat crop loose assorti (30€)",
        "Chaussettes fluffy (10€)",
        "Tasse & plaid chill vibes (20€)",
      ],
      price: "89€",
      value: "110€",
      saving: "~45€",
      link: "https://www.amazon.fr/hz/wishlist/ls/1CHILLPACKEXEMPLE?tag=tonaffid",
      description:
        "Idéal pour une journée chill à la maison. Confort et détente à prix doux.",
      buttonText: "Voir plus",
    },
    {
      title: "COLLECTION DATE – FÉMININE & CHIC",
      image: "/packs/date-chic.jpg",
      items: [
        "Robe cache-cœur fluide (45€)",
        "Talons fins nude (40€)",
        "Boucles d’oreilles pendantes (15€)",
        "Sac épaule élégant (25€)",
      ],
      price: "114€",
      value: "140€",
      saving: "~60€",
      link: "https://www.amazon.fr/hz/wishlist/ls/1DATEPACKEXEMPLE?tag=tonaffid",
      description:
        "Le pack parfait pour un look chic et féminin lors de ta prochaine sortie ou rendez-vous.",
      buttonText: "Voir plus",
    },
  ];

  return (
    <section className="py-32 mt-24 px-4 relative bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 text-white"
        >
          ✨ Packs prêts à commander
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packs.map((pack, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10"
            >
              <img
                src={pack.image}
                alt={pack.title}
                className="w-full h-60 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                {pack.title}
              </h3>
              <p className="text-gray-300 mb-4">{pack.description}</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-4">
                {pack.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="text-pink-400 font-semibold text-lg">
                Pack look : {pack.price}{" "}
                <span className="text-sm text-gray-400">
                  (valeur {pack.value})
                </span>
              </div>
              <div className="text-green-400 text-sm">
                → Tu gagnes {pack.saving}
              </div>
              <a
                href={pack.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition"
              >
                {pack.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Les autres sections (Pricing, Contact) restent similaires avec les mêmes optimisations

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="relative bg-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50"
        style={{ scaleX }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 to-purple-600"
          style={{ scaleX }}
        />
      </motion.div>

      <HeroSection />
      <StrategySection />
      <ProductGallery />
      <ProductPacks />

      {/* Ajouter les autres sections ici avec la même structure */}

      <footer className="bg-gradient-to-b from-black via-black to-[#0f0c29] text-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Bloc 1 : Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4">💌 Reste dans la boucle</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Reçois nos offres secrètes, sélections limitées et pépites avant
              tout le monde. Zéro spam. Juste des looks 🔥.
            </p>

            <form
              action="https://systeme.io/ton-formulaire" // ← Change ici par ton vrai lien System.io
              method="POST"
              target="_blank"
              className="flex flex-col sm:flex-row gap-4 w-full"
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
                className="bg-pink-500 hover:bg-pink-600 transition-colors px-8 py-2 rounded-full font-semibold text-white w-full sm:w-auto"
              >
                Je m’abonne
              </button>
            </form>
          </motion.div>

          {/* Bloc 2 : Stratégie de conversion */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-green-400 mt-1" />
              <div>
                <h4 className="font-semibold">Paiement sécurisé</h4>
                <p className="text-gray-400 text-sm">
                  Notre plateforme est protégée. Tes données le sont aussi.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Flame className="w-7 h-7 text-orange-400 mt-1" />
              <div>
                <h4 className="font-semibold">Quantités limitées</h4>
                <p className="text-gray-400 text-sm">
                  Nos pièces partent vite. Ce que tu vois ne sera peut-être plus
                  là demain.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="w-7 h-7 text-purple-400 mt-1" />
              <div>
                <h4 className="font-semibold">+40K fashionistas</h4>
                <p className="text-gray-400 text-sm">
                  Une communauté stylée, engagée, et toujours à la pointe. Tu
                  viens ?
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TonNomDeMarque. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
