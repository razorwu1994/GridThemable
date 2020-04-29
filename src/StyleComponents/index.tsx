import styled from "styled-components";
import { BOX_AREA } from "../constants/types";

export const MainGridLayout = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-columns: 16.7% 10px auto auto auto auto 10px 16.7%;
  grid-template-rows: 10% 10px auto 10px auto 10px auto;
  grid-template-areas:
    "Top     Top Top  Top   Top  Top  Top  Top"
    ".       .    .    .    .    .    .    ."
    "SideTop .    Main Main Main Main .    SideSpan"
    ".       .    Main Main Main Main .    SideSpan"
    "SideBot .    Main Main Main Main .    SideSpan"
    ".       .    .    .    .    .    .    ."
    "Bot     Bot  Bot  Bot  Bot  Bot  Bot  Bot";
  grid-auto-flow: column;

  ${({ theme }) => theme.media.tablet`
  grid-template-columns: 50% 10px 50%;
  grid-template-rows: 10% 10px 70% 10px 20% 10px 70% 10px 20%;
  grid-template-areas:
    "Top Top Top"
    ". . ."
    "Main Main Main"
    ". . ."
    "SideTop . SideBot"
    ". . ."
    "SideSpan SideSpan SideSpan"
    ". . ."
    "Bot Bot Bot"
  `}

  font-family: ${({ theme }) => theme.font.fontFamily};
  color: ${({ theme }) => theme.font.color};
`;

export const GridBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: 1s;
  outline: ${({ theme }) => theme.outline};
  grid-area: ${(props: {
    gridArea: BOX_AREA;
    background: string;
    margin: string;
  }) => props.gridArea};
  margin: ${({ margin }) => margin || "auto"};
  background: ${({ background }) => background};
  font-size: ${({ theme }) => theme.font.md};
`;

export const GradientButton = styled.button`
  border-radius: ${(props: {
    borderRadius: string;
    width: string;
    height: string;
    color: string;
  }) => props.borderRadius};
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.buttonPrimary}, ${theme.buttonSecondary})`};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-style: none;
  color: ${({ color }) => color};
`;
