import styled from 'styled-components';
import {contentMargin} from 'styles/config/mixins';
import {media} from 'styles/config/media-queries';

export const Wrapper = styled.div`
  position: relative;
  ${contentMargin};
  width: 100%;
  padding-top: 7rem;
  padding-left: 3rem;
  padding-right: 3rem;
  max-width: ${({theme}) => theme.dimensions.maxWidth};
  background: ${({theme}) => theme.colors.darkBlack};

  ${media.lessThan('tablet')`
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  `};

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

    ${media.lessThan('tablet')`
      font-size: 3rem;
    `};

    ${media.lessThan('phablet')`
      font-size: 2.5rem;
      margin: 0 auto 0.5rem 1.5rem;
    `};

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
