// eslint-disable-next-line import/prefer-default-export
export const siteMetadata = {
//   title: 'Passionate developer',
  description: `I'm a fullstack developer and crypto-enthusiast.\n
here I post some update about what I'm hacking on.\n
welcome to my garden`,
  //   siteUrl: 'https://juliencaron.com',
  //   author: 'juliencrn', // Github username
  mail: 'juliencaron@pm.me',

};

export const socialLink = {
  github: 'https://github.com/juliencrn',
  linkedin: 'https://www.linkedin.com/in/caronjulien/',
  telegram: 'https://www.linkedin.com/in/caronjulien/',
};

// Note: Internal link with Next/Link
export const navMenu = [
  { label: 'me', path: '/' },
  { label: 'projects', path: '/projects' },
  { label: 'contact', path: '/contact' },
];

// Note: External links only
export const socialMenu = [
  { label: 'github', link: socialLink.github },
  { label: 'telegram', link: socialLink.telegram },
  { label: 'linkedin', link: socialLink.linkedin },
];
