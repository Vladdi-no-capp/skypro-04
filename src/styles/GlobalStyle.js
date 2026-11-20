import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #17213a;
    background: #f5f2ea;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * { box-sizing: border-box; }
  html { min-width: 320px; min-height: 100%; }
  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    background:
      radial-gradient(circle at 8% 8%, rgba(255, 171, 145, 0.28), transparent 26rem),
      radial-gradient(circle at 92% 88%, rgba(99, 203, 166, 0.2), transparent 28rem),
      #f5f2ea;
  }
  button, input, textarea { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible {
    outline: 3px solid rgba(108, 92, 231, 0.35);
    outline-offset: 3px;
  }
`;
