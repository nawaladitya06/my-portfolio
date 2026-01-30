"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
      {/* 1. Header with Icon (Green Accent) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Send className="text-green-400" size={40} />
          Get In Touch
        </h2>
        <div className="h-1 w-20 bg-green-500 rounded-full mx-auto" />
      </motion.div>

      {/* 2. Glassmorphic Contact Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md text-center max-w-2xl mx-auto hover:border-green-500/30 transition-colors group"
      >
        <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-400 mb-6 group-hover:scale-110 transition-transform">
          <Mail size={32} />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Together</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          I'm currently looking for internships and freelance opportunities. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:nawaladitya06@gmail.com" 
            className="px-8 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-green-400 transition-colors"
          >
            <Mail size={18} />
            Say Hello
          </a>
          
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/aditya-nawal" 
              target="_blank" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/nawaladitya06" 
              target="_blank" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}