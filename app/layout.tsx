import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supervised Run",
  description: "A lightweight model for delegating work to AI agents.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#11100e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem("supervised-run-theme");
    document.documentElement.dataset.theme =
      storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
