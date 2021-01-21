import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ToastWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  padding: 1rem;
  border-radius: 5px;

  &.success {
    background: ${({theme}) => theme.colors.green};
  }
  &.error {
    background: ${({theme}) => theme.colors.pink};
    width: 260px;
  }
`;

export const ToastContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 1.6rem;
  right: 6rem;
  gap: 30px;
`;
