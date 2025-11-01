"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pb from "@/public/backgroundPc.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function Header() {
  return (
    <div className="flex flex-col justify-center text-start text-white h-screen w-full overflow-hidden px-4 sm:px-6 md:px-8">
      <Image
        src={pb}
        alt="Photo background"
        fill
        priority
        className="object-cover object-center"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl md:ml-8 lg:ml-16"
      >
        <motion.h3
          variants={itemVariants}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light"
        >
          Bienvenue, je suis
        </motion.h3>

        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-gray-700 to-gray-500"
        >
          Ambroise
        </motion.h2>

        <motion.h4
          variants={itemVariants}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-light"
        >
          <strong>Développeur Web Full Stack</strong>
        </motion.h4>
      </motion.div>
    </div>
  );
}
