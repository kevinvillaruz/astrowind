import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Solutions',
      links: [
        {
          text: 'Web Development',
          href: getPermalink('/services/web-development'),
        },
        {
          text: 'Mobile Apps',
          href: getPermalink('/services/mobile-app-development'),
        },
        {
          text: 'Web Applications',
          href: getPermalink('/services/web-apps'),
        },
        {
          text: 'e-Commerce',
          href: getPermalink('/services/e-commerce-website-development'),
        },
        {
          text: 'Hosting',
          href: getPermalink('/services/hosting'),
        },
        {
          text: 'Payment Gateways',
          href: getPermalink('/services/payment-gateways'),
        },
        {
          text: 'SEO',
          href: getPermalink('/services/SEO'),
        },
        {
          text: 'Themes & Templates',
          href: getPermalink('/services/themes'),
        },
      ],
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'Websites',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Web & Mobile Apps',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Case Studies',
          href: getPermalink('/landing/click-through'),
        },
      ],
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ],
  actions: [{ text: 'Contact', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Web Development', href: 'services/web-development' },
        { text: 'Mobile Apps', href: 'services/mobile-app-development' },
        { text: 'Web Applications', href: 'services/web-apps' },
        { text: 'e-Commerce', href: 'services/e-commerce-website-development' },
        { text: 'Hosting', href: 'services/hosting' },
        { text: 'Payment Gateways', href: 'services/payment-gateways' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Case Studies', href: '/case-studies' },
        { text: 'Themes & Templates', href: 'services/themes' },
        { text: 'Projects', href: '/projects' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Submit a ticket', href: '#' },
        { text: 'Contact us', href: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#/about' },
        { text: 'Careers', href: '/careers' },
        { text: 'Social Impact', href: '/social-impact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/brandify.ae/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/brandify.ae' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/brandifymedia' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/brandify_ae' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/brandifymedia' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    © 2024 Brandify Media
  `,
};
