import React, {FC} from 'react';
import {
  DotWrapper,
  PhysicalDot,
  DotInner,
  DotRipples,
} from 'styles/components/dots';

interface DotsProps {
  start?: any;
  middle?: any;
  end?: any;
  styleType?: string;
}

interface AnimatedDotsProps extends DotsProps {
  position: string;
  variant: any;
}

const AnimatedDots: FC<AnimatedDotsProps> = ({
  position,
  variant,
  styleType,
}) => {
  return (
    <PhysicalDot
      className={`${position} ${styleType || ''}`}
      variants={variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <DotInner>
        <DotRipples className={position} />
        <DotRipples className={position} />
        <DotRipples className={position} />
        <DotRipples className={position} />
      </DotInner>
    </PhysicalDot>
  );
};

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
      <AnimatedDots position="start" variant={start} styleType={styleType} />
      <AnimatedDots position="middle" variant={middle} styleType={styleType} />
      <AnimatedDots position="end" variant={end} styleType={styleType} />
    </DotWrapper>
  );
};

export default Dots;
