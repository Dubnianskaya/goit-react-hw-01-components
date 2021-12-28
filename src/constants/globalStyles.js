import { Global, css } from '@emotion/react';

const styles = css`
  img {
    display: block;
    max-width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
`;

export const GlobalCSS = () => {
  return <Global styles={styles} />;
};
