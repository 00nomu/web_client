import styled, { css } from "styled-components";
import Theme from "../../../../styles/Theme";
import { appearAnimation, floating } from "../AnimationCommon";

  export const PageWrap = styled.div<any>`
    width: ${(props) => props.width || `100%`};
    height: ${(props) => props.height || `30px`};
    margin-top: ${(props) => props.marginTop || `20px`};
    display: ${(props) => props.display || `flex`};
    align-items: ${(props) => props.al || `center`};
    justify-content: ${(props) => props.ju || `center`};

${(props) => props.kindOf === `modalWorkerList` && `width : 100%`};
${(props) => props.kindOf === `modalWorkerList` && `height : auto`};
${(props) => props.kindOf === `modalWorkerList` && `padding : 1.2em 0px`};
${(props) => props.kindOf === `modalWorkerList` && `margin : 0px`};

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

${(props) => props.kindOf === `focus` && `font-weight : bold`};
${(props) => props.kindOf === `focus` && `color : ${Theme.light_blue}`};

  `

  export const PageNum = styled.div<any>`
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  borderRight: ${(props) => props.borderRight};
  color: ${(props) => props.color || `${props.theme.grey_v4}`};

  `
