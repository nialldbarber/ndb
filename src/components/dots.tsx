import {Variants} from 'framer-motion';
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
  variant: Variants;
}

function AnimatedDots({position, variant, styleType}: AnimatedDotsProps) {
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
}

export default function Dots({start, middle, end, styleType}: DotsProps) {
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
}
