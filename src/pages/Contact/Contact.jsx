import React, { useState } from 'react';
import Button from '../../components/Button/Button';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', description: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('🎉 Message sent successfully! (Demo)');
    setTimeout(() => setStatus(''), 3000);
    setForm({ name: '', phone: '', description: '' });
  };

  const inputCls = `
    w-full px-4 py-3.5 rounded-xl
    bg-white/5 border border-white/10
    text-slate-100 text-[0.95rem] font-inter
    placeholder:text-slate-600 outline-none
    transition-all duration-300
    focus:border-az-pink focus:bg-[rgba(255,53,155,0.06)]
    focus:shadow-[0_0_0_3px_rgba(255,53,155,0.15)]
  `;

  return (
    <main className="min-h-[calc(100vh-68px)] flex items-center justify-center px-6 py-12 relative overflow-hidden animate-page-in">

      {/* ── Animated blobs ── */}
      <div className="absolute top-[-60px]    left-[-80px]   w-[420px] h-[420px] rounded-full blur-[90px] opacity-25 bg-az-pink   animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-40px]  w-[320px] h-[320px] rounded-full blur-[90px] opacity-20 bg-az-yellow animate-blob-2 pointer-events-none" />
      <div className="absolute top-[55%]      left-[55%]     w-[280px] h-[280px] rounded-full blur-[90px] opacity-20 bg-az-blue   animate-blob-3 pointer-events-none" />

      {/* ── Glass card ── */}
      <div className="login-card relative z-10 w-full max-w-[500px] rounded-[1.75rem] p-10 glass shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{
            background:  'linear-gradient(135deg, #ff359b, #00d2ff)',
            boxShadow:   '0 0 30px rgba(255,53,155,0.4)',
          }}
        >
          ✉️
        </div>

        <h1 className="font-grotesk text-[1.85rem] font-extrabold text-slate-100 text-center mb-1">
          Get in Touch
        </h1>
        <p className="text-xs text-slate-500 text-center mb-8">
          Have a question or want to work together?
        </p>

        {/* Status banner */}
        {status && (
          <p className="text-center text-az-yellow text-sm mb-5 py-2 px-4 rounded-xl bg-white/5 border border-white/10">
            {status}
          </p>
        )}

        {/* ── Form ── */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-[0.78rem] font-semibold text-slate-400 tracking-widest uppercase">
              Full Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className={inputCls}
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-phone" className="text-[0.78rem] font-semibold text-slate-400 tracking-widest uppercase">
              Phone Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              className={inputCls}
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Describe */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-desc" className="text-[0.78rem] font-semibold text-slate-400 tracking-widest uppercase">
              How can I help?
            </label>
            <textarea
              id="contact-desc"
              name="description"
              className={`${inputCls} resize-none h-32`}
              placeholder="Tell me about your project..."
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" className="w-full mt-2">
            Send Message
          </Button>

        </form>

      </div>
    </main>
  );
};

export default Contact;
