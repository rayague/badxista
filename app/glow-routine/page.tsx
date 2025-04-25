"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Flame, Users, ChevronRight } from "lucide-react";

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
// Composant de navigation entre catégories
// -----------------------------------------------------------------------------
const CategoryNav = () => (
  <nav className="bg-black/80 sticky top-0 z-50">
    <ul className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-6">
      {[
        { name: "Streetwear", href: "/streetwear" },
        { name: "Glamwear", href: "/glamwear" },
        { name: "Glow Routine", href: "/glow-routine" },
      ].map((cat) => (
        <li key={cat.href}>
          <Link
            href={cat.href}
            className="flex items-center text-gray-300 hover:text-white font-medium"
          >
            {cat.name} <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

// -----------------------------------------------------------------------------
// Section Introduction : présentation de la page Glow Routine
// -----------------------------------------------------------------------------
const IntroSection = () => (
  <section className="py-16 px-4 bg-black text-white text-center max-w-4xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-extrabold mb-4"
    >
      Glow Routine &amp; Parfums Pré-Soirée
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-lg md:text-xl text-gray-300"
    >
      Préparez votre peau et votre scent-sgame avant chaque sortie avec nos
      soins éclat et fragrances irrésistibles.
    </motion.p>
  </section>
);

// -----------------------------------------------------------------------------
// Section Comparaison : analyse de 3 best-sellers Glow
// -----------------------------------------------------------------------------
const ComparaisonSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const trending = [
    {
      id: 1,
      name: "Highlighter Liquide Ultra Glow",
      price: "35 €",
      image: "/files/picture_glow1.jpg",
      link: "https://amzn.to/EXEMPLEGR1",
      description:
        "Formule concentrée pour un éclat immédiat et longue tenue, facile à appliquer avec embout precision.",
      features: ["Pigments micronisés", "Hydratation légère", "Fini satiné"],
    },
    {
      id: 2,
      name: "Brume Corporelle Pailletée",
      price: "42 €",
      image: "/files/picture_glow2.jpg",
      link: "https://amzn.to/EXEMPLEGR2",
      description:
        "Mist parfumée subtile avec micro-paillettes dorées pour un effet scintillant et fragrance douce.",
      features: [
        "Paillettes fines",
        "Parfum doux floral",
        "Hydratation rapide",
      ],
    },
    {
      id: 3,
      name: "Parfum Sensuel Ambre & Vanille",
      price: "89 €",
      image: "/files/picture_glow3.jpg",
      link: "https://amzn.to/EXEMPLEGR3",
      description:
        "Équilibre parfait entre notes chaudes d’ambre et gourmandise de la vanille pour une aura irrésistible.",
      features: ["Concentré parfum 20%", "Tenue 8h+", "Flacon design"],
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
          Comparaison des best-sellers Glow
        </h2>
        <p className="text-gray-300">
          Nos produits phares de préparation et parfums, comparés pour choisir
          celui qui vous fera briller.
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
// Section Produits Glow : 8 articles avec descriptions
// -----------------------------------------------------------------------------
const GlowRoutineProductsSection = () => {
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
      name: "Kit Pré-Glow Intense",
      price: "59 €",
      image: "/files/picture_glow4.jpg",
      link: "https://amzn.to/EXEMPLEGR4",
      description:
        "Ensemble de 3 soins pour préparer la peau et maximiser l’éclat avant application du make-up.",
    },
    {
      id: 5,
      name: "Lotion Tonique Illuminatrice",
      price: "29 €",
      image: "/files/picture_glow5.jpg",
      link: "https://amzn.to/EXEMPLEGR5",
      description:
        "Rééquilibre le pH et apporte une luminosité naturelle dès la première utilisation.",
    },
    {
      id: 6,
      name: "Masque Peel-Off Pailleté",
      price: "24 €",
      image: "/files/picture_glow6.jpg",
      link: "https://amzn.to/EXEMPLEGR6",
      description:
        "Masque visage enrichi en micro-paillettes pour exfolier en douceur et révéler l’éclat.",
    },
    {
      id: 7,
      name: "Gommage Doux Éclat",
      price: "19 €",
      image: "/files/picture_glow7.jpg",
      link: "https://amzn.to/EXEMPLEGR7",
      description:
        "Exfoliant enzymatique qui élimine les cellules mortes sans agresser la peau.",
    },
    {
      id: 8,
      name: "Sérum Contour Lumière",
      price: "49 €",
      image: "/files/picture_glow8.jpg",
      link: "https://amzn.to/EXEMPLEGR8",
      description:
        "Sérum concentré en vitamine C et acide hyaluronique pour un teint unifié.",
    },
    {
      id: 9,
      name: "Brume Fixatrice Scintillante",
      price: "39 €",
      image: "/files/picture_glow9.jpg",
      link: "https://amzn.to/EXEMPLEGR9",
      description:
        "Fixe le maquillage tout en ajoutant un voile délicat de paillettes.",
    },
    {
      id: 10,
      name: "Roll-On Lumière Yeux",
      price: "25 €",
      image: "/files/picture_glow10.jpg",
      link: "https://amzn.to/EXEMPLEGR10",
      description:
        "Applicateur roll-on pour estomper cernes et apporter de l’éclat dans le regard.",
    },
    {
      id: 11,
      name: "Baume Lèvres Iridescent",
      price: "15 €",
      image: "/files/picture_glow11.jpg",
      link: "https://amzn.to/EXEMPLEGR11",
      description:
        "Baume nourrissant aux pigments irisés pour des lèvres gourmandes et brillantes.",
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
        Plus de Glow Routine à découvrir
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

    <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-sm px-6">
      © {new Date().getFullYear()} TonNomDeMarque. Tous droits réservés.
    </div>
  </footer>
);

// -----------------------------------------------------------------------------
// Page principale Glow Routine
// -----------------------------------------------------------------------------
export default function GlowRoutinePage() {
  return (
    <main className="bg-black text-white">
      <CategoryNav />
      <IntroSection />
      <ComparaisonSection />
      <GlowRoutineProductsSection />
      <Footer />
    </main>
  );
}
