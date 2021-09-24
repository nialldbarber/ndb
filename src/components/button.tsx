import {ReactChild, useState} from 'react';
import {Btn} from 'styles/components/button';
import {LoaderSpinner} from 'styles/components/loader';

interface ButtonProps {
  text?: string | number;
  type?: 'submit' | 'button';
  className?: string;
  standardBtn?: boolean;
  toggledState?: boolean;
  action: () => void;
  children?: ReactChild;
}

export default function Button({
  text,
  type,
  className,
  standardBtn,
  toggledState = false,
  action,
  children,
}: ButtonProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <Btn
      type={type ?? 'button'}
      className={`${className || ''} ${standardBtn ? 'standard' : ''}`}
      aria-pressed={toggledState}
      aria-expanded={toggledState}
      onClick={() => {
        setActive(!active);
        action();
      }}
    >
      <span className={`${active ? 'active' : ''}`}>{text || ''}</span>
      {children || ''}
      {active && standardBtn ? <LoaderSpinner className="loader" /> : null}
    </Btn>
  );
}
