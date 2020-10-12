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

export interface Skills {
  id: number;
  icon: string;
  name: string;
}

const frontEnd: Array<Skills> = [
  {id: 1, icon: '/images/html.svg', name: 'HTML'},
  {id: 2, icon: '/images/css.svg', name: 'CSS'},
  {id: 3, icon: '/images/sass.svg', name: 'Sass'},
  {id: 4, icon: '/images/js.svg', name: 'JavaScript'},
  {id: 5, icon: '/images/ts.svg', name: 'TypeScript'},
  {id: 6, icon: '/images/react.svg', name: 'React'},
  {id: 7, icon: '/images/vue.svg', name: 'Vue'},
  {id: 8, icon: '/images/svelte.svg', name: 'Svelte'},
  {id: 9, icon: '/images/redux.svg', name: 'Redux'},
  {id: 10, icon: '/images/framer-motion.svg', name: 'Framer Motion'},
  {id: 11, icon: '/images/git.svg', name: 'Git'},
  {id: 12, icon: '/images/webpack.svg', name: 'Webpack'},
];

const backEnd: Array<Skills> = [
  {id: 1, icon: '/images/node.svg', name: 'Node'},
  {id: 2, icon: '/images/graphql.svg', name: 'GraphQL'},
  {id: 3, icon: '/images/apollo.svg', name: 'Apollo Server'},
  {id: 4, icon: '/images/express.svg', name: 'Express'},
  {id: 5, icon: '/images/mongodb.svg', name: 'Mongo'},
  {id: 6, icon: '/images/firebase.svg', name: 'Firebase'},
];

const design: Array<Skills> = [
  {id: 1, icon: '/images/illustrator.svg', name: 'Illustrator'},
  {id: 2, icon: '/images/photoshop.svg', name: 'Photoshop'},
  {id: 3, icon: '/images/figma.svg', name: 'Figma'},
  {id: 4, icon: '/images/zeplin.svg', name: 'Zeplin'},
];

export {frontEnd, backEnd, design};
