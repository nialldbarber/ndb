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
      color: ${({theme}) => theme.colors.green};
    }
  }
  &.orange {
    span {
      color: ${({theme}) => theme.colors.orange};
    }
  }
  &.pink {
    span {
      color: ${({theme}) => theme.colors.pink};
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
      color: ${({theme}) => theme.colors.white};
      transition: ${transition};
    }
  }
`;
