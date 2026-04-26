"use client";
import { useState, useEffect } from "react";

export default function NavWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Triggers once the page is fully loaded on the client
  }, []);

  if (!mounted) return null; // Keeps the navbar hidden during loading
  return <>{children}</>;
}
