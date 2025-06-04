"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Truck, RefreshCw, Headphones, ShieldCheck, Sparkles, Check, Heart } from "lucide-react";
import Link from "next/link";

const GlowRoutinePage = () => {
  const collection = {
    title: "Glow Routine",
    description: "✨ Routine Beauté TikTok VIRALE - Les produits les plus demandés de 2024. Sélection validée par +20K influenceuses.",
    stats: {
      views: "4.5M+",
      likes: "1.2M+",
      reviews: "4.9/5",
      influencers: "20K+"
    },
    items: [
      {
        name: "Sérum Glow - TikTok Famous",
        image: "/files/glowroutine/SérumGlow-TikTokFamous.jpg",
        link: "#",
        badge: "✨ Tendance TikTok",
        description: "Le sérum qui cartonne sur TikTok - +1M vues",
        stats: {
          views: "1M+",
          likes: "300K+",
          reviews: "4.9/5"
        }
      },
      {
        name: "Crème Hydratante - Glow Essential",
        image: "/files/glowroutine/CrèmeHydratante-GlowEssential.jpg",
        link: "#",
        badge: "⭐ Best Seller",
        description: "La crème préférée des influenceuses",
        stats: {
          views: "800K+",
          likes: "250K+",
          reviews: "4.8/5"
        }
      },
      {
        name: "Masque Éclat - Glow Style",
        image: "/files/glowroutine/MasqueÉclat-GlowStyle.jpg",
        link: "#",
        badge: "🛍️ Vu sur Instagram",
        description: "Le masque le plus copié de 2024",
        stats: {
          views: "900K+",
          likes: "280K+",
          reviews: "4.9/5"
        }
      },
      {
        name: "Kit Glow Complet - Routine Vibes",
        image: "/files/glowroutine/KitGlowComplet-RoutineVibes.jpg",
        link: "#",
        badge: "✨ Nouveau",
        description: "Le kit qui fait sensation",
        stats: {
          views: "500K+",
          likes: "150K+",
          reviews: "4.7/5"
        }
      }
    ],
    testimonials: [
      {
        name: "Emma",
        role: "Influenceuse Beauté",
        image: "/files/influencer1.jpg",
        content: "Cette routine a complètement transformé ma peau ! Les produits sont incroyables et les résultats sont visibles dès la première semaine. Je recommande à 100% !",
        rating: 5,
        date: "Il y a 2 jours",
        followers: "250K",
        platform: "Instagram",
        style: "Beauté & Lifestyle",
        verified: true,
        badge: "TikTok Viral",
        products: ["Sérum Hydratant", "Crème de Nuit"],
      },
      {
        name: "Léa",
        role: "Créatrice de Contenu",
        image: "/files/influencer2.jpg",
        content: "En tant que créatrice de contenu, je suis très exigeante sur la qualité. Cette routine a dépassé toutes mes attentes. Ma communauté adore les résultats !",
        rating: 5,
        date: "Il y a 5 jours",
        followers: "180K",
        platform: "TikTok",
        style: "Mode & Beauté",
        verified: true,
        badge: "Instagram Star",
        products: ["Masque Éclat", "Huile Visage"],
      },
      {
        name: "Sarah",
        role: "Influenceuse Mode",
        image: "/files/influencer3.jpg",
        content: "Je cherchais une routine qui allie efficacité et plaisir d'utilisation. C'est exactement ce que j'ai trouvé ici. Les produits sentent divinement bon !",
        rating: 5,
        date: "Il y a 1 semaine",
        followers: "320K",
        platform: "Instagram",
        style: "Lifestyle & Beauté",
        verified: true,
        badge: "Beauté Expert",
        products: ["Gommage Doux", "Sérum Éclat"],
      },
      {
        name: "Julie",
        role: "Experte Beauté",
        image: "/files/influencer4.jpg",
        content: "Après avoir testé des centaines de produits, je peux dire que cette routine est vraiment exceptionnelle. La qualité est au rendez-vous !",
        rating: 5,
        date: "Il y a 3 jours",
        followers: "150K",
        platform: "YouTube",
        style: "Beauté & Conseils",
        verified: true,
        badge: "YouTube Star",
        products: ["Crème de Jour", "Sérum Anti-Âge"],
      },
      {
        name: "Camille",
        role: "Influenceuse Lifestyle",
        image: "/files/influencer5.jpg",
        content: "Cette routine est devenue un moment de détente quotidien. Les produits sont efficaces et le rituel est vraiment agréable. Je ne peux plus m'en passer !",
        rating: 5,
        date: "Il y a 4 jours",
        followers: "200K",
        platform: "Instagram",
        style: "Lifestyle & Bien-être",
        verified: true,
        badge: "TikTok Trend",
        products: ["Masque Hydratant", "Sérum Vitamine C"],
      },
      {
        name: "Marine",
        role: "Créatrice Beauté",
        image: "/files/influencer6.jpg",
        content: "En tant que professionnelle de la beauté, je suis impressionnée par la qualité de ces produits. Ma peau n'a jamais été aussi éclatante !",
        rating: 5,
        date: "Il y a 2 semaines",
        followers: "280K",
        platform: "TikTok",
        style: "Beauté & Conseils",
        verified: true,
        badge: "Instagram Expert",
        products: ["Sérum Hydratant", "Crème de Nuit"],
      },
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <Image
          src="/files/picture29.jpg"
          alt="Glow Routine Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-sm font-medium">Routine validée par +20K influenceuses</span>
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Glow Routine
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            {collection.description}
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {Object.entries(collection.stats).map(([key, value]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 rounded-xl"
            >
              <div className="text-3xl font-bold text-pink-400">{value}</div>
              <div className="text-sm text-gray-400 mt-2">
                {key === "views" ? "Vues TikTok" :
                 key === "likes" ? "Likes" :
                 key === "reviews" ? "Note Moyenne" :
                 "Influenceuses Satisfaites"}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {collection.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="relative h-96">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-pink-500/90 text-white px-3 py-1 rounded-full text-sm">
                    {item.badge}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.name}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(item.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-white/5 rounded-lg">
                        <div className="text-sm font-semibold text-pink-400">{value}</div>
                        <div className="text-xs text-gray-400">
                          {key === "views" ? "Vues" :
                           key === "likes" ? "Likes" :
                           "Avis"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all text-center"
                  >
                    Voir sur Amazon
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Plus de{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Produits Tendances
            </span>
          </motion.h2>

          {/* Robes de Soirée */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">✨ Robes de Soirée</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  name: "Bboninedress Robe de Soirée Cocktail",
                  image: "/files/glowroutine/BboninedressRobedeSoiréeCocktail.jpg",
                  link: "http://www.amazon.fr/dp/B0BX6S7HC1/ref=nosim?tag=ray2207-21",
                  badge: "🔥 TikTok Viral",
                  description: "Robe Longue Asymétrique - Mariage & Cérémonie"
                },
                {
                  name: "Ever-Pretty Robe de Soirée Dos Nu",
                  image: "/files/glowroutine/Ever-PrettyRobedeSoiréeDosNu.jpg",
                  link: "http://www.amazon.fr/dp/B0F1JWC1Z8/ref=nosim?tag=ray2207-21",
                  badge: "⭐ Best Seller",
                  description: "Robe Manches Volantées - Mousseline Élégante"
                },
                {
                  name: "Robe Cocktail Mariage Longue",
                  image: "/files/glowroutine/RobeCocktailMariageLongue.jpg",
                  link: "http://www.amazon.fr/dp/B0CDQ17LXB/ref=nosim?tag=ray2207-21",
                  badge: "🛍️ Vu sur Insta",
                  description: "Robe de Gala avec Traîne - Dos Nu Chic"
                },
                {
                  name: "Ever-Pretty Robe Mariage Invité",
                  image: "/files/glowroutine/Ever-PrettyRobeMariageInvité.jpg",
                  link: "http://www.amazon.fr/dp/B0BL7FC5VQ/ref=nosim?tag=ray2207-21",
                  badge: "✨ Nouveau",
                  description: "Robe Longue Mousseline - Col V Plissé"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-pink-500/90 text-white px-2 py-0.5 rounded-full text-xs">
                      {item.badge}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2">{item.name}</h3>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-2">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all text-center"
                    >
                      Voir sur Amazon
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Robes Clubbing */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">💫 Robes Clubbing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  name: "SEAUR Robe Moulante Bretelles",
                  image: "/files/glowroutine/SEAURRobeMoulanteBretelles.jpg",
                  link: "http://www.amazon.fr/dp/B0D5CMQ6SH/ref=nosim?tag=ray2207-21",
                  badge: "🔥 Tendance",
                  description: "Mini Robe à Bretelles - Dos Nu Clubwear"
                },
                {
                  name: "Robe en Cuir Sexy Clubwear",
                  image: "/files/glowroutine/RobeenCuirSexyClubwear.png",
                  link: "http://www.amazon.fr/dp/B0CLLYXBR6/ref=nosim?tag=ray2207-21",
                  badge: "⭐ Best Seller",
                  description: "Robe Wetlook - Dos Nu, Col V Moulante"
                },
                {
                  name: "Mini Robe Sexy Transparente",
                  image: "/files/glowroutine/MiniRobeSexyTransparente.jpg",
                  link: "http://www.amazon.fr/dp/B0D8J4MP5V/ref=nosim?tag=ray2207-21",
                  badge: "🛍️ Vu sur Insta",
                  description: "Robe Clubbing - Dos Nu Cocktail Soirée"
                },
                {
                  name: "Robe Moulante Manches Longues",
                  image: "/files/glowroutine/RobeMoulanteManchesLongues.jpg",
                  link: "http://www.amazon.fr/dp/B0DJSNQ4FS/ref=nosim?tag=ray2207-21",
                  badge: "✨ Nouveau",
                  description: "Mini Robe de Soirée - Épaules Dénudées"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-pink-500/90 text-white px-2 py-0.5 rounded-full text-xs">
                      {item.badge}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2">{item.name}</h3>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-2">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all text-center"
                    >
                      Voir sur Amazon
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bodys & Combinaisons */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">🌸 Bodys & Combinaisons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  name: "Body Femme Manches Longues",
                  image: "/files/glowroutine/BodyFemmeManchesLongues.jpg",
                  link: "http://www.amazon.fr/dp/B0DX1WN5TZ/ref=nosim?tag=ray2207-21",
                  badge: "🔥 Tendance",
                  description: "Bodysuit à Col Haut - Combinaison Slim"
                },
                {
                  name: "Combinaison Pantalon Linen",
                  image: "/files/glowroutine/CombinaisonPantalonLinen.jpg",
                  link: "http://www.amazon.fr/dp/B0F3CNPKGY/ref=nosim?tag=ray2207-21",
                  badge: "⭐ Bohème",
                  description: "Salopette Imprimé Bohème - Style Plage"
                },
                {
                  name: "Y2K Body Léopard",
                  image: "/files/glowroutine/Y2KBodyLéopard.jpg",
                  link: "http://www.amazon.fr/dp/B0DNQB2PS2/ref=nosim?tag=ray2207-21",
                  badge: "🛍️ Vu sur Insta",
                  description: "Body pour Fête & Festival - Style Y2K"
                },
                {
                  name: "Avidlove Bodys Dentelle",
                  image: "/files/glowroutine/AvidloveBodysDentelle.jpg",
                  link: "http://www.amazon.fr/dp/B0DJNHKDJV/ref=nosim?tag=ray2207-21",
                  badge: "✨ Sexy",
                  description: "Lingerie Dos Nu - Décolleté en V"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-pink-500/90 text-white px-2 py-0.5 rounded-full text-xs">
                      {item.badge}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2">{item.name}</h3>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-2">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all text-center"
                    >
                      Voir sur Amazon
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
              Ce qu'en disent nos influenceuses
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez les retours de notre communauté d'influenceuses qui ont testé et approuvé notre routine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover border-2 border-pink-500"
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <span className="px-2 py-0.5 text-xs bg-pink-500/20 text-pink-400 rounded-full">
                        {testimonial.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{testimonial.platform}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{testimonial.followers} abonnés</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 mb-4">{testimonial.content}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonial.products.map((product, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-pink-500/10 text-pink-400 rounded-full"
                    >
                      {product}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{testimonial.date}</span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span>2.5K</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: ShieldCheck, text: "Produits Vérifiés" },
              { icon: Truck, text: "Livraison Express" },
              { icon: RefreshCw, text: "Retour Gratuit" },
              { icon: Headphones, text: "Support 24/7" }
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white/5 rounded-xl"
              >
                <badge.icon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">{badge.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Prêt à{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              rayonner
            </span>{" "}
            de beauté ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Rejoignez +20K influenceuses qui ont déjà adopté notre routine
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              Découvrir la Routine
            </Link>
            <Link
              href="/streetwear"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              Voir Streetwear
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default GlowRoutinePage;
