import React, {FC} from 'react';
import styled from 'styled-components';

interface SkillProps {
  icon: string;
  name: string;
}

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  border: 1px solid ${({theme}) => theme?.colors?.fadedWhite};
  margin: 0;
  padding: 0;

  img {
    max-width: 90%;
    max-height: 200px;
    padding: 2rem;
  }
`;

const Skill: FC<SkillProps> = ({icon, name}) => {
  return (
    <ImgWrap>
      <img src={icon} alt={name} />
    </ImgWrap>
  );
};

export default Skill;
