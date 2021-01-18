export let height: number;
export let width: number;

if (typeof window !== 'undefined') {
  height = window.innerHeight;
  width = window.innerWidth;
}

export const duration: number = 0.2;

export const transition = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  exit: {
    opacity: 0,
  },
};

export const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {duration: duration},
  },
};
