import React from 'react';
import {TooltipWrap, DownArrow} from 'styles/components/skills/tooltip';

type TooltipProps = {text: string};

function Tooltip({text}: TooltipProps) {
  return (
    <TooltipWrap>
      <span>{text}</span>
      <DownArrow />
    </TooltipWrap>
  );
}

export default Tooltip;
