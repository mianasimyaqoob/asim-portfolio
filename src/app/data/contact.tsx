import { Github, Linkedin, Mail } from 'lucide-react';

// Custom SVG Icons
export const FiverrIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M15.5 6.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4.5 0h-1v5h1v2h-1v5h-1v-5h-1v-2h1v-5h-1v-2h2v2zm3.5 2h1v10h-1v-10zm-6.5 0h1v10h-1v-10zm13 7.5c0 .83-.67 1.5-1.5 1.5h-13c-.83 0-1.5-.67-1.5-1.5v-7c0-.83.67-1.5 1.5-1.5h13c.83 0 1.5.67 1.5 1.5v7z" />
  </svg>
);

// Contact Information
export const contactInfo = {
  email: 'asimyaqoobmian@gmail.com',
  phone: '+92-321-4261477',
  location: 'Pakistan',
  name: 'Asim Yaqoob',
  title: 'Full-Stack Developer',
  initials: 'AY',
};

// Social Links
export const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/mianasimyaqoob',
    color: 'hover:text-foreground',
    handle: '@mianasimyaqoob',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/mian-asim-yaqoob-46580b334/',
    color: 'hover:text-[#0077B5]',
    handle: 'mian-asim-yaqoob',
  },
  {
    name: 'Fiverr',
    icon: FiverrIcon,
    url: 'https://www.fiverr.com/s/7Y9Y8AW',
    color: 'hover:text-[#1DBF73]',
    handle: 'Fiverr Profile',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:asimyaqoobmian@gmail.com',
    color: 'hover:text-[#8B5CF6]',
    handle: 'asimyaqoobmian@gmail.com',
  },
];
