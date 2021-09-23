import {motion} from 'framer-motion';
import styled from 'styled-components';
import {media} from 'styles/config/media-queries';

export const List = styled(motion.ul)`
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: -1;

  li {
    a {
      position: relative;
      padding: 0.5rem 0;
      display: inline-block;
      text-align: center;
      color: ${({theme}) => theme.colors.white};
      font-size: 4rem;
      transition: 0.4s ease;

      ${media.lessThan('phablet')`
        font-size: 2.5rem;
        padding: 0.3rem 0;
      `};
    }

    &.home {
      a {
        &:hover {
          color: ${({theme}) => theme.colors.orange};
        }
      }
    }
    &.about {
      a {
        &:hover {
          color: ${({theme}) => theme.colors.green};
        }
      }
    }
    &.blog {
      a {
        &:hover {
          color: ${({theme}) => theme.colors.pink};
        }
      }
    }
    &.contact {
      a {
        &:hover {
          color: ${({theme}) => theme.colors.orange};
        }
      }
    }
  }

  &.open {
    z-index: 6;
  }
`;
