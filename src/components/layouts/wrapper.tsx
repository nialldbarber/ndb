import React, {FC, ReactChild} from 'react';

interface WrapperProps {
  children: ReactChild;
}

const Wrapper: FC<WrapperProps> = ({children}) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Wrapper;
