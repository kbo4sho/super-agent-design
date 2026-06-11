"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const storageKey = "supervised-run-theme";

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
}

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";

  const currentTheme = document.documentElement.dataset.theme;

  if (currentTheme === "dark" || currentTheme === "light") {
    return currentTheme;
  }

  try {
    const storedTheme = window.localStorage?.getItem(storageKey);

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  } catch {
    // Storage can be unavailable in embedded browser contexts.
  }

  return "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function changeTheme(nextTheme: ThemeMode) {
    setTheme(nextTheme);
    applyTheme(nextTheme);

    try {
      window.localStorage?.setItem(storageKey, nextTheme);
    } catch {
      // The theme still applies for the current document when storage is blocked.
    }
  }

  return (
    <div
      aria-label="Theme"
      className="flex rounded-full border border-line bg-[var(--color-secondary-bg)] p-0.5"
      role="group"
    >
      {(["light", "dark"] as ThemeMode[]).map((mode) => (
        <button
          aria-pressed={theme === mode}
          className={[
            "rounded-full px-2.5 py-1 text-[11px] font-semibold transition",
            theme === mode
              ? "bg-paper text-ink shadow-[0_6px_16px_rgba(51,43,31,0.07)]"
              : "text-muted hover:text-ink",
          ].join(" ")}
          key={mode}
          type="button"
          onClick={() => changeTheme(mode)}
        >
          {mode === "dark" ? "Dark" : "Light"}
        </button>
      ))}
    </div>
  );
}
