import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '300-500',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="max-w-screen-xl mx-auto px-4 py-16 bg-[#F9F9F7]">
      {/* Section Header */}
      <div className="mb-12 border-b-2 border-[#111111] pb-4">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">Contact // Let's Build Something Great Together</div>
        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#111111] tracking-tight">START YOUR PROJECT</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: What to expect */}
        <div className="lg:col-span-5 border border-[#111111] p-6 bg-white">
          <div className="bg-[#111111] text-[#F9F9F7] text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-bold mb-4">
            WHAT TO EXPECT
          </div>
          <p className="font-body text-sm text-neutral-600 text-justify mb-4">
            Tell us about your project and we'll get back to you within 4 hours with an honest assessment — no obligation, no hard sell. If we're a good fit, we'll schedule a free 30-minute consultation to discuss your goals and timeline.
          </p>
          <p className="font-body text-sm text-neutral-600 text-justify mb-6">
            Every project gets a fixed-price quote upfront. You'll always know what you're paying before any work begins.
          </p>
          <div className="border-t border-dashed border-[#111111] pt-4 space-y-3">
            <a href="mailto:contact@webcunts.dev" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-700 hover:text-[#CC0000] transition-colors">
              <span className="inline-flex items-center justify-center border border-[#111111] h-6 w-6 shrink-0 hover:bg-[#111111] hover:text-[#F9F9F7] transition-colors">
                <svg className="h-3 w-3 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              contact@webcunts.dev
            </a>
            <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 pt-2">
              <div>• We work across GMT+7, GMT, and EST timezones</div>
              <div>• Response within 4 hours on business days</div>
              <div>• English-speaking team</div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form 
          onSubmit={handleSubmit}
          className="lg:col-span-7 border-2 border-[#111111] p-8 bg-white"
        >
          {submitted ? (
            <div className="text-center py-12">
              <span className="font-serif text-3xl font-black uppercase text-[#CC0000] block mb-4">
                ★ MESSAGE SENT ★
              </span>
              <p className="font-body text-sm text-neutral-700 max-w-md mx-auto">
                Thanks for reaching out! We'll review your project details and get back to you within 4 hours with a thoughtful response.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 border border-[#111111] bg-transparent px-6 py-2.5 font-sans font-bold uppercase tracking-widest text-xs transition-colors hover:bg-[#111111] hover:text-[#F9F9F7] cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Name */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Smith"
                  className="border-b-2 border-[#111111] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-neutral-100 focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@company.com"
                  className="border-b-2 border-[#111111] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-neutral-100 focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                />
              </div>

              {/* Budget */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  Estimated Budget
                </label>
                <select 
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="border-b-2 border-[#111111] bg-transparent px-3 py-2.5 font-mono text-sm focus-visible:bg-neutral-100 focus-visible:outline-none cursor-pointer"
                  style={{ borderRadius: '0px' }}
                >
                  <option value="300-500">$300 – $500 USD</option>
                  <option value="500-1000">$500 – $1,000 USD</option>
                  <option value="1000-1500">$1,000 – $1,500 USD</option>
                  <option value="1500-2000">$1,500 – $2,000 USD</option>
                  <option value="2000-plus">$2,000+ USD</option>
                  <option value="not-sure">Not sure yet — let's discuss</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  Tell Us About Your Project
                </label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What does your business do? What kind of website or tool do you need? Any specific features in mind?"
                  className="border border-[#111111] bg-transparent p-3 font-mono text-sm focus-visible:bg-neutral-100 focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                />
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="w-full bg-[#111111] text-[#F9F9F7] border border-transparent px-6 py-3.5 font-sans font-bold uppercase tracking-widest text-xs transition-all duration-200 hover:bg-white hover:text-[#111111] hover:border-[#111111] cursor-pointer min-h-[44px] min-w-[44px]"
                style={{ borderRadius: '0px' }}
              >
                Send Inquiry
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
