import React, {FC} from 'react';
import {
  DotWrapper,
  PhysicalDot,
  DotInner,
  DotRipples,
} from 'styles/components/dots';

interface DotsProps {
  start: any;
  middle: any;
  end: any;
  styleType?: string;
}

const Dots: FC<DotsProps> = ({start, middle, end, styleType}) => {
  return styleType === 'home' ? (
    <DotWrapper>
      <PhysicalDot
        className={`start ${styleType || ''}`}
        variants={start}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      <PhysicalDot
        className={`middle ${styleType || ''}`}
        variants={middle}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      <PhysicalDot
        className={`end ${styleType || ''}`}
        variants={end}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
    </DotWrapper>
  ) : (
    <DotWrapper>
      <PhysicalDot
        className={`start ${styleType || ''}`}
        variants={start}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <DotInner>
          <DotRipples className="start" />
          <DotRipples className="start" />
          <DotRipples className="start" />
          <DotRipples className="start" />
        </DotInner>
      </PhysicalDot>
      <PhysicalDot
        className={`middle ${styleType || ''}`}
        variants={middle}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <DotInner>
          <DotRipples className="middle" />
          <DotRipples className="middle" />
          <DotRipples className="middle" />
          <DotRipples className="middle" />
        </DotInner>
      </PhysicalDot>
      <PhysicalDot
        className={`end ${styleType || ''}`}
        variants={end}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <DotInner>
          <DotRipples className="end" />
          <DotRipples className="end" />
          <DotRipples className="end" />
          <DotRipples className="end" />
        </DotInner>
      </PhysicalDot>
    </DotWrapper>
  );
};

export default Dots;
