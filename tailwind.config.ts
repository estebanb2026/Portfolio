import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-bg": "var(--bg-primary)",
        "app-surface": "var(--bg-secondary)",
        "app-glass": "var(--bg-glass)",
        "app-border-glass": "var(--border-glass)",
        "app-border-subtle": "var(--border-subtle)",
        "app-text": "var(--text-primary)",
        "app-muted": "var(--text-secondary)",
        "app-faint": "var(--text-muted)",
        "app-accent": "var(--accent)",
        "app-accent-warm": "var(--accent-warm)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
