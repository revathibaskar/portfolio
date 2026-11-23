import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { ToastProvider } from "@/components/Toast";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090a11",
};

export const metadata: Metadata = {
  title: "Revathi Baskar | Full Stack Developer",
  description:
    "Portfolio of Revathi Baskar, Full Stack Developer specializing in React.js, Next.js, Node.js, Express, PostgreSQL, Stripe, and modern web applications.",
  keywords: [
    "Revathi Baskar",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Frontend Developer",
    "Chennai Developer",
    "Portfolio",
  ],
  authors: [{ name: "Revathi Baskar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] dark:bg-black text-slate-900 dark:text-white antialiased selection:bg-indigo-500 selection:text-white">
        <ThemeProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

