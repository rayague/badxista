// components/MorphSection.tsx
"use client";

import { motion } from "framer-motion";

export default function MorphSection() {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      whileInView={{ clipPath: "circle(100% at 50% 50%)" }}
      transition={{ duration: 1.5, type: "spring" }}
      className="bg-pink-500 h-screen"
    />
  );
}
