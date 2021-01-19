import React, {FC} from 'react';
import {Dot, DotWrapper} from 'styles/pages/home';

interface DotsProps {
  start: any;
  middle: any;
  end: any;
  styleType?: string;
}

const Dots: FC<DotsProps> = ({start, middle, end, styleType}) => {
  return (
    <DotWrapper>
      <Dot
        className={`start ${styleType || ''}`}
        variants={start}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      <Dot
        className={`middle ${styleType || ''}`}
        variants={middle}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      <Dot
        className={`end ${styleType || ''}`}
        variants={end}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
    </DotWrapper>
  );
};

export default Dots;
