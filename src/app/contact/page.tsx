'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CONTACT_INFO } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to your API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '', interest: 'general' });
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-24 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="CONTACT US" subtitle="Get In Touch" />
            <FadeIn className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-foreground-secondary">
                Ready to start your fitness journey? Reach out to us today!
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 mt-16">
              {/* Contact Form */}
              <FadeIn direction="left">
                <div className="glass-effect p-8 rounded-2xl">
                  <h3 className="text-2xl font-bebas font-bold mb-6 gradient-text">SEND US A MESSAGE</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-background-tertiary border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-background-tertiary border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-background-tertiary border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Interested In</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full px-4 py-3 bg-background-tertiary border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="membership">Membership</option>
                        <option value="trial">Free Trial</option>
                        <option value="personal">Personal Training</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-background-tertiary border border-white/10 rounded-lg focus:outline-none focus:border-accent resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-accent to-accent-secondary rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
                    >
                      <Send className="w-5 h-5" />
                      {submitted ? 'Message Sent!' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </FadeIn>

              {/* Contact Info */}
              <FadeIn direction="right">
                <div className="space-y-8">
                  <div className="glass-effect p-8 rounded-2xl">
                    <h3 className="text-2xl font-bebas font-bold mb-6 gradient-text">CONTACT INFORMATION</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Address</h4>
                          <p className="text-foreground-secondary text-sm">{CONTACT_INFO.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Phone</h4>
                          <a href={`tel:${CONTACT_INFO.phone}`} className="text-foreground-secondary text-sm hover:text-accent">
                            {CONTACT_INFO.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Email</h4>
                          <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground-secondary text-sm hover:text-accent">
                            {CONTACT_INFO.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Working Hours</h4>
                          <div className="text-foreground-secondary text-sm space-y-1">
                            <p>Mon - Fri: {CONTACT_INFO.workingHours.weekdays}</p>
                            <p>Saturday: {CONTACT_INFO.workingHours.saturday}</p>
                            <p>Sunday: {CONTACT_INFO.workingHours.sunday}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=Hi!%20I'm%20interested%20in%20joining%20APEX%20Fitness`}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 rounded-lg font-bold text-lg hover:bg-green-600 transition-all"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Chat on WhatsApp
                  </a>

                  {/* Map */}
                  <div className="rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.123456789!2d86.20!3d22.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ4JzAwLjAiTiA4NsKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
