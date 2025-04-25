// components/Carousel.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const items = [
    { id: 1, title: "Streetwear Bad Girl", price: "119€" },
    { id: 2, title: "Soirée Séduction", price: "129€" },
    { id: 3, title: "Glow Routine", price: "89€" },
    { id: 4, title: "Look Pack Spécial", price: "149€" },
  ];

  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-70%"]);

  return (
    <motion.div
      className="relative overflow-hidden group"
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.div
        ref={ref}
        style={{ x }}
        className="flex gap-8 pb-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -(items.length * 400) + 400 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="w-[300px] flex-shrink-0 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 100px 0px 100px" }}
          >
            <div className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute inset-0 bg-[url('/images/look-${index + 1}.jpg')] bg-cover bg-center"
              />

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg font-medium">{item.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation personnalisée */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
