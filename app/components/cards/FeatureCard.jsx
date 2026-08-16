// components/cards/FeatureCard.jsx
"use client";
import { motion } from "framer-motion";
import { fadeIn, hoverEffect } from "../animations/animations";

export default function FeatureCard({ title, description }) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover="hover"
      className="p-8 shadow-md rounded-lg bg-receipt border border-carbon/12"
    >
      <h3 className="text-2xl font-bold text-tomato mb-4">{title}</h3>
      <p className="text-carbon-soft">{description}</p>
    </motion.div>
  );
}
