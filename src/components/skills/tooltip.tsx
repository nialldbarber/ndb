import React, {FC} from 'react';
import {TooltipWrap, DownArrow} from 'styles/components/skills/tooltip';

type TooltipProps = {text: string};

const Tooltip: FC<TooltipProps> = ({text}) => {
  return (
    <TooltipWrap>
      <span>{text}</span>
      <DownArrow />
    </TooltipWrap>
  );
};

export default Tooltip;
