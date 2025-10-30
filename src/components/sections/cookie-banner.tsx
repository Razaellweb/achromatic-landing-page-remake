"use client";

import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "cookie_consent";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleDecision = (decision: "accepted" | "denied") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, decision);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-md rounded-xl border bg-background p-6 shadow-lg sm:left-6">
      <p className="text-sm text-muted-foreground">
        We use cookies primarily for analytics and to enhance your experience. By
        accepting you agree to our use of cookies.{" "}
        <a
          href="#"
          className="font-medium text-foreground underline underline-offset-4"
        >
          Learn more
        </a>
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={() => handleDecision("denied")}
          className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-xl border border-input bg-transparent px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
        >
          Deny
        </button>
        <button
          onClick={() => handleDecision("accepted")}
          className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;