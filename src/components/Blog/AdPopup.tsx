"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AdCard from "./AdCard";

export default function AdPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show ad every 20 seconds
    const interval = setInterval(() => {
      setVisible(true);
    }, 20000); 

    // Also show once after 5 seconds initially
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, y: 100, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-[9999] w-full max-w-[380px] pointer-events-none"
        >
          <div className="pointer-events-auto relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)] rounded-2xl overflow-hidden">
            <button
              onClick={() => setVisible(false)}
              className="absolute top-2 right-2 z-[10000] flex items-center justify-center w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 text-zinc-500 backdrop-blur-md transition-all active:scale-90"
              aria-label="Close Ad"
            >
              <X size={14} strokeWidth={3} />
            </button>
            <div className="bg-white dark:bg-zinc-900">
               {/* Use a slightly modified style for the popup ad */}
               <div className="[&_.voguemesh-ad-container]:my-0 [&_.voguemesh-ad-container]:border-none [&_.voguemesh-ad-container]:shadow-none">
                 <AdCard url="https://voguemesh.in/" />
               </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
