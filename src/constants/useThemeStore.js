import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "Dark", // Default theme
  setTheme: (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme); // Apply to HTML tag
    set({ theme: newTheme });
  },
}));
