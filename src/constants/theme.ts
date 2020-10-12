export type Items = {
  id?: number;
  url?: string;
  name?: string;
};

export type Social = {
  id: number;
  link: string;
  src: string;
  alt: string;
};

export enum MENU {
  OPEN = 'open',
  CLOSED = 'closed',
}

export const navItems: Array<Items> = [
  {id: 1, url: '/', name: 'home'},
  {id: 2, url: '/about', name: 'about'},
  {id: 3, url: '/blog', name: 'blog'},
  {id: 4, url: '/contact', name: 'contact'},
];

export const socialLinks: Array<Social> = [
  {
    id: 1,
    link: 'https://github.com/nialldbarber',
    src: '/images/github.svg',
    alt: 'Github',
  },
  {
    id: 2,
    link: 'https://www.instagram.com/nialldbarber/',
    src: '/images/instagram.svg',
    alt: 'Instagram',
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/niall-barber/',
    src: '/images/linkedin.svg',
    alt: 'LinkedIn',
  },
];
