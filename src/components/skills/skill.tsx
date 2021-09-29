import {useState} from 'react';
import useMobileDetect from 'hooks/useMobileDetect';
import Tooltip from 'components/skills/tooltip';
import {ImgWrap, TooltipWrapper} from 'styles/components/skills/skills';

interface SkillProps {
  icon: string;
  name: string;
  link: string;
  width?: number;
}

export default function Skill({icon, name, link, width = 100}: SkillProps) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const detect = useMobileDetect();

  return (
    <ImgWrap
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      width={width}
    >
      {detect.isMobile() ? (
        <img src={icon} alt={name} />
      ) : (
        <a href={link} target="_blank" rel="noreferrer">
          <img src={icon} alt={name} />
        </a>
      )}
      <TooltipWrapper className={showTooltip ? 'active' : ''}>
        <Tooltip text={name} />
      </TooltipWrapper>
    </ImgWrap>
  );
}
