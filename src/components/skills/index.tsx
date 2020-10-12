import React, {FC} from 'react';
import styled from 'styled-components';
import Skill from 'components/skills/skill';
import {frontEnd, backEnd, design} from 'constants/theme';

interface SkillsProps {}

const Wrapper = styled.div`
  position: relative;
  padding: 3rem 0;
  max-width: 90%;
  margin: 0 auto;
  background: ${({theme}) => theme?.colors?.white};

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 120px;
  }

  &:before {
    top: -7.5rem;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:after {
    bottom: -7.5rem;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  h2 {
    font-size: 3rem;
    padding-left: 3.3rem;

    &.front {
      color: ${({theme}) => theme?.colors?.green};
    }
    &.back {
      color: ${({theme}) => theme?.colors?.pink};
    }
    &.design {
      color: ${({theme}) => theme?.colors?.orange};
    }
  }
`;

const Grid = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: ${({theme}) => theme?.colors?.white};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 2px solid ${({theme}) => theme?.colors?.white};
  }
`;

const Skills: FC<SkillsProps> = () => {
  return (
    <div>
      <Wrapper>
        <h2 className="front">front end</h2>
        <Grid>
          {frontEnd.map(({id, icon, name}) => (
            <Skill key={id} icon={icon} name={name} />
          ))}
        </Grid>
      </Wrapper>
      <Wrapper>
        <h2 className="back">back end</h2>
        <Grid>
          {backEnd.map(({id, icon, name}) => (
            <Skill key={id} icon={icon} name={name} />
          ))}
        </Grid>
      </Wrapper>
      <Wrapper>
        <h2 className="design">design</h2>
        <Grid>
          {design.map(({id, icon, name}) => (
            <Skill key={id} icon={icon} name={name} />
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
};

export default Skills;
