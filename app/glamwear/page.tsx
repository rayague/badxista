"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Truck, RefreshCw, Headphones, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const GlamwearPage = () => {
  const collection = {
    title: "Glamwear",
    description: "✨ Collection Instagram VIRALE - Les looks de soirée les plus demandés de 2024. Sélection validée par +15K influenceuses.",
    stats: {
      views: "3.2M+",
      likes: "750K+",
      reviews: "4.9/5",
      influencers: "15K+"
    },
    items: [
      {
        name: "Robe de Soirée Dos Nu Strass",
        image: "/files/picture14.jpg",
        link: "http://www.amazon.fr/dp/B0C4NLC4SR/ref=nosim?tag=ray2207-21",
        badge: "🔥 TikTok Viral",
        description: "Robe Longue avec Strass - Événement Premium",
        stats: {
          views: "1.2M+",
          likes: "300K+",
          reviews: "4.9/5"
        }
      },
      {
        name: "Robe de Gala Traîne Cristal",
        image: "/files/picture7.webp",
        link: "http://www.amazon.fr/dp/B0DWFH88PM/ref=nosim?tag=ray2207-21",
        badge: "⭐ Best Seller",
        description: "Robe de Soirée avec Traîne - Style Hollywood",
        stats: {
          views: "900K+",
          likes: "250K+",
          reviews: "4.9/5"
        }
      },
      {
        name: "Robe Cocktail Plissée Paillettes",
        image: "/files/picture15.jpg",
        link: "http://www.amazon.fr/dp/B0BNJ1ZVPY/ref=nosim?tag=ray2207-21",
        badge: "🛍️ Vu sur Insta",
        description: "Robe Courte Paillettes - Soirée VIP",
        stats: {
          views: "800K+",
          likes: "200K+",
          reviews: "4.8/5"
        }
      },
      {
        name: "Robe de Soirée Mousseline Élégante",
        image: "/files/picture11.jpg",
        link: "http://www.amazon.fr/dp/B0BL7FC5VQ/ref=nosim?tag=ray2207-21",
        badge: "✨ Nouveau",
        description: "Robe Longue Mousseline - Style Red Carpet",
        stats: {
          views: "600K+",
          likes: "150K+",
          reviews: "4.8/5"
        }
      },
      {
        name: "Ever-Pretty Robe de Soirée en Double V-col",
        image: "/files/picture14.jpg",
        link: "http://www.amazon.fr/dp/B07GKSDM7K/ref=nosim?tag=ray2207-21",
        badge: "🔥 Tendance",
        description: "Robe de soirée élégante, double V, manches courtes",
        stats: {
          views: "700K+",
          likes: "180K+",
          reviews: "4.7/5"
        }
      },
      {
        name: "Ever-Pretty Robe de Témoin de Mariage Longue",
        image: "/files/picture7.webp",
        link: "http://www.amazon.fr/dp/B0DQL413C8/ref=nosim?tag=ray2207-21",
        badge: "⭐ Best Seller",
        description: "Robe longue appliqué col V, manches courtes, chic",
        stats: {
          views: "500K+",
          likes: "120K+",
          reviews: "4.8/5"
        }
      },
      {
        name: "Berylove Robe de soirée Officielle",
        image: "/files/picture15.jpg",
        link: "http://www.amazon.fr/dp/B08KW3J56X/ref=nosim?tag=ray2207-21",
        badge: "🛍️ Vu sur Insta",
        description: "Robe de mariage à manches courtes à volants",
        stats: {
          views: "400K+",
          likes: "100K+",
          reviews: "4.7/5"
        }
      },
      {
        name: "Ever-Pretty Robe de Soirée Longue Femme avec Ruchés",
        image: "/files/picture11.jpg",
        link: "http://www.amazon.fr/dp/B08LD9GPCY/ref=nosim?tag=ray2207-21",
        badge: "✨ Nouveau",
        description: "Robe longue, mousseline de soie, classique",
        stats: {
          views: "300K+",
          likes: "80K+",
          reviews: "4.6/5"
        }
      },
      {
        name: "Robe de Soirée Dos Nu Paillettes",
        image: "/files/picture14.jpg",
        link: "http://www.amazon.fr/dp/B0C4NLC4SR/ref=nosim?tag=ray2207-21",
        badge: "🔥 TikTok Viral",
        description: "Robe Longue avec Paillettes - Soirée Élégante",
        stats: {
          views: "1M+",
          likes: "280K+",
          reviews: "4.9/5"
        }
      },
      {
        name: "Robe de Gala Manches Volantées",
        image: "/files/picture7.webp",
        link: "http://www.amazon.fr/dp/B0DWFH88PM/ref=nosim?tag=ray2207-21",
        badge: "⭐ Best Seller",
        description: "Robe de Soirée avec Volants - Style Princesse",
        stats: {
          views: "850K+",
          likes: "220K+",
          reviews: "4.8/5"
        }
      },
      {
        name: "Robe Cocktail Dos Nu Transparent",
        image: "/files/picture15.jpg",
        link: "http://www.amazon.fr/dp/B0BNJ1ZVPY/ref=nosim?tag=ray2207-21",
        badge: "🛍️ Vu sur Insta",
        description: "Robe Courte Dos Nu - Soirée Sensuelle",
        stats: {
          views: "750K+",
          likes: "190K+",
          reviews: "4.7/5"
        }
      },
      {
        name: "Robe de Soirée Col V Plissé",
        image: "/files/picture11.jpg",
        link: "http://www.amazon.fr/dp/B0BL7FC5VQ/ref=nosim?tag=ray2207-21",
        badge: "✨ Nouveau",
        description: "Robe Longue Plissée - Style Élégant",
        stats: {
          views: "550K+",
          likes: "140K+",
          reviews: "4.8/5"
        }
      }
    ],
    testimonials: [
      {
        name: "Julie M.",
        title: "Influenceuse Mode • 350K Followers",
        avatar: "/files/influencer3.jpg",
        content: "Cette robe strass est juste MAGIQUE ! J'ai fait +100K likes sur ma dernière photo Instagram. La qualité est exceptionnelle et le style est exactement ce que je cherchais pour mes soirées.",
        date: "Acheté il y a 3 jours"
      },
      {
        name: "Sarah L.",
        title: "Content Creator • 200K Followers",
        avatar: "/files/influencer4.jpg",
        content: "Les talons plateforme sont un vrai coup de cœur ! J'ai reçu tellement de compliments. Le service client est au top, ils m'ont aidée à choisir la bonne taille.",
        date: "Acheté il y a 2 semaines"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <Image
          src="/files/picture14.jpg"
          alt="Glamwear Collection"
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
            <span className="text-sm font-medium">Collection validée par +15K influenceuses</span>
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Glamwear
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
                {key === "views" ? "Vues Instagram" :
                 key === "likes" ? "Likes" :
                 key === "reviews" ? "Note Moyenne" :
                 "Influenceuses Satisfaites"}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Ce qu'en disent nos{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              influenceuses
            </span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {collection.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
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
                <div className="mt-4 text-xs text-gray-400">{testimonial.date}</div>
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
              briller
            </span>{" "}
            de mille feux ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Rejoignez +15K influenceuses qui ont déjà adopté notre style
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
              Découvrir la Collection
            </Link>
            <Link
              href="/glow-routine"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              Voir Glow Routine
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default GlamwearPage;
