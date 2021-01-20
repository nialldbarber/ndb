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

export const navItems: Items[] = [
  {id: 1, url: '/', name: 'home'},
  {id: 2, url: '/about', name: 'about'},
  {id: 3, url: '/all-posts', name: 'blog'},
  {id: 4, url: '/contact', name: 'contact'},
];

export const socialLinks: Social[] = [
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
  link: string;
  width?: number;
}

export const frontEnd: Skills[] = [
  {
    id: 1,
    icon: '/images/html.svg',
    name: 'HTML',
    link: 'https://html.spec.whatwg.org/multipage/',
  },
  {
    id: 2,
    icon: '/images/css.svg',
    name: 'CSS',
    link: 'https://www.w3.org/Style/CSS/',
  },
  {
    id: 3,
    icon: '/images/sass.svg',
    name: 'Sass',
    link: 'https://sass-lang.com/',
  },
  {
    id: 4,
    icon: '/images/js.svg',
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 5,
    icon: '/images/ts.svg',
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    width: 85,
  },
  {
    id: 6,
    icon: '/images/react.svg',
    name: 'React',
    link: 'https://reactjs.org/',
  },
  {id: 7, icon: '/images/vue.svg', name: 'Vue', link: 'https://vuejs.org/'},
  {
    id: 8,
    icon: '/images/svelte.svg',
    name: 'Svelte',
    link: 'https://svelte.dev/',
  },
  {
    id: 9,
    icon: '/images/redux.svg',
    name: 'Redux',
    link: 'https://redux.js.org/',
  },
  {
    id: 10,
    icon: '/images/framer-motion.svg',
    name: 'Framer Motion',
    link: 'https://www.framer.com/motion/',
    width: 75,
  },
  {id: 11, icon: '/images/git.svg', name: 'Git', link: 'https://git-scm.com/'},
  {
    id: 12,
    icon: '/images/webpack.svg',
    name: 'Webpack',
    link: 'https://webpack.js.org/',
  },
  {
    id: 13,
    icon: '/images/gatsbyjs.svg',
    name: 'Gatsby',
    link: 'https://www.gatsbyjs.com/',
    width: 75,
  },
  {
    id: 14,
    icon: '/images/nextjs.svg',
    name: 'Next',
    link: 'https://nextjs.org/',
    width: 70,
  },
  {
    id: 15,
    icon: '/images/apollo-client.svg',
    name: 'Apollo Client',
    link: 'https://www.apollographql.com/',
    width: 75,
  },
  {
    id: 6,
    icon: '/images/react.svg',
    name: 'React Native',
    link: 'https://reactnative.dev/',
  },
];

export const backEnd: Skills[] = [
  {
    id: 1,
    icon: '/images/node.svg',
    name: 'Node',
    link: 'https://nodejs.org/en/',
  },
  {
    id: 2,
    icon: '/images/graphql.svg',
    name: 'GraphQL',
    link: 'https://graphql.org/',
    width: 85,
  },
  {
    id: 3,
    icon: '/images/apollo.svg',
    name: 'Apollo Server',
    link: 'https://www.apollographql.com/',
    width: 75,
  },
  {
    id: 4,
    icon: '/images/express.svg',
    name: 'Express',
    link: 'https://expressjs.com/',
  },
  {
    id: 5,
    icon: '/images/mongodb.svg',
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
  },
  {
    id: 6,
    icon: '/images/firebase.svg',
    name: 'Firebase',
    link: 'https://firebase.google.com/',
  },
  {
    id: 7,
    icon: '/images/postgres.svg',
    name: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
    width: 70,
  },
  {
    id: 8,
    icon: '/images/deno.svg',
    name: 'Deno',
    link: 'https://deno.land/',
    width: 85,
  },
];

export const design: Skills[] = [
  {
    id: 1,
    icon: '/images/illustrator.svg',
    name: 'Illustrator',
    link: 'https://www.adobe.com/uk/products/illustrator.html',
  },
  {
    id: 2,
    icon: '/images/photoshop.svg',
    name: 'Photoshop',
    link: 'https://www.adobe.com/uk/products/photoshop.html',
  },
  {
    id: 3,
    icon: '/images/figma.svg',
    name: 'Figma',
    link: 'https://www.figma.com/files/recent',
  },
  {
    id: 4,
    icon: '/images/zeplin.svg',
    name: 'Zeplin',
    link: 'https://zeplin.io/',
  },
];
