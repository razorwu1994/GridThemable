//simplicity purpose, enum for each container
export enum BOX_AREA {
  Top = "Top",
  Main = "Main",
  Bot = "Bot",
  SideTop = "SideTop",
  SideBot = "SideBot",
  SideSpan = "SideSpan"
}

//device config, px unit
export const BREAK_POINTS = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
};

export interface MockProps {
  mockDisplayComponent: React.FunctionComponent;
  [otherKeys: string]: any;
}
