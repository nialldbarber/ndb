import {motion} from 'framer-motion';
import styled from 'styled-components';
import {media} from 'styles/config/media-queries';

export const Items = styled(motion.ul)`
  z-index: 5;
`;

export const ListItem = styled(motion.li)`
  position: absolute;

  ${media.lessThan('phablet')`
    display: none;
  `};

  a {
    position: relative;
    display: inline-block;
    font-size: 1.5rem;
    transform: scale(1);
    transition: 0.2s ease;

    &:after {
      content: '';
      position: absolute;
      top: -1rem;
      left: -1rem;
      bottom: -1rem;
      right: -1rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  &.bottom-left {
    bottom: 1rem;
    left: 1.5rem;

    &:hover {
      color: ${({theme}) => theme.colors.green};
    }
  }

  &.bottom-right {
    bottom: 1rem;
    right: 1.5rem;

    &:hover {
      color: ${({theme}) => theme.colors.orange};
    }
  }

  &.top-right {
    top: 1.5rem;
    right: 1.5rem;

    &:hover {
      color: ${({theme}) => theme.colors.pink};
    }
  }
`;
