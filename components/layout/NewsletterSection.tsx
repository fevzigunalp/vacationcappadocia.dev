"use client";

import { useState } from "react";
import { Send, MessageCircle, Phone } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle newsletter signup
    setEmail("");
  };

  return (
    <section className="bg-light-bg py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Newsletter */}
          <div>
            <h2 className="text-heading text-2xl md:text-3xl font-bold mb-2">
              Sign Up for Our Newsletter
            </h2>
            <p className="text-body-text mb-6">
              Save up to 50% on tours and trips. Get instant access to lower
              prices.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-[3px] border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-[3px] font-medium text-sm flex items-center gap-2 transition-colors"
              >
                <Send size={16} />
                Subscribe
              </button>
            </form>
          </div>

          {/* Customer Support */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:justify-end">
            <div>
              <h3 className="text-heading text-xl font-bold mb-1">
                24/7 Customer Support
              </h3>
              <p className="text-body-text text-sm mb-4">
                Need help? We&apos;re here for you around the clock.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/905375949221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-[3px] text-sm font-medium transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat Now
                </a>
                <a
                  href="tel:+905375949221"
                  className="flex items-center gap-2 text-heading hover:text-primary transition-colors font-medium text-sm"
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
