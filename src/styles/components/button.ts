import styled from 'styled-components';
import {motion} from 'framer-motion';
import {lighten} from 'polished';
import {flexCenterMixin} from 'styles/config/mixins';

const Btn = styled(motion.button)`
  border: none;

  &.standard {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({theme}) => theme?.colors?.black};
    padding: 0.5em 1em;
    font-weight: 500;
    line-height: 1.4;
    font-size: 1em;
    background-color: ${({theme}) => theme?.colors?.black};
    color: ${({theme}) => theme?.colors?.white};
    white-space: nowrap;
    border-radius: 4px;
    transition: 0.2s ${({theme}) => theme?.animation?.btn};
    &:hover {
      background-color: ${lighten(0.1, '#111')};
      border-color: ${lighten(0.1, '#111')};
    }
    span {
      padding-right: 0;
      transition: 0.2s ${({theme}) => theme?.animation?.btn};
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

const BackHomeBtn = styled.a`
  ${flexCenterMixin};
`;

export {Btn, BackHomeBtn};
