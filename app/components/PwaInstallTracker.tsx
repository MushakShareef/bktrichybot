"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function PwaInstallTracker() {
  useEffect(() => {
    const handler = () => {
      track("pwa_installed");
    };

    window.addEventListener("appinstalled", handler);

    return () => {
      window.removeEventListener("appinstalled", handler);
    };
  }, []);

  return null;
}
