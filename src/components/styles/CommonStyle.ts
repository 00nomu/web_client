import styled, { css } from "styled-components";
import Theme from "../../../styles/Theme";
import { appearAnimation, floating } from "./AnimationCommon";

  export const PageWrap = styled.div<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `auto`};
  padding: ${(props) => props.margin || `1.2em 0px`};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  // transform: ${(props) => props.transform || `translateX(50%)`};
  // position: ${(props) => props.position || `absolute`};
  // top: ${(props) => props.top};
  // bottom: ${(props) => props.bottom};
  // right: ${(props) => props.right || `50%`};
  // left: ${(props) => props.left};
  background-color: ${(props) => props.bgColor || `theme.grey_v1`};
  @media (max-height: 1079px) {
  padding : 10px 0 10px 0;
  }
  `

  export const PageBox = styled.div<any>`
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr};
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  width: ${(props) => props.width || `30px`};
  height: ${(props) => props.height || `30px`};
  border: ${(props) => props.border || `1px solid ${props.theme.grey_v2}`};
  border-right: ${(props) => props.borderRight || `none`};
  background-color: ${(props) => props.BgColor || `${props.theme.basic_white}`};
  color: ${(props) => props.color || `${props.theme.grey_v4}`};
  cursor: ${(props) => props.cursor || `pointer`};
  `

  export const PageNum = styled.div<any>`
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  borderRight: ${(props) => props.borderRight};
  color: ${(props) => props.color || `${props.theme.grey_v4}`};

  `
