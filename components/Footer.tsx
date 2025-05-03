import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://x.com/PharosTash6971" },
    { name: "GitHub", icon: Github, href: "https://github.com/Debanjannnn/PHARO-TASHI" },
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-b from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24 bg-[linear-gradient(180deg,_white_1%,_#A7C7E7_90%)] backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-blue-500/10"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center leading-tight">
              Ready to maximize your <span className="text-black drop-shadow-[0_4px_1.5px_rgba(1,8,255,1)]">DeFi returns?</span>
            </h3>
            <p className="text-black mb-10 max-w-2xl mx-auto text-center text-lg opacity-90">
              Join thousands of users who are already benefiting from our advanced staking solutions.
            </p>
            <motion.button 
              className="bg-gradient-to-b from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-5 rounded-xl font-bold shadow-lg text-xl transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now
            </motion.button>
          </div>
        </motion.div>

        {/* Social links */}
        <div className="flex flex-wrap gap-6 justify-center mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600/30 hover:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>

        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/5 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[120px]" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:40px_40px] opacity-[0.02]"></div>
        </div>

        {/* Top border with gradient */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mb-16"></div>

        {/* Bottom section with improved spacing */}
        <div className="mt-24 pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-6 md:mb-0"
            >
              © {new Date().getFullYear()} PHARO TASHI. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-x-8 gap-y-4 justify-center"
            >
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute bottom-12 left-0 w-full opacity-15">
          <svg
            width="100%"
            height="2"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0" y1="1" x2="100" y2="1" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="6,6" />
          </svg>
        </div>
      </div>
    </footer>
  );
}