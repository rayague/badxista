"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Flame, Users } from "lucide-react";

// -----------------------------------------------------------------------------
// Variants pour animations Framer Motion
// -----------------------------------------------------------------------------
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.6 },
  },
};

// -----------------------------------------------------------------------------
// Section Introduction : présentation de la page Streetwear
// -----------------------------------------------------------------------------
const IntroSection = () => (
  <section className="py-16 px-4 bg-black text-white text-center max-w-4xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-extrabold mb-4"
    >
      Bienvenue dans l’univers Streetwear
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-lg md:text-xl text-gray-300"
    >
      Découvrez notre sélection de pièces incontournables, alliant confort,
      audace et style urbain. Que vous cherchiez des silhouettes oversize, des
      détails métalliques ou des accessoires qui font la différence, tout est
      réuni ici pour composer votre look de demain.
    </motion.p>
  </section>
);

// -----------------------------------------------------------------------------
// Section Comparaison : analyse de 3 best-sellers avec descriptions détaillées
// -----------------------------------------------------------------------------
const ComparaisonSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const trending = [
    {
      id: 1,
      name: "Baskers Oversized",
      price: "89 €",
      image: "/files/picture18.jpg",
      link: "https://amzn.to/EXEMPLE1",
      description:
        "Chaussure iconique à semelle épaisse, conçue pour allier confort maximal et style affirmé. Parfaite pour les longues journées en ville.",
      features: [
        "Semelle super-épaisse +5 cm",
        "Mesh respirant ultra-léger",
        "Détails street art sur le talon",
      ],
    },
    {
      id: 2,
      name: "Veste Cargo Noire",
      price: "109 €",
      image: "/files/picture20.jpg",
      link: "https://amzn.to/EXEMPLE2",
      description:
        "Veste utilitaire oversize en coton déperlant, idéale pour un look urbain robuste. Multifonction avec poches stratégiques.",
      features: [
        "6 poches utilitaires",
        "Coton épais et déperlant",
        "Coupe oversize très tendance",
      ],
    },
    {
      id: 3,
      name: "Ceinture Chaînes Métal",
      price: "45 €",
      image: "/files/picture19.jpg",
      link: "https://amzn.to/EXEMPLE3",
      description:
        "Accessoire statement en acier inoxydable, apporte une touche résolument rock à n’importe quel jean ou pantalon cargo.",
      features: [
        "Chaînes robustes en inox",
        "Finition brossée anti-corrosion",
        "S’attache facilement à la taille",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-black text-white">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          Comparaison des best-sellers
        </h2>
        <p className="text-gray-300">
          Pour vous guider, nous analysons performance, style et rapport
          qualité/prix de nos trois incontournables.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {trending.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="relative h-64">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <p className="text-pink-400 font-bold mb-4">{item.price}</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
                {item.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <Link
                href={item.link}
                target="_blank"
                className="block w-full text-center px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold transition"
              >
                Voir sur Amazon
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Section Produits Streetwear : 8 articles avec descriptions
// -----------------------------------------------------------------------------
const StreetwearProductsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const isInView = useInView(ref, { once: true });

  const products = [
    {
      id: 4,
      name: "Pantalon Cargo Kaki",
      price: "69 €",
      image: "/files/picture21.jpg",
      link: "https://amzn.to/EXEMPLE4",
      description:
        "Coupe relax, multiples poches et tissu résistant pour un style utilitaire affirmé.",
    },
    {
      id: 5,
      name: "Hoodie Street Logo",
      price: "79 €",
      image: "/files/picture22.jpg",
      link: "https://amzn.to/EXEMPLE5",
      description:
        "Capuche oversize et logo imprimé, doux à porter, parfait pour les looks du weekend.",
    },
    {
      id: 6,
      name: "T-shirt Graphik",
      price: "35 €",
      image: "/files/picture23.jpg",
      link: "https://amzn.to/EXEMPLE6",
      description:
        "Coton bio, coupe droite, visuel graphique contrasté pour un look moderne et engagé.",
    },
    {
      id: 7,
      name: "Casquette Snapback",
      price: "29 €",
      image: "/files/picture24.jpg",
      link: "https://amzn.to/EXEMPLE7",
      description:
        "Réglable à l’arrière, avec œillets de ventilation, finition brodée haut de gamme.",
    },
    {
      id: 8,
      name: "Socks Crew Pack",
      price: "19 €",
      image: "/files/picture25.jpg",
      link: "https://amzn.to/EXEMPLE8",
      description:
        "Lot de 3 paires, demi-mollet, renforts talon/orteils pour un confort longue durée.",
    },
    {
      id: 9,
      name: "Sac Banane Urban",
      price: "39 €",
      image: "/files/picture26.jpg",
      link: "https://amzn.to/EXEMPLE9",
      description:
        "Ceinture ajustable, nylon imperméable et multiples compartiments sécurisés.",
    },
    {
      id: 10,
      name: "Lunettes Rétro",
      price: "49 €",
      image: "/files/picture27.jpg",
      link: "https://amzn.to/EXEMPLE10",
      description:
        "Monture carrée, verres teintés UV400, look vintage et protection maximale.",
    },
    {
      id: 11,
      name: "Montre Digitale",
      price: "99 €",
      image: "/files/picture28.jpg",
      link: "https://amzn.to/EXEMPLE11",
      description:
        "Étanche, rétro-éclairage, multiple fuseaux horaires et design minimaliste.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-black text-white">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Plus de Streetwear à découvrir
      </motion.h2>

      <motion.div
        style={{ y }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {products.map((p) => (
          <motion.div
            key={p.id}
            variants={cardVariants}
            className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400/30 transition-colors"
          >
            <div className="relative h-56">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
              <p className="text-gray-300 mb-2">{p.description}</p>
              <p className="text-pink-400 font-bold mb-4">{p.price}</p>
              <Link
                href={p.link}
                target="_blank"
                className="inline-block px-3 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-sm font-medium transition"
              >
                Voir sur Amazon
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Footer : inscription & avantages (responsive mobile/desktop)
// -----------------------------------------------------------------------------
const Footer = () => (
  <footer className="bg-gradient-to-b from-black via-black to-[#0f0c29] text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {/* Bloc Avantages */}
      <div className="order-1 md:order-2 space-y-8 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <ShieldCheck className="w-7 h-7 text-green-400" />
          <div>
            <h4 className="font-semibold">Paiement sécurisé</h4>
            <p className="text-gray-400 text-sm">
              Notre plateforme est protégée. Tes données le sont aussi.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Flame className="w-7 h-7 text-orange-400" />
          <div>
            <h4 className="font-semibold">Quantités limitées</h4>
            <p className="text-gray-400 text-sm">
              Nos pièces partent vite. Ce que tu vois ne sera peut-être plus là
              demain.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Users className="w-7 h-7 text-purple-400" />
          <div>
            <h4 className="font-semibold">+40K fashionistas</h4>
            <p className="text-gray-400 text-sm">
              Une communauté stylée, engagée, et toujours à la pointe. Tu viens
              ?
            </p>
          </div>
        </div>
      </div>

      {/* Bloc Newsletter */}
      <div className="order-2 md:order-1 text-center md:text-left">
        <h3 className="text-3xl font-bold mb-4">💌 Reste dans la boucle</h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto md:mx-0">
          Reçois nos offres secrètes, sélections limitées et pépites avant tout
          le monde. Zéro spam. Juste des looks 🔥.
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
      © {new Date().getFullYear()} TonNomDeMarque. Tous droits réservés.
    </div>
  </footer>
);

// -----------------------------------------------------------------------------
// Page principale Streetwear
// -----------------------------------------------------------------------------
export default function StreetwearPage() {
  return (
    <main className="bg-black text-white">
      <IntroSection />
      <ComparaisonSection />
      <StreetwearProductsSection />
      {/* <Footer /> */}
    </main>
  );
}
