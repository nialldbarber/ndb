import React, {FC} from 'react';
import Skill from 'components/skills/skill';
import {Wrapper, Grid} from 'styles/components/skills';
import {frontEnd, backEnd, design} from 'constants/theme';

const Skills: FC = () => {
  return (
    <>
      <Wrapper>
        <h2 className="front">front end</h2>
        <Grid>
          {frontEnd.map(({id, icon, name, link, width}) => (
            <Skill key={id} icon={icon} name={name} link={link} width={width} />
          ))}
        </Grid>
      </Wrapper>
      <Wrapper>
        <h2 className="back">back end</h2>
        <Grid>
          {backEnd.map(({id, icon, name, link, width}) => (
            <Skill key={id} icon={icon} name={name} link={link} width={width} />
          ))}
        </Grid>
      </Wrapper>
      <Wrapper>
        <h2 className="design">design</h2>
        <Grid>
          {design.map(({id, icon, name, link, width}) => (
            <Skill key={id} icon={icon} name={name} link={link} width={width} />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default Skills;
