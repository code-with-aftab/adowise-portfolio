"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AdCard from "./AdCard";

export default function InterstitialAd() {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(20);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  useEffect(() => {
    // Only show once per user (ever)
    const hasBeenShown = localStorage.getItem("interstitial_ad_shown");
    if (hasBeenShown) return;

    // Only show if the path has actually changed (not on first mount or refresh)
    if (pathname !== lastPath) {
      setVisible(true);
      setCountdown(20);
      setLastPath(pathname);
      localStorage.setItem("interstitial_ad_shown", "true");
    }
  }, [pathname, lastPath]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visible && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Auto-close/redirect after a small delay when finished
            setTimeout(() => setVisible(false), 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [visible, countdown]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-black flex items-center justify-center p-4"
      >
        <div className="relative w-full max-w-lg">
          {/* Close Button - Only visible when countdown is 0 */}
          <AnimatePresence>
            {countdown === 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setVisible(false)}
                className="absolute -top-3 -right-3 z-[10001] flex items-center justify-center w-8 h-8 rounded-full bg-white text-black shadow-xl hover:scale-110 transition-transform"
              >
                <X size={16} strokeWidth={3} />
              </motion.button>
            )}
          </AnimatePresence>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
            {/* Small Integrated Counter */}
            {countdown > 0 && (
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Ad ends in {countdown}s</span>
              </div>
            )}

            <div className="[&_.voguemesh-ad-container]:my-0 [&_.voguemesh-ad-container]:border-none [&_.voguemesh-ad-container]:rounded-none [&_.voguemesh-ad-container]:shadow-none">
              <AdCard url="https://voguemesh.in/" />
            </div>

            {/* Progress Bar at the very bottom */}
            <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 20, ease: "linear" }}
                className="h-full bg-primary"
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
              Redirecting to content...
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
