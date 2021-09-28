import {ReactChild} from 'react';
import Toast from 'components/toast';

export default function Wrapper({children}: {children: ReactChild}) {
  return (
    <>
      <Toast />
      <main>{children}</main>
    </>
  );
}
