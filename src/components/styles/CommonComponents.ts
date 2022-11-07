import styled from "styled-components";
import { appearAnimation } from "./AnimationCommon";


export const WholeWrapper = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
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

  // flex
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};

  // grid
  grid-template-columns: ${(props) => props.gridColumn};
  grid-template-rows: ${(props) => props.gridRow};
  grid-auto-columns: ${(props) => props.gridAutoColumn};
  grid-auto-rows: ${(props) => props.gridAutoRow};

  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  position: ${(props) => props.positoon};
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
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  padding: ${(props) => props.padding};
  padding-left: ${(props) => props.paddingLeft};
  overflow: ${(props) => (props.isOverflow ? `auto` : props.overflow || ``)};
  overflow-y: ${(props) => props.overflowY};
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

  // 회색 줄
  ${(props) => props.kindOf === `greyLine` && `background : ${props.theme.grey_v2}`};
  ${(props) => props.kindOf === `greyLine` && `width : 100%`};
  ${(props) => props.kindOf === `greyLine` && `height : 1px`};

  // 테이블헤더
  ${(props) => props.kindOf === `tableHeader` && `background : ${props.theme.grey_v2}`};
  ${(props) => props.kindOf === `tableHeader` && `font-weight : bold`};

`;

/* section */
export const Section = styled.div<any>`
  width: ${(props) => props.width || `1200px`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `100%`};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
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
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding || `150px 0`};
  overflow: ${(props) => (props.isOverflow ? `hidden` : props.overflow || ``)};
  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: ${(props) => props.attachment || `fixed`};
  background-position: center;
  transition: 0.5s;
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  animation: ${(props) => props.animation || ``};
  @media (max-width: 700px) {
    font-size: 14px;
    & svg {
      font-size: 20px;
    }
  }
`;

/* box */
export const Box = styled.div<any>`
  width: ${(props) => props.width || `95%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `550px`};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background: ${(props) => props.bgColor || `white`};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  z-index: ${(props) => props.zIndex};
  border: ${(props) => props.border || `1px solid #a0a7ac`};
  border-bottom: ${(props) => props.borderBottom};
  border-radius: ${(props) => props.radius || `10px`};
  box-shadow: ${(props) => props.shadow || `0 5px 25px rgba(0,0,0,0.1)`};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom || `100px`};
  margin-top: ${(props) => props.marginTop};
  padding: ${(props) => props.padding};
  overflow: ${(props) => (props.isOverflow ? `hidden` : props.overflow || ``)};
  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: ${(props) => props.attachment || `fixed`};
  background-position: center;
  transition: 0.5s;
  cursor: ${(props) => props.cursor};
  animation: ${(props) => props.animation || ``};
  @media (max-width: 700px) {
    font-size: 14px;
    & svg {
      font-size: 20px;
    }
  }
`;

/* table */
export const Table = styled.table<any>`
width: 100%;

`;

// display: flex;
// border-top: 1px solid #999999;
// border-left: 1px solid #999999;
// ${(props: any) => (props.isHalf || `border-right: 1px solid #999999;`)};
// ${(props: any) => (props.isHalf ? `width: 50%;` : "width:100%;")};

// &:last-child {
//   border-right: 1px solid #999999;
// }

export const TableRow = styled.tr<any>`
font-weight: ${(props) => props.fontWeight};
font-size: ${(props) => props.fontSize || `13px`};
color: ${(props) => props.color};
`;

// ${(props: any) => props.isForcedHalf && `border-top : 1px solid #999999`};
// border-top : none;
// width: calc(50% + 1px);
// &:last-child {
//   border-right: 1px solid #999999;
//   display: flex;
//   flex-wrap: wrap;

export const TableCell = styled.td<any>`
font-weight: ${(props) => props.fontWeight};
font-size: ${(props) => props.fontSize};
padding: ${(props) => props.padding || `5px 0`};
color: ${(props) => props.color};
`;
// display: flex;
// border-top: 1px solid #999999;
// border-left: 1px solid #999999;
// ${(props: any) => (props.isHalf || `border-right: 1px solid #999999;`)};
// ${(props: any) => (props.isHalf ? `width: 50%;` : "width:100%;")};

// &:last-child {
//   border-right: 1px solid #999999;
// }


/* conpany */
export const Company = styled.div<any>`
  width: ${(props) => props.width || `20%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `80px`};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background: ${(props) => props.bgColor || `white`};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  z-index: ${(props) => props.zIndex};
  border: ${(props) => props.border || `1px solid #a0a7ac`};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  padding: ${(props) => props.padding};
  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: ${(props) => props.attachment || `fixed`};
  background-position: center;
  transition: 0.5s;
  cursor: ${(props) => props.cursor};
  animation: ${(props) => props.animation || ``};
  @media (max-width: 700px) {
    font-size: 14px;
    & svg {
      font-size: 20px;
    }
  }
`;

/* title */
export const Title = styled.h2<any>`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  position: relative;
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom || `100px`};
  padding-bottom: ${(props) => props.paddingBottom};
  font-size: ${(props) => props.fontSize || `30px`};
  font-weight: ${(props) => props.fontWeight || `700`};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  text-align: ${(props) => props.tl || `center`};
  justify-content: ${(props) => props.ju || `center`};
`;


/* text */
export const Text = styled.p<any>`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  position: relative;
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  padding-bottom: ${(props) => props.paddingBottom};
  font-size: ${(props) => props.fontSize || `20px`};
  font-weight: ${(props) => props.fontWeight || `400`};
  color: ${(props) => props.color};
  border-bottom: ${(props) => props.borderBottom};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  text-align: ${(props) => props.tl || `center`};
  line-height: ${(props) => props.lineHeight};
  justify-content: ${(props) => props.ju || `center`};
`;


//   @media (max-width: 1200px) {
//     font-size: 24px;
//     margin-top:100px;
//   }
//   @media (max-width: 500px) {
//     font-size: 20px;
//     margin-top: 20px;
//   }

/* a */
export const LinkClick = styled.a<any>`
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
  overflow: ${(props) => (props.isOverflow ? `auto` : props.overflow || ``)};
  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: ${(props) => props.attachment || `fixed`};
  background-position: center;
  transition: 0.5s;
  cursor: ${(props) => props.cursor};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  animation: ${(props) => props.animation || ``};
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
    font-weight: ${(props) => (props.isHeaderHover ? `800` : ``)};
  }
  @media (max-width: 700px) {
    font-size: 14px;
    & svg {
      font-size: 20px;
    }
  }
`;


/**button */

export const Button = styled.button<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `30px`};
  padding: ${(props) => props.height || `0px 20px`};
  border: ${(props) => props.border || `none`};
  cursor: ${(props) => props.cursor || `pointer`};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize || `14px`};
  background-color: ${(props) => props.bgColor};
  border-bottom: ${(props) => props.borderBottom || ``};
  border-radius: ${(props) => props.radius || `5px`};
  padding: ${(props) => props.padding || ``};
  margin: ${(props) => props.margin || `0px 5px`};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};

  // 기본 파랑 버튼
  ${(props) => props.kindOf === `lightBlue` && `background : ${props.theme.light_blue}`};
  ${(props) => props.kindOf === `lightBlue` && `color : #ffffff`};
  ${(props) => props.kindOf === `lightBlue` && `border : none`};

  // 삭제 빨간 버튼
  ${(props) => props.kindOf === `redButton` && `background : ${props.theme.basic_Red}`};
  ${(props) => props.kindOf === `redButton` && `color : #ffffff`};
  ${(props) => props.kindOf === `redButton` && `border : none`};

  // 회색 버튼
  ${(props) => props.kindOf === `greyButton` && `border-radius : 0`};
  ${(props) => props.kindOf === `greyButton` && `background : ${props.theme.grey_v5}`};
  ${(props) => props.kindOf === `greyButton` && `border : 1px solid ${props.theme.grey_v3}`};
  ${(props) => props.kindOf === `greyButton` && `color : ${props.theme.basic_black}`};

  #svg {
    margin-right: 5px ;
    margin-top: 1px ;
  }
`;

export const ThemeButton = styled.button<any>`
  width: ${(props) => props.width || `300px`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `50px`};
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius || `4px`};
  font-size: ${(props) => props.fontSize || `16px`};
  font-weight: ${(props) => props.fontWeight || `400`};
  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  cursor: ${(props) => props.cursor || `pointer`};
  color: ${(props) => props.color || props.theme.basic_white};
  background-color: ${(props) => props.bgColor};
  border: 0px;

  ${(props) => props.kindOf === `basicBlack` && `background : ${props.theme.basic_black};`}
  ${(props) => props.kindOf === `basicBlack` && `color : ${props.theme.white};`}
  ${(props) => props.kindOf === `basicBlack` && `border :  ;`}

  ${(props) => props.kindOf === `props` && `background : ${props.bgColor};`}

  ${(props) => props.kindOf === `white` && `background : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `white` && `color : ${props.theme.black_C};`}
  ${(props) => props.kindOf === `white` && `border : 1px solid ${props.theme.basicTheme_C};`}

  ${(props) => props.kindOf === `black` && `background : ${props.theme.darkGrey_C};`}
  ${(props) => props.kindOf === `black` && `color : ${props.theme.white_C};`}

  ${(props) => props.kindOf === `subTheme` && `background : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `subTheme` && `color : ${props.theme.black_C};`}
  ${(props) => props.kindOf === `subTheme` && `border : 1px solid ${props.theme.subTheme_C};`}
  ${(props) => props.kindOf === `subTheme` && `color: ${props.theme.subTheme_C};`}

  ${(props) => props.kindOf === `grey` && `background : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `grey` && `color : ${props.theme.grey_C};`}
  ${(props) => props.kindOf === `grey` && `border : 1px solid ${props.theme.grey_C};`}

  ${(props) => props.kindOf === `check` && `background : ${props.theme.check_B_C};`}
  ${(props) => props.kindOf === `update` && `background : ${props.theme.update_B_C};`}
  ${(props) => props.kindOf === `delete` && `background : ${props.theme.delete_B_C};`}
  ${(props) => props.kindOf === `default` && `background : ${props.theme.grey_C};`}

  // ${(props) => props.kindOf === `naver` && `border : 1px solid #1CC020;`}
  // ${(props) => props.kindOf === `naver` && `color : ${props.theme.black_C};`}
  // ${(props) => props.kindOf === `naver` && `background : ${props.theme.white_C};`}

  & svg {
    font-size: 25px;
    color: #fff;
  }

  &:hover {
    background: #fff;
    color: ${(props) => props.theme.white_C};

    ${(props) => !props.kindOf && `background ${props.theme.darkTheme_C};`}

    ${(props) => props.kindOf === `basicBlack` && `background : ${props.theme.turquoise};`}
    ${(props) => props.kindOf === `basicBlack` && `color : ${props.theme.basic_black};`}
    ${(props) => props.kindOf === `basicBlack` && `border : ;`}

    ${(props) => props.kindOf === `white` && `background ${props.theme.basicTheme_C};`}
    ${(props) => props.kindOf === `white` && `color ${props.theme.white_C};`}

    ${(props) => props.kindOf === `black` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `black` && `color : ${props.theme.black_C};`}
    ${(props) => props.kindOf === `black` && `border : 1px solid ${props.theme.darkGrey_C};`}

    ${(props) => props.kindOf === `subTheme` && `color ${props.theme.white_C};`}
    ${(props) => props.kindOf === `subTheme` && `background ${props.theme.subTheme_C};`}

    ${(props) => props.kindOf === `grey` && `color ${props.theme.white_C};`}
    ${(props) => props.kindOf === `grey` && `background ${props.theme.grey_C};`}

    ${(props) => props.kindOf === `create` && `border :1px solid ${props.theme.create_B_C};`}
    ${(props) => props.kindOf === `check` && `border :1px solid ${props.theme.check_B_C};`}
    ${(props) => props.kindOf === `update` && `border :1px solid ${props.theme.update_B_C};`}
    ${(props) => props.kindOf === `delete` && `border :1px solid ${props.theme.delete_B_C};`}

    ${(props) => props.kindOf === `naver` && `background : #1CC020;`}
    ${(props) => props.kindOf === `naver` && `color : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `naver` && `border : none;`}
  }
`;

export const TextInput = styled.input<any>`
  width: ${(props) => props.width || `378px`};
  height: ${(props) => props.height || `42px`};
  border: ${(props) => props.border || `none`};
  border-bottom: ${(props) => props.borderBottom || ``};
  border-top: ${(props) => props.borderTop || ``};
  border-right: ${(props) => props.borderRight || ``};
  border-left: ${(props) => props.borderLeft || ``};
  border-radius: ${(props) => props.radius || `5px`};
  background-color: ${(props) => props.bgColor || ``};
  padding: ${(props) => props.padding || props.theme.inputPadding};
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  font-size:14px;
  position: relative;
  &:focus {
    outline: none;
  }
`;


// 프로그램 기본사용 인풋박스
export const Input = styled.input<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `30px`};
  border: ${(props) => props.border || `1px solid ${props.theme.grey_v5}`};
  border-radius: ${(props) => props.radius || `0`};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  // 검색 인풋박스
  ${(props) => props.kindOf === `search` && `width : 270px`};

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #a5a5a5;
  }
  `;




// 테이블 새로만들기
export const DateBox = styled.div<any>`
  height: ${(props) => props.height || `40px`};
  background-color: ${(props) => props.backgroundColor || `#ffffff`};
  overflow: ${(props) => props.overflow || `hidden`};
  white-space: ${(props) => props.whiteSpace};
  border-right: ${(props) => props.borderRight || `1px solid ${props.theme.grey_v5}`};
  border-left: ${(props) => props.borderLeft};
  border-bottom: ${(props) => props.borderBottom};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  text-overflow: ${(props) => props.textOverflow || `ellipsis`};

  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};

  grid-template-columns: ${(props) => props.gridColumn};
  grid-template-rows: ${(props) => props.gridRow};


  ${(props) => props.kindOf === `HeaderColor` && `background : ${props.theme.grey_v2};`}
  `;

export const DateInner = styled.div<any>`
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign || `center`};
  // background-color: ${(props) => props.backgroundColor || `blue`};
  // overflow: ${(props) => props.overflow || `hidden`};
  // white-space: ${(props) => props.whiteSpace || `nowrap`};
  // text-overflow: ${(props) => props.textOverflow || `ellipsis`};
  `;