import {css} from 'styled-components';

export const flexCenterMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contentMargin = css`
  margin: 0 auto 6rem;
`;

export const noBorderMixin = css`
  outline: none;
  border: none;
`;

export const noMarginOrPaddingMixin = css`
  margin: 0;
  padding: 0;
`;

export const fullSpacedMixin = css`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const positionCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const titleClamp = css`
  min-height: 0vw;
  font-size: clamp(4rem, 11vw, 10rem);
`;

export const dotColors = css`
  &.start {
    background: var(--green);
  }
  &.middle {
    background: var(--orange);
  }
  &.end {
    background: var(--pink);
  }
`;
