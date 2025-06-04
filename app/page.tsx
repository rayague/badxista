"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
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
  Star,
  Truck,
  RefreshCw,
  Headphones,
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

// Types pour les témoignages et les packs
interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  content: string;
  date: string;
}

interface PackStats {
  views: string;
  likes: string;
  reviews: string;
}

interface Pack {
  title: string;
  image: string;
  items: string[];
  link: string;
  description: string;
  buttonText: string;
  badge: string;
  socialProof: string;
  stats: PackStats;
  features: string[];
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: number;
}

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);

  // Détecte si on est sur mobile (width < 768px)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll progress sur le ref
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax désactivé sur mobile
  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Mouvements plus fluides
  const y = useSpring(rawY, { stiffness: 50, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 50, damping: 20 });

  return (
    <section
      ref={ref}
      className="relative mb-24
        h-screen           /* 100vh par défaut */
        md:h-[200vh]       /* 200vh sur md+ */
        overflow-hidden"
    >
      <motion.div
        style={isMobile ? {} : { y, scale }}
        className="sticky top-0 h-screen w-full"
      >
        {/* Voile sombre avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />

        {/* Vidéo d'arrière-plan */}
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <source src="/files/picture6.mp4" type="video/mp4" />
        </motion.video>

        {/* Contenu central */}
        <motion.div
          className="relative z-20 h-full flex items-center justify-center text-center px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Badge de confiance */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20"
            >
              <ShieldCheck className="w-5 h-5 text-pink-400" />
              <span className="text-sm font-medium">Collection validée par +50K influenceuses</span>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Révolutionnez
              </span>{" "}
              votre style avec{" "}
              <span className="relative">
                les tendances
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 -right-4 text-pink-400"
                >
                  🔥
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Découvrez les collections les plus demandées sur TikTok & Instagram. 
              <span className="block mt-2 text-pink-400 font-medium">
                +100K looks créés avec nos sélections
              </span>
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6"
            >
              {[
                {
                  name: "Streetwear",
                  icon: Flame,
                  description: "🔥 Collection TikTok VIRALE"
                },
                {
                  name: "Glamwear",
                  icon: Sparkles,
                  description: "✨ Looks Instagram TRENDING"
                },
                {
                  name: "Glow Routine",
                  icon: Users,
                  description: "🌟 Beauté VALIDÉE par +20K"
                }
              ].map((item, i) => (
                <Link
                  href={`/${item.name.toLowerCase().replace(/ /g, "-")}`}
                  key={i}
                  passHref
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-pink-400" />
                      <div className="text-left">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-gray-300">{item.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 ml-2 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-pink-400" />
                <span>Produits vérifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-400" />
                <span>+50K influenceuses satisfaites</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>Support 7j/7</span>
              </div>
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

  const strategies = [
    {
      icon: Sparkles,
      title: "Sélections VIRALES",
      text: "Produits validés par +50K influenceuses sur TikTok & Instagram",
      badge: "🔥 Tendance"
    },
    {
      icon: Calendar,
      title: "Looks PRÊTS À PORTER",
      text: "Ensembles complets pour chaque occasion, validés par la communauté",
      badge: "✨ Nouveau"
    },
    {
      icon: Magnet,
      title: "Style GARANTI",
      text: "Produits qui boostent votre confiance, sélectionnés par des experts",
      badge: "⭐ Best Seller"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black mb-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Pourquoi nos collections{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            cartonnent
          </span>
        </motion.h2>

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
          {strategies.map(({ icon: Icon, title, text, badge }, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl backdrop-blur-lg border border-white/10 hover:border-pink-400/30 transition-colors"
            >
              <div className="absolute top-4 right-4 bg-pink-500/90 text-white px-3 py-1 rounded-full text-sm">
                {badge}
              </div>
              <Icon className="w-12 h-12 mb-6 text-pink-400" />
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "50K+", label: "Influenceuses Satisfaites" },
            { number: "100K+", label: "Looks Créés" },
            { number: "1M+", label: "Vues sur TikTok" },
            { number: "24/7", label: "Support Client" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-3xl font-bold text-pink-400">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
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
    description: "🔥 Collection TikTok VIRALE - Les looks Bad Girl les plus demandés de 2024. Sélection validée par +10K influenceuses.",
    items: [
      {
        name: "Bboninedress Robe de Soirée Cocktail",
        image: "/files/glowroutine/BboninedressRobedeSoiréeCocktail.jpg",
        link: "http://www.amazon.fr/dp/B0C4NLC4SR/ref=nosim?tag=ray2207-21",
        badge: "🔥 TikTok Viral",
        description: "Robe Longue Asymétrique - Mariage & Cérémonie"
      },
      {
        name: "Ever-Pretty Robe de Soirée Dos Nu",
        image: "/files/picture7.webp",
        link: "http://www.amazon.fr/dp/B0DWFH88PM/ref=nosim?tag=ray2207-21",
        badge: "⭐ Best Seller",
        description: "Robe Manches Volantées - Mousseline Élégante"
      },
      {
        name: "Robe Cocktail Mariage Longue",
        image: "/files/picture15.jpg",
        link: "http://www.amazon.fr/dp/B0BNJ1ZVPY/ref=nosim?tag=ray2207-21",
        badge: "🛍️ Vu sur Insta",
        description: "Robe de Gala avec Traîne - Dos Nu Chic"
      },
      {
        name: "Ever-Pretty Robe Mariage Invité",
        image: "/files/picture11.jpg",
        link: "http://www.amazon.fr/dp/B0BL7FC5VQ/ref=nosim?tag=ray2207-21",
        badge: "✨ Nouveau",
        description: "Robe Longue Mousseline - Col V Plissé"
      }
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
                  alt={`${item.name} - ${item.description}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-pink-500/90 text-white px-3 py-1 rounded-full text-sm">
                  {item.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition-colors text-center"
                  >
                    Voir sur Amazon
                  </a>
                  <p className="text-xs text-gray-400 text-center">
                    ⭐ Sélection validée par la communauté
                  </p>
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
    description: "✨ Collection GLAM VIRALE - Les looks de soirée les plus demandés sur Instagram & TikTok. Sélection validée par +25K influenceuses.",
    items: [
      {
        name: "Robe de Soirée Dos Nu Strass",
        image: "/files/picture14.jpg",
        link: "http://www.amazon.fr/dp/B0C4NLC4SR/ref=nosim?tag=ray2207-21",
        badge: "🔥 TikTok Viral",
        description: "Robe Longue avec Strass - Événement Premium"
      },
      {
        name: "Robe de Gala Traîne Cristal",
        image: "/files/picture7.webp",
        link: "http://www.amazon.fr/dp/B0DWFH88PM/ref=nosim?tag=ray2207-21",
        badge: "⭐ Best Seller",
        description: "Robe de Soirée avec Traîne - Style Hollywood"
      },
      {
        name: "Robe Cocktail Plissée Paillettes",
        image: "/files/picture15.jpg",
        link: "http://www.amazon.fr/dp/B0BNJ1ZVPY/ref=nosim?tag=ray2207-21",
        badge: "🛍️ Vu sur Insta",
        description: "Robe Courte Paillettes - Soirée VIP"
      },
      {
        name: "Robe de Soirée Mousseline Élégante",
        image: "/files/picture11.jpg",
        link: "http://www.amazon.fr/dp/B0BL7FC5VQ/ref=nosim?tag=ray2207-21",
        badge: "✨ Nouveau",
        description: "Robe Longue Mousseline - Style Red Carpet"
      }
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
                  alt={`${item.name} - ${item.description}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-pink-500/90 text-white px-3 py-1 rounded-full text-sm">
                  {item.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition-colors text-center"
                  >
                    Voir sur Amazon
                  </a>
                  <p className="text-xs text-gray-400 text-center">
                    ⭐ Sélection validée par la communauté
                  </p>
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
    description: "🌟 Collection BEAUTÉ VIRALE - Les produits de beauté les plus demandés sur TikTok. Sélection validée par +20K influenceuses.",
    items: [
      {
        name: "Body Femme Manches Longues",
        image: "/files/picture3.webp",
        link: "http://www.amazon.fr/dp/B0DX1WN5TZ/ref=nosim?tag=ray2207-21",
        badge: "🔥 Tendance",
        description: "Bodysuit à Col Haut - Combinaison Slim"
      },
      {
        name: "Combinaison Pantalon Linen",
        image: "/files/picture7.webp",
        link: "http://www.amazon.fr/dp/B0F3CNPKGY/ref=nosim?tag=ray2207-21",
        badge: "⭐ Bohème",
        description: "Salopette Imprimé Bohème - Style Plage"
      },
      {
        name: "Y2K Body Léopard",
        image: "/files/picture15.jpg",
        link: "http://www.amazon.fr/dp/B0DNQB2PS2/ref=nosim?tag=ray2207-21",
        badge: "🛍️ Vu sur Insta",
        description: "Body pour Fête & Festival - Style Y2K"
      },
      {
        name: "Avidlove Bodys Dentelle",
        image: "/files/picture11.jpg",
        link: "http://www.amazon.fr/dp/B0DJNHKDJV/ref=nosim?tag=ray2207-21",
        badge: "✨ Sexy",
        description: "Lingerie Dos Nu - Décolleté en V"
      }
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
                  alt={`${item.name} - ${item.description}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-pink-500/90 text-white px-3 py-1 rounded-full text-sm">
                  {item.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition-colors text-center"
                  >
                    Voir sur Amazon
                  </a>
                  <p className="text-xs text-gray-400 text-center">
                    ⭐ Sélection validée par la communauté
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Composant de témoignage avec types stricts
const TestimonialCard = ({ testimonial, delay }: TestimonialCardProps): React.ReactElement => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-pink-400/30 transition-all"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink-400/20">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <div className="font-semibold text-white">{testimonial.name}</div>
        <div className="text-sm text-gray-400">{testimonial.title}</div>
      </div>
    </div>
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-pink-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">{testimonial.content}</p>
    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
      <Calendar className="w-4 h-4" />
      <span>{testimonial.date}</span>
    </div>
  </motion.div>
);

// Modification de la section ProductPacks avec types stricts
const ProductPacks = (): React.ReactElement => {
  const testimonials: Testimonial[] = [
    {
      name: "Sophie L.",
      title: "Influenceuse Mode • 250K Followers",
      avatar: "/files/influencer1.jpg",
      content: "Ce pack Bad Girl est juste PARFAIT ! J'ai fait +50K likes sur ma dernière vidéo TikTok avec ces pièces. La qualité est au rendez-vous et le style est exactement ce que je cherchais. Je recommande à 100% !",
      date: "Acheté il y a 2 jours"
    },
    {
      name: "Emma M.",
      title: "Content Creator • 100K Followers",
      avatar: "/files/influencer2.jpg",
      content: "La collection Diva est un vrai coup de cœur ! Les pièces sont magnifiques et j'ai reçu tellement de compliments. Le service client est top, ils m'ont aidée à choisir les bonnes tailles.",
      date: "Acheté il y a 1 semaine"
    },
    {
      name: "Léa D.",
      title: "Fashion Blogger • 75K Followers",
      avatar: "/files/influencer3.jpg",
      content: "Le pack Glow Routine a complètement transformé ma routine beauté. Les produits sont de qualité et le résultat est visible immédiatement. Je ne peux plus m'en passer !",
      date: "Acheté il y a 3 jours"
    }
  ];

  const packs: Pack[] = [
    {
      title: "COLLECTION SOIRÉE – DIVA GLAMOUR",
      image: "/files/picture14.jpg",
      items: [
        "Bboninedress Robe de Soirée Cocktail - TikTok Viral",
        "Ever-Pretty Robe de Soirée Dos Nu - Best Seller",
        "Robe Cocktail Mariage Longue - Vu sur Insta",
        "Ever-Pretty Robe Mariage Invité - Nouveau",
      ],
      link: "https://www.amazon.fr/hz/wishlist/ls/1DAYPACKEXEMPLE?tag=tonaffid",
      description: "✨ Collection VIRALE Instagram - Les robes de soirée les plus demandées. Sélection validée par +20K influenceuses.",
      buttonText: "Découvrir la Collection",
      badge: "✨ Tendance Instagram",
      socialProof: "⭐ +800 commandes ce mois-ci",
      stats: {
        views: "3.5M+",
        likes: "750K+",
        reviews: "4.9/5"
      },
      features: [
        "Livraison Express 24h",
        "Retour Gratuit 30 jours",
        "Guide Style Inclus"
      ]
    },
    {
      title: "COLLECTION CLUBBING – SEXY VIBES",
      image: "/files/picture15.jpg",
      items: [
        "SEAUR Robe Moulante Bretelles - Tendance",
        "Robe en Cuir Sexy Clubwear - Best Seller",
        "Mini Robe Sexy Transparente - Vu sur Insta",
        "Robe Moulante Manches Longues - Nouveau",
      ],
      link: "https://www.amazon.fr/hz/wishlist/ls/1NIGHTPACKEXEMPLE?tag=tonaffid",
      description: "🔥 Collection CLUB VIRALE - Les looks de soirée les plus demandés. Sélection validée par +25K influenceuses.",
      buttonText: "Voir la Collection",
      badge: "🔥 Tendance Club",
      socialProof: "⭐ +600 commandes ce mois-ci",
      stats: {
        views: "2.8M+",
        likes: "600K+",
        reviews: "4.8/5"
      },
      features: [
        "Livraison Express 24h",
        "Retour Gratuit 30 jours",
        "Guide Style Inclus"
      ]
    },
    {
      title: "COLLECTION BODY – Y2K VIBES",
      image: "/files/picture12.jpg",
      items: [
        "Body Femme Manches Longues - Tendance",
        "Combinaison Pantalon Linen - Bohème",
        "Y2K Body Léopard - Vu sur Insta",
        "Avidlove Bodys Dentelle - Sexy",
      ],
      link: "https://www.amazon.fr/hz/wishlist/ls/1BOHOPACKEXEMPLE?tag=tonaffid",
      description: "🌟 Collection Y2K VIRALE - Les bodys les plus demandés. Sélection validée par +18K influenceuses.",
      buttonText: "Voir la Collection",
      badge: "🌟 Tendance Y2K",
      socialProof: "⭐ +500 commandes ce mois-ci",
      stats: {
        views: "2.2M+",
        likes: "450K+",
        reviews: "4.8/5"
      },
      features: [
        "Livraison Express 24h",
        "Retour Gratuit 30 jours",
        "Guide Style Inclus"
      ]
    },
    {
      title: "COLLECTION MARIAGE – ÉLÉGANCE",
      image: "/files/picture13.jpg",
      items: [
        "Bboninedress Robe de Soirée Cocktail - Mariage",
        "Ever-Pretty Robe de Soirée Dos Nu - Cérémonie",
        "Robe Cocktail Mariage Longue - Gala",
        "Ever-Pretty Robe Mariage Invité - Élégante",
      ],
      link: "https://www.amazon.fr/hz/wishlist/ls/1CHILLPACKEXEMPLE?tag=tonaffid",
      description: "💝 Collection MARIAGE VIRALE - Les robes de cérémonie les plus demandées. Sélection validée par +22K influenceuses.",
      buttonText: "Voir la Collection",
      badge: "💝 Tendance Mariage",
      socialProof: "⭐ +700 commandes ce mois-ci",
      stats: {
        views: "3.2M+",
        likes: "650K+",
        reviews: "4.9/5"
      },
      features: [
        "Livraison Express 24h",
        "Retour Gratuit 30 jours",
        "Guide Style Inclus"
      ]
    },
    {
      title: "COLLECTION FESTIVAL – BOHO CHIC",
      image: "/files/picture11.jpg",
      items: [
        "Combinaison Pantalon Linen - Bohème",
        "Y2K Body Léopard - Festival",
        "Robe en Cuir Sexy Clubwear - Tendance",
        "Mini Robe Sexy Transparente - Nouveau",
      ],
      link: "https://www.amazon.fr/hz/wishlist/ls/1DATEPACKEXEMPLE?tag=tonaffid",
      description: "🌟 Collection FESTIVAL VIRALE - Les looks bohème les plus demandés. Sélection validée par +15K influenceuses.",
      buttonText: "Voir la Collection",
      badge: "🌟 Tendance Festival",
      socialProof: "⭐ +400 commandes ce mois-ci",
      stats: {
        views: "1.8M+",
        likes: "350K+",
        reviews: "4.8/5"
      },
      features: [
        "Livraison Express 24h",
        "Retour Gratuit 30 jours",
        "Guide Style Inclus"
      ]
    },
    {
      title: "COLLECTION DATE – SÉDUCTION",
      image: "/files/picture16.jpg",
      items: [
        "SEAUR Robe Moulante Bretelles - Date Night",
        "Robe en Cuir Sexy Clubwear - Best Seller",
        "Mini Robe Sexy Transparente - Viral",
        "Robe Moulante Manches Longues - Tendance",
      ],
      link: "https://www.amazon.fr/hz/wishlist/ls/1DATEPACKEXEMPLE?tag=tonaffid",
      description: "💝 Collection DATE VIRALE - Les looks de séduction les plus demandés. Sélection validée par +28K influenceuses.",
      buttonText: "Voir la Collection",
      badge: "💝 Tendance Date",
      socialProof: "⭐ +900 commandes ce mois-ci",
      stats: {
        views: "4.2M+",
        likes: "850K+",
        reviews: "4.9/5"
      },
      features: [
        "Livraison Express 24h",
        "Retour Gratuit 30 jours",
        "Guide Style Inclus"
      ]
    }
  ];

  const renderPackStats = (stats: PackStats): React.ReactElement => (
    <>
      <div className="text-center p-2 bg-white/5 rounded-lg">
        <div className="text-sm font-semibold text-pink-400">{stats.views}</div>
        <div className="text-xs text-gray-400">Vues</div>
      </div>
      <div className="text-center p-2 bg-white/5 rounded-lg">
        <div className="text-sm font-semibold text-pink-400">{stats.likes}</div>
        <div className="text-xs text-gray-400">Likes</div>
      </div>
      <div className="text-center p-2 bg-white/5 rounded-lg">
        <div className="text-sm font-semibold text-pink-400">{stats.reviews}</div>
        <div className="text-xs text-gray-400">Avis</div>
      </div>
    </>
  );

  const renderPackFeatures = (features: string[]): React.ReactElement => (
    <div className="space-y-2 mb-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
          <ShieldCheck className="w-4 h-4 text-pink-400" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-32 px-4 mb-24 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* En-tête avec stats */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            ✨ Packs{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Prêts à Briller
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Découvrez nos collections les plus demandées, validées par +50K influenceuses
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "50K+", label: "Influenceuses Satisfaites" },
              { number: "100K+", label: "Looks Créés" },
              { number: "1M+", label: "Vues sur TikTok" },
              { number: "4.9/5", label: "Note Moyenne" }
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-pink-400">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grille des packs */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {packs.map((pack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-pink-400/30 transition-all"
            >
              {/* Badge de tendance */}
              <div className="absolute top-4 right-4 bg-pink-500/90 text-white px-3 py-1 rounded-full text-sm">
                {pack.badge}
              </div>

              {/* Image avec overlay au hover */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src={pack.image}
                  alt={pack.title}
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Contenu */}
              <h3 className="text-2xl font-bold text-white mb-4">{pack.title}</h3>
              <p className="text-gray-300 mb-4">{pack.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {renderPackStats(pack.stats)}
              </div>

              {/* Features */}
              {renderPackFeatures(pack.features)}

              {/* CTA et preuve sociale */}
              <div className="space-y-4">
                <a
                  href={pack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all text-center"
                >
                  {pack.buttonText}
                </a>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <Users className="w-4 h-4 text-pink-400" />
                  <span>{pack.socialProof}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Témoignages */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Ce qu'en disent nos{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              influenceuses
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mb-8"
          >
            Découvrez les retours de notre communauté d'influenceuses
          </motion.p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} delay={i * 0.2} />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { icon: ShieldCheck, text: "Produits Vérifiés" },
            { icon: Truck, text: "Livraison Express" },
            { icon: RefreshCw, text: "Retour Gratuit" },
            { icon: Headphones, text: "Support 24/7" }
          ].map((badge, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-xl">
              <badge.icon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <div className="text-sm text-gray-300">{badge.text}</div>
            </div>
          ))}
        </motion.div>
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
