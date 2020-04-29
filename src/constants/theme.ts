import { DefaultTheme, css, createGlobalStyle } from "styled-components";
import { BOX_AREA, BREAK_POINTS } from "./types";

//overwrite default media
const media = Object.keys(BREAK_POINTS).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media (max-width: ${BREAK_POINTS[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `.join("");
  return acc;
}, {} as Record<keyof typeof BREAK_POINTS, (l: TemplateStringsArray, ...p: any[]) => string>);

//overwrite default theme
const appTheme: DefaultTheme = {
  colors: {
    primary: "cyan",
    secondary: "magenta",
    accent: "grey"
  },
  font: {
    color: "#fff",
    fontFamily: "Arial",
    lg: "26px",
    md: "18px",
    sm: "12px"
  },
  media: media,
  outline: "1px solid rgba(0,0,0,0)",
  [BOX_AREA.Top]: { background: "#4F5A27" },
  [BOX_AREA.SideTop]: { background: "#68933B" },
  [BOX_AREA.SideBot]: {
    background: "#948B76",
    margin: "auto 10px auto auto"
  },
  [BOX_AREA.Main]: { background: "#FCE0A7" },
  [BOX_AREA.SideSpan]: { background: "#F5D36A" },
  [BOX_AREA.Bot]: { background: "#CCC86F" },
  buttonPrimary: "#EFB90C",
  buttonSecondary: "#FBD93A"
};

// theme is also fully typed
const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
  }
  html, body, #root {
    user-select:none;
    width:100%;
    height: 100%;
  }

  button {
    transition:1s ease-out;
    color:#fff;
    font-size: ${({ theme }) => theme.font.md};
    &:hover {
      transform:scale(0.9);
    }
    &:focus {
      outline:0;
    }
  }
`;
export { appTheme, GlobalStyle };
