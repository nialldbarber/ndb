import React, {ReactChild} from 'react';

type WrapperProps = {children: ReactChild};

function Wrapper({children}: WrapperProps) {
  return <main>{children}</main>;
}

export default Wrapper;
