import React, {FC, useState} from 'react';
import styled from 'styled-components';
import Tooltip from 'components/skills/tooltip';

interface SkillProps {
  icon: string;
  name: string;
  link: string;
}

const ImgWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: 0;
  padding: 0;
  cursor: pointer;

  img {
    max-height: 200px;
    padding: 2rem;
  }
`;

const TooltipWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.2s ease;

  &.active {
    opacity: 1;
    bottom: 65%;
  }
`;

const Skill: FC<SkillProps> = ({icon, name, link}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <ImgWrap
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
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
