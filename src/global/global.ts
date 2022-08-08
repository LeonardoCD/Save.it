import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
   
  /* FontSizes */
  --large: 2rem; // 32px
  --bigger: 1.5rem; // 24px
  --big: 1.25rem; // 20px
  --default: 1rem; // 16px
  --between: 0.938rem; // 15px
  --medium: 0.875rem; // 14px
  --small: 0.75rem; // 12px
  --smaller: 0.6875rem; // 11px
  --tiny: 0.625rem; // 10px

  /* Colors */
  
  --primary: #4F87EF;
  --blue-900: #3974E1;
  --blue-700: #63B3ED;

  --gray-900: #353646;
  --gray-800: #4B4D63;
  --gray-700: #616480;
  --gray-600: #5E6E94;
  --gray-500: #797D9A;
  --gray-400: #F0F0F5;
  --gray-300: #F6F6FF;

  --input-placeholder: #B3B3B3;
  
  --white: #FFFFFF;
  --background: #F0F2F5;

  --red-900: #DD4E3E;
  --input-error: #FFEFEF;

  /* Font weight */

  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;

  /* Shadow */
  --shadow: 0px 3px 25px #00000014;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
      font-size: 93.75%;
  }
  @media (max-width: 720px) {
      font-size: 87.5%;
  }
}

body {
  background: var(--background) !important;
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif !important;
  font-weight: var(--fw-regular);
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

.react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  /* width: 100%; */
  max-width: 40rem;
  max-height: 35rem;
  background: var(--white);
  padding: 3rem;
  position: relative;
  border-radius: 15px;
  overflow: scroll;
  outline: none;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--gray-500);
  border-radius: 5px;
}

`;
