module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        primary: {
          DEFAULT: "#2463C5",
          hover: "#1D4FA0",
          focus: "#A0BEEE",
          active: "#153A74",
          disabled: "#D0DEF6",
          dark: "#1f2937",
          light: "#6b7280",
          lightest: "#D0DEF6",
        },
        secondary: {
          DEFAULT: "#e5e7eb",
          hover: "#9ca3af",
          focus: "#f3f4f6",
          disabled: "#f3f4f6",
        },
        info: {
          darkest: "#1E40AF",
          dark: "#1D4ED8",
          light: "#60A5FA",
          lightest: "#EFF6FF",
        },
        success: {
          darkest: "#065F46",
          dark: "#047857",
          light: "#34D399",
          lightest: "#ECFDF5",
        },
        warning: {
          darkest: "#92400E",
          dark: "#B45309",
          light: "#FBBF24",
          lightest: "#FFFBEB",
        },
        error: {
          darkest: "#991B1B",
          dark: "#B91C1C",
          light: "#F87171",
          lightest: "#FEF2F2",
        },
        body: "#f9fafb",
        stroke: "#E5E7EB",
      },
    },
  },
  plugins: [],
}
