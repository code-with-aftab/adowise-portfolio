"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AdCard from "./AdCard";

export default function AdPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("ad_popup_shown");
    if (shown) return;

    // Show ad once after 1 second initially
    const timeout = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("ad_popup_shown", "true");
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-[9999] w-full max-w-[260px] pointer-events-none"
        >
          <div className="pointer-events-auto relative shadow-2xl rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setVisible(false)}
              className="absolute top-2 right-2 z-[10000] flex items-center justify-center w-7 h-7 rounded-full bg-white dark:bg-zinc-800 text-zinc-500 shadow-md transition-all active:scale-90"
              aria-label="Close Ad"
            >
              <X size={14} strokeWidth={3} />
            </button>
            <div className="bg-white dark:bg-zinc-900">
               {/* Use a slightly modified style for the popup ad */}
               <div className="[&_.voguemesh-ad-container]:my-0 [&_.voguemesh-ad-container]:border-none [&_.voguemesh-ad-container]:shadow-none">
                 <AdCard url="https://voguemesh.in/" compact={true} />
               </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
