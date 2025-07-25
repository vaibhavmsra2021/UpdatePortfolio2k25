import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
  // {
  //   label: 'Resume',
  //   pathname: '/resume',
  // },
];

export const socialLinks = [
  {
    label: 'linkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedIn',
  },
  // {
  //   label: 'Figma',
  //   url: `https://www.figma.com/${config.figma}`,
  //   icon: 'figma',
  // },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'Twitter',
    url: `https://twitter.com/${config.twitter}`,
    icon: 'twitter',
  }
];
