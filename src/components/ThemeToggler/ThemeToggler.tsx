"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // zaglushka use before render.
  }
  return (
    <button
      type="button"
      className="p-0.5 border rounded-3xl w-[24px] h-[24px] flex items-center justify-center text-[16px] leading-none"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? "🌞" : "🌛"}
    </button>
  );
}
