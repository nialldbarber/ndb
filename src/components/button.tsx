import {ReactChild, useState} from 'react';
import {Btn} from 'styles/components/button';

interface ButtonProps {
  text: string | number;
  type: 'submit' | 'button';
  className: string;
  label: string;
  standardBtn: boolean;
  toggledState: boolean;
  action: () => void;
  children: ReactChild;
}

export default function Button({
  text,
  type,
  className,
  label,
  standardBtn,
  toggledState = false,
  action,
  children,
}: Partial<ButtonProps>) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <Btn
      type={type ?? 'button'}
      className={`${className || ''} ${standardBtn ? 'standard' : ''}`}
      aria-label={label || ''}
      aria-pressed={toggledState}
      aria-expanded={toggledState}
      onClick={() => {
        setActive(!active);
        if (action) {
          action();
        }
      }}
    >
      <span className={`${active ? 'active' : ''}`}>{text || ''}</span>
      {children || ''}
    </Btn>
  );
}
