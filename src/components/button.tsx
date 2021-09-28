import {ReactChild, useState} from 'react';
import {classNames} from 'utils/classNames';
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
  strippedStyled: boolean;
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
  strippedStyled,
}: Partial<ButtonProps>) {
  const [active, setActive] = useState<boolean>(false);
  const btnType = standardBtn ? 'standard' : '';
  const stripped = strippedStyled ? 'stripped' : '';

  return (
    <Btn
      type={type ?? 'button'}
      className={classNames(className, btnType, stripped)}
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
