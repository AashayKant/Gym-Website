import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';

const SocialIcons = {
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Youtube: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  ),
  Twitter: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
};

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/membership', label: 'Membership' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
];

const programs = [
  'Weight Loss',
  'Muscle Building',
  'Personal Training',
  'CrossFit',
  'Yoga',
  'Cardio Fitness'
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-elevated">
      <div className="site-container py-20">
        <div className="mb-14 grid gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-7 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-foreground-muted">Weekly fitness updates</p>
            <h3 className="text-balance text-3xl font-bold text-white md:text-4xl">
              Join the APEX community and get training + nutrition insights.
            </h3>
            <p className="mt-4 max-w-xl text-foreground-secondary">
              Designed for conversion and retention: exclusive class drops, offer alerts, and practical guidance from our coaches.
            </p>
          </div>
          <form className="flex flex-col gap-3 self-end sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-white/12 bg-background px-5 text-sm text-white outline-none transition focus:border-accent"
            />
            <button type="submit" className="btn-primary h-12 px-6 text-sm">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-jakarta font-bold text-white">
              APEX<span className="text-accent">.</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
              Premium training environment built to help members move better, look stronger, and stay consistent.
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full border border-white/10 bg-white/[0.03] p-2.5 transition hover:border-accent hover:text-accent"
                aria-label="Instagram"
              >
                <SocialIcons.Instagram />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full border border-white/10 bg-white/[0.03] p-2.5 transition hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                <SocialIcons.Facebook />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full border border-white/10 bg-white/[0.03] p-2.5 transition hover:border-accent hover:text-accent"
                aria-label="YouTube"
              >
                <SocialIcons.Youtube />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full border border-white/10 bg-white/[0.03] p-2.5 transition hover:border-accent hover:text-accent"
                aria-label="Twitter"
              >
                <SocialIcons.Twitter />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-secondary transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Programs</h4>
            <ul className="space-y-3 text-sm">
              {programs.map((program) => (
                <li key={program}>
                  <Link
                    href="/programs"
                    className="text-foreground-secondary transition hover:text-accent"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <p className="text-foreground-secondary">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-foreground-secondary transition hover:text-accent"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-foreground-secondary transition hover:text-accent"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-foreground-secondary">
            © {new Date().getFullYear()} APEX Fitness Jamshedpur. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-foreground-muted">
            Premium fitness experiences designed for transformation.
          </p>
        </div>
      </div>
    </footer>
  );
}
