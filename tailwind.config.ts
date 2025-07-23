import type { Config } from "tailwindcss";

const config: Config = {
  // PERUBAHAN DI SINI: Tambahkan 'src/' di depan setiap path
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Konfigurasi tema Anda sudah benar, tidak perlu diubah
      colors: {
        primary: "#FB7F04",
        secondary: "#FB3604",
        tertiary: "#FBD407",
        "base-text": "#374151",
        "subtle-text": "#6B7280",
        "border-color": "#D1D5DB",
      },
      boxShadow: {
        "focus-glow": "0 0 0 3px rgba(29, 154, 210, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
