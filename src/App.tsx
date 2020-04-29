import React from "react";
import { ThemeProvider } from "styled-components";

//constants
import { BOX_AREA, MockProps } from "./constants/types";
import { appTheme, GlobalStyle } from "./constants/theme";

//components
import Landing from "./Containers/Landing";
import { GradientButton } from "./StyleComponents";

/** mock data that renders each section component
 *  central control for mini app like this project
 */

const mockData = {
  Top: {
    metadata: { userName: "Joe Doe", email: "abc@ebd.com" },
    mockDisplayComponent: props => <div>I am Top</div>
  },
  Main: { mockDisplayComponent: props => <div>I am Main</div> },
  Bot: {
    mockDisplayComponent: props => (
      <div>
        <GradientButton
          {...{
            borderRadius: "20px",
            width: "150px",
            height: "50px",
            color: "#000"
          }}
          onClick={event => console.log("clicked")}
        >
          Click here!
        </GradientButton>
        <GlobalStyle />
      </div>
    )
  },
  SideTop: { mockDisplayComponent: props => <div>I am SideTop</div> },
  SideBot: { mockDisplayComponent: props => <div>I am SideBot </div> },
  SideSpan: { mockDisplayComponent: props => <div>I am SideSpan</div> }
} as Record<keyof typeof BOX_AREA, MockProps>;

//Middleware,Router,HOC here

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Landing {...mockData} />
    </ThemeProvider>
  );
}
