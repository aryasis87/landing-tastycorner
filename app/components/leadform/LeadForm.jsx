"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import { submitLead } from "@/lib/email";

export default function LeadForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      tempErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Format email tidak valid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await submitLead(formData);
      setMessage("🎉 Berhasil! Anda sekarang sudah berlangganan.");
      setFormData({ name: "", email: "" });
    } catch (error) {
      setMessage("❌ Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="leadform" className="p-8 py-18 bg-gradient-to-r from-tomato to-tomato text-receipt text-center">
      <motion.h2 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 px-4 leading-tight"
      >
        Tetap Selangkah Lebih Maju
      </motion.h2>
      <p className="mx-auto mb-12 max-w-2xl px-4 text-lg text-receipt md:px-8">
        Berlangganan untuk mendapatkan pembaruan eksklusif, wawasan terbaru, dan strategi langsung ke email Anda.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="relative">
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-4 rounded-lg border focus:ring-2 bg-[#00000020] ${
              errors.name ? "border-tomato/30 ring-tomato" : "border-carbon/12 focus:ring-tomato"
            } transition`}
          />
          {errors.name && <p className="text-tomato text-sm mt-2">{errors.name}</p>}
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email Anda"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-4 rounded-lg border focus:ring-2 bg-[#00000020] ${
              errors.email ? "border-tomato/30 ring-tomato" : "border-carbon/12 focus:ring-tomato"
            } transition`}
          />
          {errors.email && <p className="text-tomato text-sm mt-2">{errors.email}</p>}
        </motion.div>
        <motion.button
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          type="submit"
          disabled={loading}
          className="w-full bg-tomato text-receipt py-4 rounded-lg font-bold hover:bg-tomato transition flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-tomato/30"></span>
              Mengirim...
            </>
          ) : (
            "Berlangganan"
          )}
        </motion.button>
      </form>
      {message && <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mt-6 text-lg"
      >
        {message}
      </motion.p>}
    </section>
  );
}
