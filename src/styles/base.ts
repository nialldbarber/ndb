import {createGlobalStyle} from 'styled-components';
import {noMarginOrPaddingMixin} from 'styles/config/mixins';

export const GlobalStyle = createGlobalStyle`
  :root {
    // colours
    --white: #FFFFFF;
    --faded-white: rgba(238, 238, 238, 0.6);
    --black: #111111;
    --dark-black: #222831;
    --darker-black: #1A1D24;
    --green: rgb(102, 204, 204);
    --pink: rgb(249, 85, 132);
    --faded-pink: rgba(249, 85, 132, 0.7);
    --orange: rgb(248, 155, 14);
    --react: #31A6FA;
    --vue: #57EB64;
    --svelte: #FF3E00;
    --js: #FFF208;
    --ts: #0D63F8;
    // font
    --main-font: 'Cabin', sans-serif;
    // dimensions
    --max-width: 1150px;
    // animations
    --base-transition: 0.2s ease;
    --swoop-animation: cubic-bezier(.215, .61, .355, 1);
    --btn-animation: cubic-bezier(0, 0, 1, 1);
  }

  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background-color: var(--faded-pink);
    color: white;
  }

  html {
    box-sizing: border-box;
  }

  body {
    position: relative;
    ${noMarginOrPaddingMixin};
    font-size: 16px;
    font-weight: bold;
    font-family: var(--main-font);
    line-height: 1.5;
    background-color: var(--dark-black);
    color: var(--white);
    min-height: 100vh;

    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 7px;
      background-image: linear-gradient(to right, rgba(102, 204, 204, 0.8), rgba(249, 85, 132, 0.8), rgba(248, 155, 14, 0.8));
      background-color: rgb(30, 39, 45);
      z-index: 2;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    ${noMarginOrPaddingMixin};
  }

  button {
    appearance: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
  }

  // hard material-ui overrides
  .MuiFormLabel-root {
    &.Mui-focused {
      color: var(--green) !important;
    }
  }

  .MuiOutlinedInput-root {
    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: var(--green) !important;
      }
    }

    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: var(--green) !important;
      }
    }
  }
`;

export const Normalise = createGlobalStyle`
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input { /* 1 */
    overflow: visible;
  }

  button,
  select { /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;
