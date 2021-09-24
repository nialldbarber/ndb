import styled from 'styled-components';
import {media} from 'styles/config/media-queries';
import {transition} from 'styles/config/vars';

export const Logo = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 2;
  transition: ${transition};
  transform: scale(1);

  &:active {
    transform: scale(1.1);
  }

  &.green {
    span {
      color: var(--green);
    }
  }
  &.orange {
    span {
      color: var(--orange);
    }
  }
  &.pink {
    span {
      color: var(--pink);
    }
  }

  a {
    position: relative;
    font-size: 2.5rem;
    transition: ${transition};

    ${media.lessThan('phablet')`
      font-size: 2rem;
    `};

    &:after {
      content: '';
      position: absolute;
      top: -1.5rem;
      left: -1.5rem;
      bottom: -1.5rem;
      right: -1.5rem;
    }

    span {
      position: relative;
      color: var(--white);
      transition: ${transition};
    }
  }
`;
