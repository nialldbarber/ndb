import {TooltipWrap, DownArrow} from 'styles/components/skills/tooltip';

type TooltipProps = {text: string};

export default function Tooltip({text}: TooltipProps) {
  return (
    <TooltipWrap>
      <span>{text}</span>
      <DownArrow />
    </TooltipWrap>
  );
}
