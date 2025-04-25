"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
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

// Variants communs pour les animations des cartes
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

// -----------------------------------------------------------------------------
// Section Héros : Effet parallaxe vidéo + titre + boutons
// -----------------------------------------------------------------------------
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Translation et échelle selon le scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative h-[200vh] mb-24">
      <motion.div
        style={{ y, scale }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Voile sombre */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Vidéo d'arrière-plan */}
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

        {/* Contenu central */}
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
              {["Streetwear", "Glamwear", "Glow Routine"].map((name, i) => (
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

// -----------------------------------------------------------------------------
// Section Stratégie : Carte d'avantages avec apparition au scroll
// -----------------------------------------------------------------------------
const StrategySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });

  return (
    <section className="py-20 px-4 bg-black mb-24">
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

// -----------------------------------------------------------------------------
// Section Streetwear Urbain : toujours claire, sticky
// -----------------------------------------------------------------------------
const StreetwearSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const collection = {
    title: "Streetwear Urbain",
    description:
      "Une sélection urbaine affirmée, pour imposer ton flow dans les rues comme sur les réseaux.",
    items: [
      {
        name: "Baskers Oversized",
        price: "89€",
        image: "/files/picture18.jpg",
        link: "#",
      },
      {
        name: "Ceinture Chaînes Métal",
        price: "45€",
        image: "/files/picture19.jpg",
        link: "#",
      },
      {
        name: "Veste Cargo Noire",
        price: "109€",
        image: "/files/picture20.jpg",
        link: "#",
      },
      {
        name: "Pantalon Large à Poches",
        price: "69€",
        image: "/files/picture21.jpg",
        link: "#",
      },
    ],
  };

  return (
    <section ref={ref} className="relative min-h-[100vh] py-20 bg-black mb-24">
      <motion.div
        style={{ y }}
        className="sticky top-20 space-y-12 px-4 max-w-7xl mx-auto"
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
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="relative h-80">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-pink-400 font-bold">{item.price}</span>
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
      </motion.div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Section Glamour Nocturne : même principe que Streetwear
// -----------------------------------------------------------------------------
const GlamourSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const collection = {
    title: "Glamour Nocturne",
    description:
      "Brille toute la nuit avec des pièces sensuelles, sophistiquées et résolument puissantes.",
    items: [
      {
        name: "Robe Moulante Strass",
        price: "129€",
        image: "/files/picture22.jpg",
        link: "#",
      },
      {
        name: "Chaussures Cristal",
        price: "159€",
        image: "/files/picture23.jpg",
        link: "#",
      },
      {
        name: "Clutch Métallisée",
        price: "79€",
        image: "/files/picture24.jpg",
        link: "#",
      },
      {
        name: "Boucles Chandelier",
        price: "39€",
        image: "/files/picture25.jpg",
        link: "#",
      },
    ],
  };

  return (
    <section ref={ref} className="relative min-h-[100vh] py-20 bg-black mb-24">
      <motion.div
        style={{ y }}
        className="sticky top-20 space-y-12 px-4 max-w-7xl mx-auto"
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
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="relative h-80">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-pink-400 font-bold">{item.price}</span>
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
      </motion.div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Section Glow Routine & Parfums Pré-Soirée : idem
// -----------------------------------------------------------------------------
const GlowRoutineSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const collection = {
    title: "Glow Routine & Parfums Pré-Soirée",
    description:
      "Ta préparation rituelle pour rayonner. Glow, senteurs & soins irrésistibles pour la mise en lumière.",
    items: [
      {
        name: "Highlighter Ultra Glow",
        price: "35€",
        image: "/files/picture26.jpg",
        link: "#",
      },
      {
        name: "Brume Pailletée",
        price: "42€",
        image: "/files/picture27.jpg",
        link: "#",
      },
      {
        name: "Parfum Ambre & Vanille",
        price: "89€",
        image: "/files/picture28.jpg",
        link: "#",
      },
      {
        name: "Kit Pré-Glow Intense",
        price: "59€",
        image: "/files/picture29.jpg",
        link: "#",
      },
    ],
  };

  return (
    <section ref={ref} className="relative min-h-[100vh] py-20 bg-black mb-24">
      <motion.div
        style={{ y }}
        className="sticky top-20 space-y-12 px-4 max-w-7xl mx-auto"
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
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="relative h-80">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-pink-400 font-bold">{item.price}</span>
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
      </motion.div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Section Packs Produits : Liste complète des 6 packs
// -----------------------------------------------------------------------------
const ProductPacks = () => {
  const packs = [
    {
      title: "COLLECTION JOUR – BAD GIRL STREET",
      image: "/files/picture17.jpg",
      items: [
        "Jean cargo beige/noir (40€)",
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
      image: "/files/picture14.jpg",
      items: [
        "Robe moulante strass (50€)",
        "Talons transparents à strass (45€)",
        "Pochette dorée/noire (20€)",
        "Brume corporelle sucrée (25€)",
      ],
      price: "129€",
      value: "160€",
      saving: "~80€",
      link: "https://www.amazon.fr/hz/wishlist/ls/1NIGHTPACKEXEMPLE?tag=tonaffid",
      description: "Élégance et glamour pour tes soirées les plus mémorables.",
      buttonText: "Voir plus",
    },
    {
      title: "COLLECTION SPORTY – GYM & GLOW",
      image: "/files/picture15.jpg",
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
        "Un look sportif et tendance pour ton entraînement et au-delà.",
      buttonText: "Voir plus",
    },
    {
      title: "COLLECTION FESTIVAL – BOHO VIBES",
      image: "/files/picture12.jpg",
      items: [
        "Robe crochet/franges (40€)",
        "Lunettes teintées rétro (20€)",
        "Sandales plates stylées (35€)",
        "Sac banane bohème (25€)",
      ],
      price: "109€",
      value: "145€",
      saving: "~70€",
      link: "https://www.amazon.fr/hz/wishlist/ls/1BOHOPACKEXEMPLE?tag=tonaffid",
      description:
        "Le pack idéal pour un festival ou une journée décontractée.",
      buttonText: "Voir plus",
    },
    {
      title: "COLLECTION CHILL – SUNDAY COMFY",
      image: "/files/picture13.jpg",
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
      description: "Confort et détente à la maison.",
      buttonText: "Voir plus",
    },
    {
      title: "COLLECTION DATE – FÉMININE & CHIC",
      image: "/files/picture11.jpg",
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
      description: "Le pack parfait pour un look chic et féminin.",
      buttonText: "Voir plus",
    },
  ];

  return (
    <section className="py-32 px-4 mb-24 bg-black">
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
              <Image
                src={pack.image}
                alt={pack.title}
                width={500}
                height={500}
                className="w-full h-60 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                {pack.title}
              </h3>
              <p className="text-gray-300 mb-4">{pack.description}</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-4">
                {pack.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
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

// -----------------------------------------------------------------------------
// Composant principal : Barre de progression + sections + footer
// -----------------------------------------------------------------------------
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="relative bg-black">
      {/* Barre de progression */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50"
        style={{ scaleX }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 to-purple-600"
          style={{ scaleX }}
        />
      </motion.div>
      {/* Sections */}
      <HeroSection />
      <StrategySection />
      {/* Appel des trois sections séparées */}
      <StreetwearSection />
      <GlamourSection />
      <GlowRoutineSection />
      <ProductPacks />
      {/* Footer */}
    </main>
  );
}
