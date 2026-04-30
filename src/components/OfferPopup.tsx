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
    }, 1500);
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
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-5 right-5 z-[9999] w-full max-w-[320px]"
          >
            <div className="relative w-full rounded-2xl overflow-hidden bg-white dark:bg-gray-dark shadow-[0_10px_50px_rgba(0,0,0,0.2)] border border-primary/10">

              {/* Header */}
              <div className="bg-primary px-6 py-5 text-center relative">
                <button
                  onClick={close}
                  className="absolute top-3 right-3 rounded-full p-1 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70 mb-1">Limited Offer</p>
                <h2 className="text-3xl font-black text-white">20% OFF</h2>
                <p className="mt-1 text-xs text-white/80 font-medium">On all website plans</p>
              </div>

              {/* Body */}
              <div className="px-6 py-4 text-center">
                <p className="text-body-color dark:text-gray-400 text-[11px] leading-relaxed mb-4">
                  Book your project this week and save 20%. Limited slots available.
                </p>

                <button
                  onClick={handleClaim}
                  className="inline-flex items-center gap-1.5 w-full justify-center rounded-xl bg-primary py-2.5 text-xs font-bold text-white hover:bg-primary/90 transition-colors"
                >
                  Claim Discount <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
