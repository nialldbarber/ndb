import {useEffect, useRef, RefObject} from 'react';

export interface Dimensions {
  width: number | undefined;
  height: number | undefined;
}

export interface Ref {
  current: HTMLElement;
}

export default function useDimensions(ref: RefObject<HTMLElement>): Dimensions {
  const dimensions = useRef<Dimensions>({width: 0, height: 0});

  useEffect(() => {
    dimensions.current.width = ref?.current?.offsetWidth;
    dimensions.current.height = ref?.current?.offsetHeight;
  }, [ref]);

  return dimensions.current;
}
