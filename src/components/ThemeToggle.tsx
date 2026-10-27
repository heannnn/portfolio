"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg text-fg-muted hover:text-fg hover:bg-sunken transition-colors"
      aria-label="다크 모드 전환"
    >
      <Sun size={20} className="hidden dark:block" />
      <Moon size={20} className="dark:hidden" />
    </button>
  );
}
