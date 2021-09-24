import {BadgeContainer} from 'styles/components/badge';

interface BadgeProps {
  text: string;
  action?: () => void;
}

function Badge({text, action}: BadgeProps) {
  return (
    <BadgeContainer onClick={action}>
      <span>{text}</span>
    </BadgeContainer>
  );
}

export default Badge;
