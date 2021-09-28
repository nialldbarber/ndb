import styled from 'styled-components';
import {motion} from 'framer-motion';
import {media} from 'styles/config/media-queries';
import {flexCenterMixin} from 'styles/config/mixins';

export const ToastWrapper = styled(motion.div)`
  ${flexCenterMixin};
  width: 140px;
  height: 40px;
  padding: 1rem;
  border-radius: 5px;

  &.success {
    background: var(--green);
  }

  &.error {
    background: var(--pink);
    width: 260px;
  }

  &.same-page {
    background: var(--orange);
    width: auto;
  }
`;

export const ToastContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 2.275rem;
  right: 6rem;
  gap: 30px;

  ${media.lessThan('phablet')`
    top: 3.775rem;
  `};
`;
