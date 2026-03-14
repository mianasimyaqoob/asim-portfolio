import { Link } from 'react-router';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from '../utils/animations';
import { contactInfo, socialLinks } from '../data/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Admin', to: '/admin' },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div
            variants={staggerItem}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                AY
              </div>
              <div>
                <h3 className="font-bold text-foreground">Asim Yaqoob</h3>
                <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building scalable web and mobile applications with modern technologies.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            variants={staggerItem}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground text-sm">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerItem}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground text-sm">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${social.color} transition-all hover:scale-110`}
                    style={{
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Available for freelance opportunities
            </p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Asim Yaqoob. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}