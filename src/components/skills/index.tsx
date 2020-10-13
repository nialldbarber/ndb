import React, {FC} from 'react';
import styled from 'styled-components';
import Skill from 'components/skills/skill';
import {frontEnd, backEnd, design} from 'constants/theme';

interface SkillsProps {}

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto 6rem;
  width: 90%;
  padding-top: 7rem;
  max-width: ${({theme}) => theme?.dimensions?.maxWidth};
  background: ${({theme}) => theme?.colors?.white};

  &:last-child {
    margin-bottom: 1rem;
  }

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
    display: inline-block;
    margin: 0 auto 5rem 5rem;
    padding: 0 1rem;
    color: ${({theme}) => theme?.colors?.white};
    border-radius: 5px;
    font-size: 3.5rem;

    &.front {
      background: ${({theme}) => theme?.colors?.green};
    }
    &.back {
      background: ${({theme}) => theme?.colors?.pink};
    }
    &.design {
      background: ${({theme}) => theme?.colors?.orange};
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
