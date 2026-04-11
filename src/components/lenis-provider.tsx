"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // ONLY valid properties in new version
      duration: 0.4,
      lerp: 0.3, // smoothness
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 2.5,
      touchMultiplier: 3,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
