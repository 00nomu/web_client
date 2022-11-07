import styled, { css } from "styled-components";
import Theme from "../../../styles/Theme";

export const Select = styled.select<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `30px`};
  padding: ${(props) => props.height || `0 5px`};
  border: ${(props) => props.border || `1px solid ${props.theme.grey_v2}`};
  border-radius: ${(props) => props.radius || `5px`};
  outline: ${(props) => props.outline || `none`};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  background-color: ${(props) => props.BgColor};
  // borderRight: ${(props) => props.borderRight};
  // color: ${(props) => props.color || `${props.theme.grey_v4}`};

  &:focus {
    border:1px solid #0071f4;
    transition:0.5s;
  }
  .option {
    // background : black;
  }

  // straight
  ${(props) => props.kindOf === `filter` && `border-radius : 0px`};
  `;