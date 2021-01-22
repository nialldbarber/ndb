import styled from 'styled-components';
import {motion} from 'framer-motion';

export const SingleItem = styled(motion.li)`
  &.home {
    a {
      &.active {
        color: ${({theme}) => theme.colors.orange};

        &:hover {
          color: ${({theme}) => theme.colors.white};
        }
      }
    }
  }
  &.about {
    a {
      &.active {
        color: ${({theme}) => theme.colors.green};

        &:hover {
          color: ${({theme}) => theme.colors.white};
        }
      }
    }
  }
  &.blog {
    a {
      &.active {
        color: ${({theme}) => theme.colors.pink};

        &:hover {
          color: ${({theme}) => theme.colors.white};
        }
      }
    }
  }
  &.contact {
    a {
      &.active {
        color: ${({theme}) => theme.colors.orange};

        &:hover {
          color: ${({theme}) => theme.colors.white};
        }
      }
    }
  }
`;
