"use client";

import { useState } from "react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-cream-light text-foreground text-sm text-center py-3 px-8 relative">
      <span>
        Get 10% off your first order — because great taste is just the beginning
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground hover:opacity-60 cursor-pointer"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
