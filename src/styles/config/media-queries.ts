import {generateMedia} from 'styled-media-query';

export const media = generateMedia({
  mobile: '320px',
  phablet: '590px',
  almostTablet: '629px',
  tablet: '768px',
  desktop: '992px',
  large: '1199px',
  extraLarge: '2500px',
});
