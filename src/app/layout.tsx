import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srujan Reddy | Deep Cybersecurity Researcher",
  description: "Research operations, automation labs, and secure systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning is required when using next-themes so it doesn't throw errors on reload
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen`}>
        
        {/* Next.js optimized script loading for Netlify CMS */}
        <Script 
          src="https://identity.netlify.com/v1/netlify-identity-widget.js" 
          strategy="afterInteractive" 
        />
        
        {/* Dark Mode Provider */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          {/* Global Floating Navbar */}
          <Navbar />
          
          {/* Main Content Area (padding-top ensures the navbar doesn't cover your hero section) */}
          <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}