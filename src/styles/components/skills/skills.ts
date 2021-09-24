import styled from 'styled-components';
import {media} from 'styles/config/media-queries';

type Width = {width: number};

export const ImgWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: 0;
  padding: 0;
  cursor: pointer;

  ${media.lessThan('almostTablet')`
    width: 50%;
  `};

  img {
    display: flex;
    width: ${(props: Width) => props.width}%;
    height: 200px;
    margin: 0 auto;
    padding: 2rem;
  }
`;

export const TooltipWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.2s ease;

  &.active {
    opacity: 1;
    bottom: 65%;
  }
`;
