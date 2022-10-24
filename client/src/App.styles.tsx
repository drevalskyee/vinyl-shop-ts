import { injectGlobal } from "@emotion/css";

export function GlobalStyles() {
  injectGlobal`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-family: 'Poppins', sans-serif;
    max-width: 1920px;
    background: #dedede;
    };
    `;
}
