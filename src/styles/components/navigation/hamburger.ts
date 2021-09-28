import styled from 'styled-components';
import {motion} from 'framer-motion';
import {media} from 'styles/config/media-queries';

export const Nav = styled(motion.nav)`
  &.home {
    ${media.greaterThan('phablet')`
      display: none;
    `};
  }

  .burger {
    position: fixed;
    top: 2.125rem;
    right: 1.5rem;
    z-index: 4;

    ${media.lessThan('phablet')`
      top: 1.7rem;
      right: 1rem;
    `};
  }
`;

export const SpanBurger = styled.div`
  position: relative;
  margin: 0;
  width: 60px;
  height: 45px;
  transform: rotate(0deg) scale(0.5);
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(0.55);
  }

  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: var(--pink);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: 18px;
      transform-origin: left center;
    }

    :nth-child(3) {
      top: 36px;
      transform-origin: left center;
    }
  }

  &.open {
    span {
      background: var(--white);

      &:nth-child(1) {
        transform: rotate(45deg);
        top: -3px;
        left: 8px;
      }

      &:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 39px;
        left: 8px;
      }
    }
  }
`;
