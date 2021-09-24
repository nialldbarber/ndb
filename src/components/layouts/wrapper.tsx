import {ReactChild} from 'react';

export default function Wrapper({children}: {children: ReactChild}) {
  return <main>{children}</main>;
}
