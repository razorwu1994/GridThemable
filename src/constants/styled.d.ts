import "styled-components";
import { BOX_AREA, BREAK_POINTS } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
    font: {
      fontFamily: string;
      lg: string;
      md: string;
      sm: string;
      color: string;
    };
    outline: string;
    [key: BOX_AREA]: { background?: string; margin?: string };
    media: Record<
      keyof typeof BREAK_POINTS,
      (l: TemplateStringsArray, ...p: any[]) => string
    >;
    [OtherImportantStyleAttrs: string]: any;
    buttonPrimary: string;
    buttonSecondary: string;
  }
}
