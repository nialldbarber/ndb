export type Items = {
  id?: number;
  url?: string;
  name?: string;
  initial?: {x: number};
  animate?: {x: number};
  transition?: {delay: number};
  exit?: {x: number};
  className?: string;
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

export enum SITE {
  TITLE = 'Niall Barber',
  SUB_TITLE = 'front end developer',
}

export const navItems: Items[] = [
  {
    id: 1,
    url: '/',
    name: 'home',
  },
  {
    id: 2,
    url: '/about',
    name: 'about',
    initial: {x: -200},
    animate: {x: 0},
    transition: {delay: 0.2},
    exit: {x: -200},
    className: 'bottom-left',
  },
  // {
  //   id: 3,
  //   url: '/all-posts',
  //   name: 'blog',
  //   initial: {x: 200},
  //   animate: {x: 0},
  //   transition: {delay: 0.2},
  //   exit: {x: 200},
  //   className: 'top-right',
  // },
  {
    id: 4,
    url: '/contact',
    name: 'contact',
    initial: {x: 200},
    animate: {x: 0},
    transition: {delay: 0.2},
    exit: {x: 200},
    className: 'bottom-right',
  },
];

export const socialLinks: Social[] = [
  {
    id: 5,
    link: 'https://github.com/nialldbarber',
    src: '/images/github.svg',
    alt: 'Github',
  },
  {
    id: 6,
    link: 'https://www.instagram.com/nialldbarber/',
    src: '/images/instagram.svg',
    alt: 'Instagram',
  },
  {
    id: 7,
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
    id: 8,
    icon: '/images/html.svg',
    name: 'HTML',
    link: 'https://html.spec.whatwg.org/multipage/',
  },
  {
    id: 9,
    icon: '/images/css.svg',
    name: 'CSS',
    link: 'https://www.w3.org/Style/CSS/',
  },
  {
    id: 10,
    icon: '/images/sass.svg',
    name: 'Sass',
    link: 'https://sass-lang.com/',
  },
  {
    id: 11,
    icon: '/images/js.svg',
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 12,
    icon: '/images/ts.svg',
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    width: 85,
  },
  {
    id: 13,
    icon: '/images/react.svg',
    name: 'React',
    link: 'https://reactjs.org/',
  },
  {id: 14, icon: '/images/vue.svg', name: 'Vue', link: 'https://vuejs.org/'},
  {
    id: 15,
    icon: '/images/svelte.svg',
    name: 'Svelte',
    link: 'https://svelte.dev/',
  },
  {
    id: 16,
    icon: '/images/redux.svg',
    name: 'Redux',
    link: 'https://redux.js.org/',
  },
  {
    id: 17,
    icon: '/images/framer-motion.svg',
    name: 'Framer Motion',
    link: 'https://www.framer.com/motion/',
    width: 75,
  },
  {id: 18, icon: '/images/git.svg', name: 'Git', link: 'https://git-scm.com/'},
  {
    id: 19,
    icon: '/images/webpack.svg',
    name: 'Webpack',
    link: 'https://webpack.js.org/',
  },
  {
    id: 20,
    icon: '/images/gatsbyjs.svg',
    name: 'Gatsby',
    link: 'https://www.gatsbyjs.com/',
    width: 75,
  },
  {
    id: 21,
    icon: '/images/nextjs.svg',
    name: 'Next',
    link: 'https://nextjs.org/',
    width: 70,
  },
  {
    id: 22,
    icon: '/images/apollo-client.svg',
    name: 'Apollo Client',
    link: 'https://www.apollographql.com/',
    width: 75,
  },
  {
    id: 23,
    icon: '/images/react.svg',
    name: 'React Native',
    link: 'https://reactnative.dev/',
  },
];

export const backEnd: Skills[] = [
  {
    id: 24,
    icon: '/images/node.svg',
    name: 'Node',
    link: 'https://nodejs.org/en/',
  },
  {
    id: 25,
    icon: '/images/graphql.svg',
    name: 'GraphQL',
    link: 'https://graphql.org/',
    width: 85,
  },
  {
    id: 26,
    icon: '/images/apollo.svg',
    name: 'Apollo Server',
    link: 'https://www.apollographql.com/',
    width: 75,
  },
  {
    id: 27,
    icon: '/images/express.svg',
    name: 'Express',
    link: 'https://expressjs.com/',
  },
  {
    id: 28,
    icon: '/images/mongodb.svg',
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
  },
  {
    id: 29,
    icon: '/images/firebase.svg',
    name: 'Firebase',
    link: 'https://firebase.google.com/',
  },
  {
    id: 30,
    icon: '/images/postgres.svg',
    name: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
    width: 70,
  },
  {
    id: 31,
    icon: '/images/deno.svg',
    name: 'Deno',
    link: 'https://deno.land/',
    width: 85,
  },
];

export const design: Skills[] = [
  {
    id: 32,
    icon: '/images/illustrator.svg',
    name: 'Illustrator',
    link: 'https://www.adobe.com/uk/products/illustrator.html',
  },
  {
    id: 33,
    icon: '/images/photoshop.svg',
    name: 'Photoshop',
    link: 'https://www.adobe.com/uk/products/photoshop.html',
  },
  {
    id: 34,
    icon: '/images/figma.svg',
    name: 'Figma',
    link: 'https://www.figma.com/files/recent',
  },
  {
    id: 35,
    icon: '/images/zeplin.svg',
    name: 'Zeplin',
    link: 'https://zeplin.io/',
  },
];

export const FORM_ENDPOINT: string = 'https://formspree.io/f/myyboyrl';
