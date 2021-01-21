import React, {FC} from 'react';
import {BadgeContainer} from 'styles/components/badge';

interface BadgeProps {
  text: string;
  action?: () => void;
}

const Badge: FC<BadgeProps> = ({text, action}) => {
  return (
    <BadgeContainer onClick={action}>
      <span>{text}</span>
    </BadgeContainer>
  );
};

export default Badge;
