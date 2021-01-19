import React, {FC} from 'react';
import styled from 'styled-components';

type TooltipProps = {text: string};

const TooltipWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.darkerBlack};
  text-align: center;

  img {
    max-width: 90%;
    max-height: 200px;
    padding: 2rem;
  }

  span {
    white-space: nowrap;
  }
`;

const DownArrow = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 50px;
  height: 25px;
  transform: translateX(-50%);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 10px;
    height: 10px;
    background: ${({theme}) => theme.colors.darkerBlack};
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }
`;

const Tooltip: FC<TooltipProps> = ({text}) => {
  return (
    <TooltipWrap>
      <span>{text}</span>
      <DownArrow />
    </TooltipWrap>
  );
};

export default Tooltip;
