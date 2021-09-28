import styled from 'styled-components';
import {motion} from 'framer-motion';
import {flexCenterMixin} from 'styles/config/mixins';

export const Btn = styled(motion.button)`
  border: none;

  &.stripped {
    background: none;
    outline: none;
    border: none;
    color: inherit;
  }

  &.standard {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--black);
    padding: 0.5em 1em;
    font-weight: 500;
    line-height: 1.4;
    font-size: 1em;
    background-color: var(--black);
    color: var(--white);
    white-space: nowrap;
    border-radius: 4px;
    transition: 0.2s var(--btn-animation);

    &:hover {
      background-color: var(--black);
      border-color: var(--black);
    }

    span {
      padding-right: 0;
      transition: 0.2s var(--btn-animation);
      &.active {
        padding-right: 1rem;
      }
    }
  }

  &.menu-toggle {
    position: absolute;
    top: 3.1rem;
    right: 2rem;
    padding: 0;
    background: none;
    z-index: 12;
  }
`;

export const BackHomeBtn = styled.a`
  ${flexCenterMixin};
`;
