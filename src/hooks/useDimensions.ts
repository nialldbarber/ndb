import {useEffect, useRef} from 'react';

interface Dimensions {
  width: number | null;
  height: number | null;
}

export interface Ref {
  current: HTMLElement;
}

// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=/src/Example.tsx&file=/src/use-dimensions.ts
const useDimensions = (ref: Ref): Dimensions => {
  const dimensions = useRef<Dimensions>({width: 0, height: 0});

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

export default useDimensions;
