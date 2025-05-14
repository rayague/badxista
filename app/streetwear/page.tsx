"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Truck, RefreshCw, Headphones, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

const StreetwearPage = () => {
  const collection = {
    title: "Streetwear Urbain",
    description: "🔥 Collection TikTok VIRALE - Les looks Bad Girl les plus demandés de 2024. Sélection validée par +10K influenceuses.",
    stats: {
      views: "2.5M+",
      likes: "500K+",
      reviews: "4.9/5",
      influencers: "10K+"
    },
    items: [
      {
        name: "Levi's Everyday Sweat-Shirt Femme",
        image: "/files/picture18.jpg",
        link: "http://www.amazon.fr/dp/B0CP4D7PXD/ref=nosim?tag=ray2207-21",
        badge: "🔥 Tendance TikTok",
        description: "Le sweat Levi's qui cartonne sur TikTok - Qualité premium garantie",
        stats: {
          views: "500K+",
          likes: "100K+",
          reviews: "4.9/5"
        }
      },
      {
        name: "Sweat Patchwork Grand Col V - Oversize",
        image: "/files/picture19.jpg",
        link: "http://www.amazon.fr/dp/B0D5HG7J4B/ref=nosim?tag=ray2207-21",
        badge: "⭐ Best Seller",
        description: "Le sweat oversize préféré des influenceuses - Style vintage tendance",
        stats: {
          views: "300K+",
          likes: "75K+",
          reviews: "4.8/5"
        }
      },
      {
        name: "Chemise Ample Manche Chauve-Souris",
        image: "/files/picture20.jpg",
        link: "http://www.amazon.fr/dp/B0DRL7HQK6/ref=nosim?tag=ray2207-21",
        badge: "🛍️ Vu sur Instagram",
        description: "La chemise la plus copiée de 2024 - Style unique et élégant",
        stats: {
          views: "400K+",
          likes: "90K+",
          reviews: "4.9/5"
        }
      },
      {
        name: "ONLY Jean à Jambe Large",
        image: "/files/picture21.jpg",
        link: "http://www.amazon.fr/dp/B0CND8PY4S/ref=nosim?tag=ray2207-21",
        badge: "✨ Nouveau",
        description: "Le jean wide leg qui fait sensation - Taille haute tendance",
        stats: {
          views: "200K+",
          likes: "50K+",
          reviews: "4.7/5"
        }
      }
    ],
    testimonials: [
      {
        name: "Sophie L.",
        title: "Influenceuse Mode • 250K Followers",
        avatar: "/files/avatar1.jpg",
        content: "Ce style Streetwear est juste PARFAIT ! J'ai fait +50K likes sur ma dernière vidéo TikTok avec ces pièces. La qualité est au rendez-vous et le style est exactement ce que je cherchais.",
        date: "Acheté il y a 2 jours"
      },
      {
        name: "Emma M.",
        title: "Content Creator • 100K Followers",
        avatar: "/files/avatar2.jpg",
        content: "La veste cargo est un vrai coup de cœur ! J'ai reçu tellement de compliments. Le service client est top, ils m'ont aidée à choisir la bonne taille.",
        date: "Acheté il y a 1 semaine"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <Image
          src="/files/picture18.jpg"
          alt="Streetwear Collection"
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
            <ShieldCheck className="w-5 h-5 text-pink-400" />
            <span className="text-sm font-medium">Collection validée par +10K influenceuses</span>
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Streetwear Urbain
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                name: "Sweat à Capuche Avidlove",
                image: "/files/picture18.jpg",
                link: "http://www.amazon.fr/dp/B0CLDTD88T/ref=nosim?tag=ray2207-21",
                badge: "🔥 Tendance",
                description: "Sweat en résille avec capuche - Style unique"
              },
              {
                name: "T-Shirt Graphique Casual",
                image: "/files/picture19.jpg",
                link: "http://www.amazon.fr/dp/DACONGMING/ref=nosim?tag=ray2207-21",
                badge: "⭐ Populaire",
                description: "T-shirt décontracté à manches longues"
              },
              {
                name: "Sweat Capuche Col V",
                image: "/files/picture20.jpg",
                link: "http://www.amazon.fr/dp/B0CFV5SYQW/ref=nosim?tag=ray2207-21",
                badge: "🛍️ Vu sur Insta",
                description: "Sweat hoodie manche longue - Style urbain"
              },
              {
                name: "Hoodie Femme Oversize",
                image: "/files/picture21.jpg",
                link: "http://www.amazon.fr/dp/B081RF9JVR/ref=nosim?tag=ray2207-21",
                badge: "✨ Nouveau",
                description: "Sweatshirt à capuche - Style streetwear"
              },
              {
                name: "Sweat Capuche Super Doux",
                image: "/files/picture18.jpg",
                link: "http://www.amazon.fr/dp/B08QRHYD9T/ref=nosim?tag=ray2207-21",
                badge: "🔥 Best Seller",
                description: "Sweat à capuche portable et confortable"
              },
              {
                name: "Sweat Patchwork Vintage",
                image: "/files/picture19.jpg",
                link: "http://www.amazon.fr/dp/B0D5HH7LT9/ref=nosim?tag=ray2207-21",
                badge: "⭐ Tendance",
                description: "Sweat oversize style vintage - Col roulé"
              },
              {
                name: "Amazon Essentials Sweat",
                image: "/files/picture20.jpg",
                link: "http://www.amazon.fr/dp/B07YLCNMH4/ref=nosim?tag=ray2207-21",
                badge: "🛍️ Qualité",
                description: "Sweat en polaire - Grandes tailles disponibles"
              },
              {
                name: "Pull Décontracté Léger",
                image: "/files/picture21.jpg",
                link: "http://www.amazon.fr/dp/B0D9TGK2T3/ref=nosim?tag=ray2207-21",
                badge: "✨ Nouveau",
                description: "Pull chic et léger - Style casual"
              },
              {
                name: "Sweat Col V Casual",
                image: "/files/picture18.jpg",
                link: "http://www.amazon.fr/dp/B0CCYDFX9F/ref=nosim?tag=ray2207-21",
                badge: "🔥 Tendance",
                description: "Sweatshirt col en V - Style décontracté"
              },
              {
                name: "Sweat Sport avec Trous",
                image: "/files/picture19.jpg",
                link: "http://www.amazon.fr/dp/B07MV68YL9/ref=nosim?tag=ray2207-21",
                badge: "⭐ Sport",
                description: "Sweat à capuche sportif - Style athlétique"
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
              révolutionner
            </span>{" "}
            votre style ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Rejoignez +10K influenceuses qui ont déjà adopté notre style
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
              href="/glamwear"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              Voir Glamwear
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default StreetwearPage;
