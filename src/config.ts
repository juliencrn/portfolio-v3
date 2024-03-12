export const siteMetadata = {
  siteUrl: 'https://juliencaron.com',
  author: 'juliencrn', // Github username
  mail: 'juliencaron@pm.me',
  title: 'Passionate developer',
  description:
    'Hi there 👋 My name is Julien and I love build some stuff living in the web, or outside. Welcome to my garden!',
};

export const links = {
  github: 'https://github.com/juliencrn',
  linkedin: 'https://www.linkedin.com/in/caronjulien/',
};

// Note: Internal link with Next/Link
export const navMenu = [
  { label: 'me', path: '/me' },
  { label: 'projects', path: '/projects' },
  { label: 'donate', path: '/donate' },
  { label: 'contact', path: '/contact' },
];

// Note: External links only
export const socialMenu = [
  { label: 'github', link: links.github },
  { label: 'linkedin', link: links.linkedin },
];

export const funding = {
  github: 'https://github.com/sponsors/juliencrn',
  paypal: 'https://www.paypal.com/paypalme/juliencrn',
  stripe: 'https://buy.stripe.com/fZefZY8Bv32cg9O3cc',
  btc: 'bc1qwys40tnd0lxf9lr9l0t6xc63dpxyucj4x4nay0',
  eth: '0x36a85155a8300754C56395D5af24553FB18915D6',
};
