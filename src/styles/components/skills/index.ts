import styled from 'styled-components';
import {contentMargin} from 'styles/config/mixins';

export const Wrapper = styled.div`
  position: relative;
  ${contentMargin};
  width: 90%;
  padding-top: 7rem;
  max-width: ${({theme}) => theme.dimensions.maxWidth};
  background: ${({theme}) => theme.colors.darkBlack};

  &:last-child {
    margin-bottom: 1rem;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 120px;
  }

  &:before {
    top: -7.5rem;
    background: linear-gradient(
      to top,
      rgba(34, 40, 49, 1) 0%,
      rgba(34, 40, 49, 0) 100%
    );
  }

  &:after {
    bottom: -7.5rem;
    background: linear-gradient(
      to bottom,
      rgba(34, 40, 49, 1) 0%,
      rgba(34, 40, 49, 0) 100%
    );
  }

  h2 {
    display: inline-block;
    margin: 0 auto 5rem 5rem;
    padding: 0 1rem;
    color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    font-size: 3.5rem;

    &.front {
      background: ${({theme}) => theme.colors.green};
    }
    &.back {
      background: ${({theme}) => theme.colors.pink};
    }
    &.design {
      background: ${({theme}) => theme.colors.orange};
    }
  }
`;

export const Grid = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: ${({theme}) => theme.colors.darkBlack};
`;
