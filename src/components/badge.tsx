import React, {FC} from 'react';
import styled from 'styled-components';

interface BadgeProps {
  text: string;
}

const BadgeContainer = styled.span`
  margin: 0 0.3rem;
  padding: 0.5rem;
  border: 1px solid ${({theme}) => theme.colors.white};
  border-radius: 5px;
`;

const Badge: FC<BadgeProps> = ({text}) => {
  return (
    <BadgeContainer>
      <span>{text}</span>
    </BadgeContainer>
  );
};

export default Badge;
