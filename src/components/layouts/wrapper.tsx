import React, {ReactChild} from 'react';

function Wrapper({children}: {children: ReactChild}) {
  return <main>{children}</main>;
}

export default Wrapper;
