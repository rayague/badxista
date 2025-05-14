"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Validation basique de l'email
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Veuillez entrer une adresse email valide");
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setStatus("success");
      setMessage("🎉 Bienvenue dans la boucle ! Ton inscription est confirmée.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Oups ! Une erreur est survenue. Réessaie dans quelques instants.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center md:text-left"
      >
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Mail className="w-6 h-6 text-pink-400" />
          Reste dans la boucle
        </h3>
        <p className="text-gray-400 mb-6">
          Reçois nos offres secrètes, sélections limitées et pépites avant tout le monde. 
          Zéro spam. Juste des looks 🔥.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entre ton email ici"
              className="w-full px-5 py-3 rounded-full text-black placeholder-gray-400 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/90 backdrop-blur-sm"
              disabled={status === "loading"}
            />
            {status === "loading" && (
              <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-500 animate-spin" />
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full px-8 py-3 rounded-full font-semibold text-white transition-all
              ${status === "loading" 
                ? "bg-pink-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              }`}
          >
            {status === "loading" ? "Inscription en cours..." : "Je m'abonne"}
          </button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-sm ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </motion.p>
        )}

        <p className="mt-4 text-xs text-gray-500">
          En t'inscrivant, tu acceptes de recevoir nos emails marketing. 
          Tu peux te désinscrire à tout moment.
        </p>
      </motion.div>
    </div>
  );
};

export default Newsletter; 