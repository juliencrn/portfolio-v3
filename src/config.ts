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
  telegram: 'https://t.me/juliencrn',
};

// Note: Internal link with Next/Link
export const navMenu = [
  { label: 'me', path: '/me' },
  { label: 'projects', path: '/projects' },
  { label: 'contact', path: '/contact' },
];

// Note: External links only
export const socialMenu = [
  { label: 'github', link: links.github },
  { label: 'telegram', link: links.telegram },
  { label: 'linkedin', link: links.linkedin },
];
