import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrowserCheck – Non-Mainstream Browser Compatibility Testing",
  description: "Test your website across Pale Moon, Lynx, and other niche browsers. Automated compatibility reports for accessibility-focused developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8f160981-b436-4219-b2ba-effca7d4efae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
