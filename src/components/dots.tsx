import React, {FC} from 'react';
import {Dot, DotWrapper} from 'styles/pages/home';

interface DotsProps {
  start: any;
  middle: any;
  end: any;
}

const Dots: FC<DotsProps> = ({start, middle, end}) => {
  return (
    <DotWrapper>
      <Dot
        className="start"
        variants={start}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      <Dot
        className="middle"
        variants={middle}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      <Dot
        className="end"
        variants={end}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
    </DotWrapper>
  );
};

export default Dots;
