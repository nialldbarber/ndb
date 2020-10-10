import {css} from 'styled-components';

const flexCenterMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const noBorderMixin = css`
  outline: none;
  border: none;
`;

const noMarginOrPaddingMixin = css`
  margin: 0;
  padding: 0;
`;

const fullSpacedMixin = css`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const positionCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const marign404 = css`
  margin: 0.5rem 0;
`;

const titleClamp = css`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
`;

export {
  flexCenterMixin,
  noBorderMixin,
  noMarginOrPaddingMixin,
  fullSpacedMixin,
  positionCenter,
  marign404,
  titleClamp,
};
