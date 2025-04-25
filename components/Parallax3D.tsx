// components/Parallax3D.tsx
"use client";

import { useTransform, motion } from "framer-motion";

export default function Parallax3D() {
// { scrollYProgress }
  // const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  // const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      // style={{ rotateY, rotateX }}
      className="w-full h-[800px] bg-[url('/images/3d-model.jpg')] bg-cover bg-center rounded-3xl shadow-2xl"
    />
  );
}
