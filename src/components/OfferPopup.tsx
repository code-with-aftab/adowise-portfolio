"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function OfferPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("offerPopupShown");
    if (shown) return;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("offerPopupShown", "true");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setVisible(false);

  const handleClaim = () => {
    close();
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto relative w-full max-w-xs rounded-2xl overflow-hidden bg-white dark:bg-gray-dark shadow-2xl">

              {/* Header */}
              <div className="bg-primary px-6 py-5 text-center relative">
                <button
                  onClick={close}
                  className="absolute top-3 right-3 rounded-full p-1 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">Special Offer</p>
                <h2 className="text-4xl font-black text-white">20% OFF</h2>
                <p className="mt-1 text-sm text-white/80 font-medium">On all website plans</p>
              </div>

              {/* Body */}
              <div className="px-6 py-5 text-center">
                <p className="text-body-color dark:text-gray-400 text-xs leading-relaxed mb-4">
                  Book your project this week and save 20%. Limited slots available.
                </p>

                <button
                  onClick={handleClaim}
                  className="inline-flex items-center gap-1.5 w-full justify-center rounded-xl bg-primary py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
                >
                  View Plans <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <button onClick={close} className="mt-3 text-xs text-gray-400 hover:text-gray-500 transition-colors">
                  No thanks
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
