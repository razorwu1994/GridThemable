import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { MainGridLayout, GridBox } from "../../StyleComponents";
import { BOX_AREA, MockProps } from "../../constants/types";

const Landing = (props: Record<keyof typeof BOX_AREA, MockProps>) => {
  const themeContext = useContext(ThemeContext);
  return (
    <MainGridLayout>
      {Object.values(BOX_AREA).map(key => (
        <GridBox key={key} gridArea={key} {...themeContext[key]}>
          {props[key].mockDisplayComponent({})}
        </GridBox>
      ))}
    </MainGridLayout>
  );
};

export default Landing;
