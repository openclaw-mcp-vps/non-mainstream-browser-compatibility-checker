export default function Home() {
  const faqs = [
    {
      q: "Which browsers are supported?",
      a: "We test across Pale Moon, Lynx, Dillo, NetSurf, Links, and more niche browsers — covering text-based, legacy, and alternative rendering engines."
    },
    {
      q: "How does the testing work?",
      a: "Each browser runs in an isolated container. We capture screenshots, console errors, and render output, then compile a detailed compatibility report for your URL."
    },
    {
      q: "Is this useful for accessibility compliance?",
      a: "Yes. Text-based browsers like Lynx expose missing alt text, poor heading structure, and broken keyboard navigation — critical for WCAG compliance."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Browser Compatibility Testing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Does your site work in{" "}
          <span className="text-[#58a6ff]">every browser?</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automated compatibility reports for Pale Moon, Lynx, Dillo, and other non-mainstream browsers. Built for developers who care about accessibility.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Testing — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>
      </section>

      {/* Browser badges */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <p className="text-center text-xs text-[#8b949e] uppercase tracking-widest mb-5">Tested browsers include</p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Pale Moon", "Lynx", "Dillo", "NetSurf", "Links", "w3m", "ELinks", "Midori"].map((b) => (
            <span key={b} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for thorough compatibility testing</p>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-white">$29</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited URL submissions",
              "8+ non-mainstream browsers",
              "Screenshots & render diffs",
              "Console error reports",
              "Accessibility insights",
              "Email delivery of reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} BrowserCheck. All rights reserved.
      </footer>
    </main>
  );
}
