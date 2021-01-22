import React, {FC, useState} from 'react';
import Tooltip from 'components/skills/tooltip';
import {ImgWrap, TooltipWrapper} from 'styles/components/skills/skills';

interface SkillProps {
  icon: string;
  name: string;
  link: string;
  width?: number;
}

const Skill: FC<SkillProps> = ({icon, name, link, width = 100}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <ImgWrap
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      width={width}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <img src={icon} alt={name} />
      </a>
      <TooltipWrapper className={showTooltip ? 'active' : ''}>
        <Tooltip text={name} />
      </TooltipWrapper>
    </ImgWrap>
  );
};

export default Skill;
