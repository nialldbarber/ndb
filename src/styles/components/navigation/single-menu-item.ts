import styled from 'styled-components';
import {motion} from 'framer-motion';

export const SingleItem = styled(motion.li)`
  &.home {
    a {
      &.active {
        color: var(--orange);

        &:hover {
          color: var(--white);
        }
      }
    }
  }
  &.about {
    a {
      &.active {
        color: var(--green);

        &:hover {
          color: var(--white);
        }
      }
    }
  }
  &.blog {
    a {
      &.active {
        color: var(--pink);

        &:hover {
          color: var(--white);
        }
      }
    }
  }
  &.contact {
    a {
      &.active {
        color: var(--orange);

        &:hover {
          color: var(--white);
        }
      }
    }
  }
`;
