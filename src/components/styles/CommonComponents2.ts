import styled from "styled-components";
import { appearAnimation } from "./AnimationCommon";

export const WholeWrapper = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  display: ${(props) => props.display || `flex`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.theme.black_C};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  box-sizing: ${(props) => props.boxSizing};
  box-shadow: ${(props) => props.boxShadow};
  z-index: ${(props) => props.index};
  position: ${(props) => props.positoon};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  animation: ${appearAnimation} 1s forwards;
  overflow-x: hidden;
  & .MuiCheckbox-root,
  & .MuiCheckbox-colorSecondary.Mui-checked {
    color: ${(props) => props.theme.black_C} !important;
  }

`;

export const Wrapper = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  padding: ${(props) => props.padding};
  padding-left: ${(props) => props.paddingLeft};
  overflow: ${(props) => (props.isOverflow ? `auto` : props.overflow || ``)};
  background-image: ${(props) => props.bgImg};
  background-gradient: ${(props) => props.gradient};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: ${(props) => props.attachment || `fixed`};
  background-position: center;
  transition: 0.5s;
  cursor: ${(props) => props.cursor};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  animation: ${appearAnimation} 1s;
  &.active div {
    color: ${(props) => props.theme.black_C};
    font-weight: 700;
    text-decoration: underline;
  }
  & .react-reveal {
    width: inherit;
    z-index: 1;
  }
  & pre {
    white-space: pre-wrap;
    line-height: 1.4;
    color: #6f6f6f;
    font-size: 14px;
  }
  &.faqBoard:last-child {
    border-bottom: 1px solid #3c3c3c;
  }
  &:hover {
  }
  @media (max-width: 700px) {
    font-size: 14px;
    & svg {
      font-size: 20px;
    }
  }
`;

export const TableContainer = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
`;


export const Table = styled.table<any>`
  width: ${(props) => props.width || `100%`};
  display: block;
  border: 1px solid ${(props) => props.theme.grey_v3};
`;

export const TableRow = styled.tr<any>`
  width:100%;
  display:table;
  align-items : center;
  justify-content: center;
`

export const TableHead = styled.th<any>`
  width: ${(props) => props.width || `15px`};
  font-size: ${(props) => props.fontSize || `6px`};
  border-right: 1px solid ${(props) => props.theme.grey_v3};
`;

export const TableData = styled.td<any>`
  width: 80px;
  height: 30px;
  text-align: center;
  border-right: 1px dotted ${(props) => props.theme.grey_v2};
  border-bottom: 1px dotted ${(props) => props.theme.grey_v2};
`;







