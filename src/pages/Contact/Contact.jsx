import React, { useState, memo } from 'react';
import Button from '../../components/Button/Button';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import contactAvatar from '../../Assets/contact_avatar.png';

const Contact = memo(() => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('🎉 Message sent successfully!');
    setTimeout(() => setStatus(''), 3000);
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  const inputCls = `
    w-full px-4 py-3 rounded-xl
    bg-white/5 border border-white/10
    text-slate-100 text-[0.95rem] font-inter
    placeholder:text-slate-600 outline-none
    transition-all duration-300
    focus:border-[#FF7A00] focus:bg-[rgba(255,122,0,0.06)]
    focus:shadow-[0_0_0_3px_rgba(255,122,0,0.15)]
  `;

  return (
    <section className="py-24 px-6 bg-az-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Avatar */}
          <ScrollReveal animation="scale-left" className="relative flex justify-center items-center">
            <div className="absolute w-[80%] h-[80%] rounded-full bg-[#FF7A00]/10 blur-[80px] pointer-events-none" />
            <div className="relative z-10 animate-float">
              <img
                src={contactAvatar}
                alt="Contact Avatar"
                className="w-full max-w-[420px] h-auto drop-shadow-[0_20px_50px_rgba(255,122,0,0.25)]"
              />
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal animation="scale-right" className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white font-grotesk mb-3">
                Get In Touch
              </h2>
              <p className="text-slate-500 text-lg">Let's discuss your project</p>
            </div>

            {status && (
              <p className="text-center text-green-400 text-sm py-2 px-4 rounded-xl bg-green-400/10 border border-green-400/20">
                {status}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* First + Last Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  type="text"
                  className={inputCls}
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  name="lastName"
                  type="text"
                  className={inputCls}
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <input
                name="email"
                type="email"
                className={inputCls}
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />

              {/* Phone */}
              <input
                name="phone"
                type="tel"
                className={inputCls}
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />

              {/* Message */}
              <textarea
                name="message"
                className={`${inputCls} resize-none h-32`}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#FF7A00] hover:bg-[#E66D00] border-none text-white shadow-[0_4px_14px_0_rgba(255,122,0,0.39)] mt-2"
              >
                Send Message
              </Button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
});


export default Contact;
