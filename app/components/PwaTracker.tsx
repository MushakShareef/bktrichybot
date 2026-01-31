"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function PwaTracker() {
  useEffect(() => {
    /* ---------- INSTALL TRACKING ---------- */
    const handleInstalled = () => {
      track("pwa_installed");
    };

    window.addEventListener("appinstalled", handleInstalled);

    /* ---------- OPEN TRACKING (STANDALONE MODE) ---------- */
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS Safari
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      // prevent duplicate fires per session
      if (!sessionStorage.getItem("pwa_opened")) {
        track("pwa_opened");
        sessionStorage.setItem("pwa_opened", "true");
      }
    }

    return () => {
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  return null;
}
