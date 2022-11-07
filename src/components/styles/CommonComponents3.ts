import styled, { css } from "styled-components";
import Theme from "../../../styles/Theme";
import { appearAnimation, floating } from "./AnimationCommon";

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
  // & .MuiCheckbox-root,
  // & .MuiCheckbox-colorSecondary.Mui-checked {
  //   color: ${(props) => props.theme.black_C} !important;
  // }

`;

export const Wrapper = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};

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
  grid-row: ${(props) => props.gridRowspan};
  grid-column: ${(props) => props.gridColumnspan};

  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  position: ${(props) => (props.isSticky ? `sticky` : ``)};
  position: ${(props) => props.position};
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
  box-sizing: ${(props) => props.boxSizing};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-left: ${(props) => props.paddingLeft};
  padding-bottom: ${(props) => props.paddingBottom};
  overflow: ${(props) => (props.isOverflow ? `auto` : props.overflow || ``)};
  overflow-y: ${(props) => props.overflowY};
  overflow-x: ${(props) => props.overflowX};
  background-image: ${(props) => props.bgImg};
  // transition: ${(props) => props.transition || `0.5s`};
  cursor: ${(props) => props.cursor};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.textDecoration};
  word-break: ${(props) => props.wordBreak};
  scroll-behavior: ${(props) => props.scroll};
  animation: ${(props) => props.animation};

  &::-webkit-scrollbar {
    width:15px;
    height:8px;
    background:rgba(255,255,255,0.4);
  }
  &::-webkit-scrollbar-thumb {
    box-sizing:border-box;
    padding:2px;
    background-color:${Theme.grey_v2};
  }

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
  @media (max-width: 700px) {
    // font-size: 14px;
    & svg {
      font-size: 20px;
    }
  }
  #week, #momth_one, #month_two {

  }

  // 회색 줄
  ${(props) => props.kindOf === `greyLine` && `background : ${props.theme.grey_v2}`};
  ${(props) => props.kindOf === `greyLine` && `width : 100%`};
  ${(props) => props.kindOf === `greyLine` && `margin-top : 15px`};
  ${(props) => props.kindOf === `greyLine` && `margin-bottom : 15px`};
  ${(props) => props.kindOf === `greyLine` && `height : 1px`};

  // 테이블헤더
  ${(props) => props.kindOf === `tableHeader` && `background : ${props.theme.grey_v2}`};
  ${(props) => props.kindOf === `tableHeader` && `font-weight : bold`};

  // 임금명세서 탭메뉴
  ${(props) => props.kindOf === `tabMenu` && `font-weight : bold`};
  ${(props) => props.kindOf === `tabMenu` && `font-size : 20px`};
  ${(props) => props.kindOf === `tabMenu` && `color : ${props.theme.grey_v3}`};

  // 24px 볼드 타이틀
  ${(props) => props.kindOf === `title` && `font-weight : bold`};
  ${(props) => props.kindOf === `title` && `margin-bottom : 20px`};
  ${(props) => props.kindOf === `title` && `font-size : 24px`};

  // 18px 볼드 서브타이틀
  ${(props) => props.kindOf === `16sub` && `font-weight : bold`};
  ${(props) => props.kindOf === `16sub` && `font-size : 18px`};
  ${(props) => props.kindOf === `16sub` && `margin-bottom : 15px`};
  ${(props) => props.kindOf === `16sub` && `color : ${props.theme.light_blue}`};

  // 13px 볼드 서브타이틀
  ${(props) => props.kindOf === `13sub` && `font-weight : bold`};
  ${(props) => props.kindOf === `13sub` && `font-size : 13px`};
  // ${(props) => props.kindOf === `13sub` && `margin-bottom : 15px`};
  ${(props) => props.kindOf === `13sub` && `color : ${props.theme.light_blue}`};

  // 텍스트인풋
  ${(props) => props.kindOf === `inputBg` && `height : 30px`};
  ${(props) => props.kindOf === `inputBg` && `margin-right : 10px`};
  ${(props) => props.kindOf === `inputBg` && `background-color : ${props.theme.grey_v1}`};
  ${(props) => props.kindOf === `inputBg` && `flex-direction : row`};

  // 텍스트인풋 타이틀
  ${(props) => props.kindOf === `inputTitle` && `font-weight : 600`};
  ${(props) => props.kindOf === `inputTitle` && `padding-left : 10px`};
  ${(props) => props.kindOf === `inputTitle` && `align-items : start`};

  // 하얀색 박스
  ${(props) => props.kindOf === `whiteBox` && `background : #ffffff`};
  ${(props) => props.kindOf === `whiteBox` && `border : 1px solid ${props.theme.grey_v2}`};
  ${(props) => props.kindOf === `whiteBox` && `padding : 15px`};

  // 결과값 플렉스 정렬
  ${(props) => props.kindOf === `calcFlex` && `flex-direction : row`};
  ${(props) => props.kindOf === `calcFlex` && `justify-content : start`};
  ${(props) => props.kindOf === `calcFlex` && `align-items : start`};

  // 캘린더 근태입력
  ${(props) => props.kindOf === `calender` && `color : white`};
  ${(props) => props.kindOf === `calender` && `justify-content : start`};
  ${(props) => props.kindOf === `calender` && `align-items : start`};

  // 리스트
  ${(props) => props.kindOf === `list` && `transition : 0.1s`};
  ${(props) => props.kindOf === `list` && `background-color : white`};
  ${(props) => props.kindOf === `list` && `display : grid`};
  ${(props) => props.kindOf === `list` && `cursor : pointer`};

  // 의견보내기,공지사항,패치노트에 들어가는 화살표 텍스트 버튼
  ${(props) => props.kindOf === `arrowBtn` && `justify-content : end`};
  ${(props) => props.kindOf === `arrowBtn` && `flex-direction : row`};
  ${(props) => props.kindOf === `arrowBtn` && `color : ${Theme.light_blue}`};
  ${(props) => props.kindOf === `arrowBtn` && `font-weight : bold`};
  ${(props) => props.kindOf === `arrowBtn` && `margin : 0 0 10px 0`};
  ${(props) => props.kindOf === `arrowBtn` && `cursor : pointer`};

  &:hover {
  ${(props) => props.hover === true && css`
  animation : ${floating} 0.2s ease 1;
  background-color : ${props.theme.hover};
  `}

  ${(props) => props.hoverHeader === true && `&:hover {
      background-color : ${props.theme.light_sky};
      font-weight : bold;
    }`}
  }
`;




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
  display: ${(props) => props.display};
  justify-content: ${(props) => props.ju};
  align-items: ${(props) => props.al};
  align-contents: ${(props) => props.ac};
  height: ${(props) => props.height || `30px`};
  padding: ${(props) => props.padding || `0px 20px`};
  border: ${(props) => props.border || `none`};
  border-bottom: ${(props) => props.borderBottom || ``};
  border-radius: ${(props) => props.radius || `5px`};
  background-color: ${(props) => props.bgColor};
  margin: ${(props) => props.margin || `0px 5px`};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  cursor: ${(props) => props.cursor || `pointer`};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize || `14px`};
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  text-decoration:${(props) => props.textDecoration};

  ${(props) => props.hover === true && `&:hover {
    background-color : ${props.theme.basic_blue};
    border : 1px solid ${props.theme.basic_blue};
    transition: 0.3s
    }`}
  ${(props) => props.hoverDel === true && `&:hover {
    background-color : ${props.theme.deep_Red};
    border : 1px solid ${props.theme.deep_Red};
    transition: 0.3s
    }`}
  ${(props) => props.hoverGrey === true && `&:hover {
    background-color : ${props.theme.grey_v3};
    border : 1px solid ${props.theme.grey_v3};
    transition: 0.3s
    }`}
  ${(props) => props.hoverBlack === true && `&:hover {
    background-color : ${props.theme.light_blue};
    transition: 0.3s
    }`}
  ${(props) => props.hoverAlarm === true && `&:hover {
    background-color : #EFDB2B;
    transition: 0.3s
    }`}
  ${(props) => props.disabledBtn === true && `&:hover {
    background-color : ${props.theme.grey_v5};
    transition: 0.3s
    }`}
  // 검정 버튼(로그인, 메인)
  ${(props) => props.kindOf === `blackButton` && `background : ${props.theme.basic_black}`};
  ${(props) => props.kindOf === `blackButton` && `color : #ffffff`};

  // 기본 파랑 버튼
  ${(props) => props.kindOf === `lightBlue` && `background : ${props.theme.light_blue}`};
  ${(props) => props.kindOf === `lightBlue` && `color : #ffffff`};
  ${(props) => props.kindOf === `lightBlue` && `border : 1px solid ${props.theme.light_blue}`};

  // 삭제 빨간 버튼
  ${(props) => props.kindOf === `redButton` && `background : ${props.theme.basic_Red}`};
  ${(props) => props.kindOf === `redButton` && `color : #ffffff`};
  ${(props) => props.kindOf === `redButton` && `border : 1px solid ${props.theme.basic_Red}`};

  // 회색 버튼
  ${(props) => props.kindOf === `greyButton` && `border-radius : 0`};
  ${(props) => props.kindOf === `greyButton` && `background : ${props.theme.grey_v5}`};
  ${(props) => props.kindOf === `greyButton` && `border : 1px solid ${props.theme.grey_v3}`};
  ${(props) => props.kindOf === `greyButton` && `color : ${props.theme.basic_black}`};

  // 비활성화 버튼
  ${(props) => props.kindOf === `disabledButton` && `background : ${props.theme.grey_v2}`};
  ${(props) => props.kindOf === `disabledButton` && `color : ${props.theme.grey_v4}`};
  ${(props) => props.kindOf === `disabledButton` && `border : ${props.theme.grey_v2}`};


  // // 알림톡 버튼
  ${(props) => props.kindOf === `alarmtalkButton` && `background : ${props.theme.basic_yellow}`};
  ${(props) => props.kindOf === `alarmtalkButton` && `color : #3E2723`};
  ${(props) => props.kindOf === `alarmtalkButton` && `border : ${props.theme.basic_yellow}`};

  #svg {
    margin-right: 5px ;
    margin-top: 2px ;
  }

  #close {
    margin-top: 2px ;
  }

  &.active {

      @keyframes {
        0% {
          opacity:0;
          transform:translateX(-20px);
        }
        100% {
          opacity:1;
          transform:translateX(0px);
      }
    }
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

  & svg {
    font-size: 25px;
    color: #fff;
  }

  &:hover {
    background: #fff;
    color: ${(props) => props.theme.white_C};

    // ${(props) => !props.kindOf && `background ${props.theme.darkTheme_C};`}
  }
`;

// 인풋박스 감싸
export const InputWrapper = styled.div<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `30px`};
  background-color: ${(props) => props.bgColor};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac || `center`};
  justify-content: ${(props) => props.ju};
  flex-wrap: ${(props) => props.wrap};
  padding: ${(props) => props.padding};
  padding-right: ${(props) => props.paddingRight};
  margin: ${(props) => props.margin};
  margin-right: ${(props) => props.marginRight || `10px`};
  margin-bottom: ${(props) => props.marginBottom};

  // 근로시간 인풋박스
  ${(props) => props.kindOf === `worktimeRow` && `width : 50%`};
  ${(props) => props.kindOf === `worktimeRow` && `margin-right : 0px`};
  `;


// 기본사용 인풋박스
export const Input = styled.input<any>`
  width: ${(props) => props.width};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  position: ${(props) => props.position};
  height: ${(props) => props.height || `30px`};
  border: ${(props) => props.border || `1px solid ${props.theme.grey_v2}`};
  border-radius: ${(props) => props.radius || `0`};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex || `1`};

  // 검색
  ${(props) => props.kindOf === `search` && `width : 250px`};

  &:focus {
    outline:1px solid rgba(0,113,244,0.5);
    box-shadow:0 0 4px rgba(0,113,244,0.5);
    transition:0.1s;
  }
  ::placeholder {
    color: #a5a5a5;
  }
  :disabled { background: #ffffff; }

  ${(props) => props.kindOf === `object` && `border : none`};
  ${(props) => props.kindOf === `object` && `background-color : inherit`};
  `;

// 인풋 박스 타이틀(라벨)
export const InputLabel = styled.div<any>`
width: ${(props) => props.width || `40%`};
height: ${(props) => props.height || `100%`};
display: ${(props) => props.display || `flex`};
flex-direction: ${(props) => props.dr || `row`};
align-items: ${(props) => props.al || `center`};
align-content: ${(props) => props.ac || `center`};
margin: ${(props) => props.margin};
margin-right: ${(props) => props.marginRight || `10px`};
padding-left: ${(props) => props.paddingLeft || `10px`};
border: ${(props) => props.border || `1px solid ${props.theme.grey_v1}`};
background-color: ${(props) => props.BgColor || `${props.theme.grey_v1}`};
outline: ${(props) => props.outline};
font-size: ${(props) => props.fontSize};
font-weight: ${(props) => props.fontWeight || `bold`};
text-overflow:ellipsis ;


// 근로시간 인풋라벨
${(props) => props.kindOf === `worktimeLabel` && `width : 30%`};
${(props) => props.kindOf === `worktimeLabel` && `margin-right : 0px`};

`;

// 리스트 셀
export const DateBox = styled.div<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `40px`};
  background-color: ${(props) => props.backgroundColor};
  overflow: ${(props) => props.overflow || `hidden`};
  white-space: ${(props) => props.whiteSpace};
  border: ${(props) => props.border};
  border-right: ${(props) => props.borderRight || `1px solid ${props.theme.grey_v2}`};
  border-left: ${(props) => props.borderLeft};
  border-bottom: ${(props) => props.borderBottom};
  border-color: ${(props) => props.borderColor};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  text-overflow: ${(props) => props.textOverflow || `ellipsis`};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};

  grid-template-columns: ${(props) => props.gridColumn};
  grid-template-rows: ${(props) => props.gridRow};

  // 리스트 헤더
  ${(props) => props.kindOf === `HeaderColor` && `background : ${props.theme.grey_v2};`}
  ${(props) => props.kindOf === `HeaderColor` && `border-color : ${props.theme.grey_v5};`}

  // 거래처관리 왼쪽정렬
  ${(props) => props.kindOf === `left` && `align-items : start`};
  ${(props) => props.kindOf === `left` && `margin-left : 10px`};
  ${(props) => props.kindOf === `left` && `justify-content : start`};

  &::-webkit-scrollbar {
    width:5px;
    height:0px;
    // background:rgba(255,255,255,0.4);
  }
  &::-webkit-scrollbar-thumb {
    box-sizing:border-box;
    background-color:${Theme.grey_v2};
  }

  &:hover {
  }

  `;

// 리스트 안에 들어가는 텍스트(데이터)
export const DateInner = styled.div<any>`
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign || `center`};
  color: ${(props) => props.color};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju};
  position:relative;
  // overflow:visible;
  //   background-color: #000000;
  // }

  // 거래처관리 왼쪽정렬
  ${(props) => props.kindOf === `scroll` && `text-overflow : ellipsis`};
  ${(props) => props.kindOf === `scroll` && `text-align : left`};

  #svg {
    margin-right: 5px ;
  }
  button.reason {
    width:22px;
    height:22px;
    border:1.5px solid ${Theme.light_blue};
    border-radius:50%;
    background-color:${Theme.basic_white};
    color:${Theme.light_blue};
    font-weight:bold;
    margin-left:5px;
    float : center;
    &:hover  .reasonHover{
    display:block;
    // color:black;
    font-weight:normal;
    }
  }
  .reasonHover {
    display : none;
    float : center;
    width:200px;
    height:auto;
    word-wrap: break-word;
    position:absolute;
    top:0;
    right:25px;
    z-index:100;
    background-color:${Theme.basic_white};
    border:1px solid ${Theme.grey_v5};
    box-shadow:0 4px 10px rgba(0,0,0,0.1);
    padding:5px 10px;
    transition:0.5s;
    border-radius:5px;
    &:hover {
      display:block;
    }
}
  `;


// 그리드 행, gridBox랑 통합하기
export const CalcBox = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  padding: ${(props) => props.padding};
  margin-bottom: ${(props) => props.marginBottom || `2%`};
  text-overflow: ${(props) => props.textOverflow || `ellipsis`};
  display: ${(props) => props.display || `grid`};
  grid-template-columns: ${(props) => props.gridColumn};
  grid-template-rows: ${(props) => props.gridRow};
  `;


// 입력창 레이아웃 짤때 씀
export const GridBox = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  padding-bottom: ${(props) => props.paddingBottom};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: ${(props) => props.marginBottom || `10px`};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  text-overflow: ${(props) => props.textOverflow || `ellipsis`};
  display: ${(props) => props.display || `grid`};
  grid-template-columns: ${(props) => props.gridColumn};
  grid-template-rows: ${(props) => props.gridRow};
  grid-row: ${(props) => props.gridRowspan};
  grid-column: ${(props) => props.gridColumnspan};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.ju};
  align-contents: ${(props) => props.ac};
  align-items: ${(props) => props.al};
  flex-direction: ${(props) => props.dr};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  `;

export const GridItem = styled.div<any>`
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lineHeight};
  background-color: ${(props) => props.backgroundColor};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: ${(props) => props.fontSize};
  // grid-row-span: ${(props) => props.gridRowspan};
  // grid-column-span: ${(props) => props.gridColumnspan};
  grid-row: ${(props) => props.gridRowspan};
  grid-column: ${(props) => props.gridColumnspan};
  grid-row-start: ${(props) => props.gridRowstart};
  grid-row-end: ${(props) => props.gridRowend};
  grid-column-start: ${(props) => props.gridColumnstart};
  grid-column-end: ${(props) => props.gridColumnend};
  justify-content: ${(props) => props.ju};
  align-contents: ${(props) => props.ac};
  align-items: ${(props) => props.al};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  border-bottom: ${(props) => props.borderBottom};
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};

  ${(props) => props.kindOf === `cell` && `background : ${props.theme.basic_white};`}
  ${(props) => props.kindOf === `cell` && `padding : 3px 5px`}

  ${(props) => props.kindOf === `cellTitle` && `background : ${props.theme.light_sky_v2};`}
  ${(props) => props.kindOf === `cellTitle` && `padding : 3px 5px`};
  `;


// 결과값 제목&값 랩핑
export const CalcRow = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  margin-bottom: ${(props) => props.marginBottom || `10px`};
  margin-top: ${(props) => props.marginTop};
  display: ${(props) => props.display || `flex`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  flex-direction: ${(props) => props.dr || `row`};
  justify-content: ${(props) => props.ju || `start`};
  // align-contents: ${(props) => props.al || `center`};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.bgColor};
  `;

// 결과값 제목&값 랩핑 세로
export const CalcCol = styled.div<any>`
  width: ${(props) => props.width};
  // margin-bottom: ${(props) => props.marginBottom || `10px`};
  margin-top: ${(props) => props.marginTop};
  display: ${(props) => props.display || `flex`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  flex-direction: ${(props) => props.dr || `coloumn`};
  justify-content: ${(props) => props.ju || `start`};
  // align-contents: ${(props) => props.al || `center`};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.bgColor};
  `;

// 결과값 제목&값 랩핑한 하나의 셀
export const CalcCell = styled.div<any>`
  width: ${(props) => props.width || `25%`};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  display: ${(props) => props.display || `flex`};
  justify-contents: ${(props) => props.al || `center`};
  flex-direction: ${(props) => props.dr};
  // align-contents: ${(props) => props.al || `center`};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.bgColor};
  `;

// 결과값 제목
export const CalcTitle = styled.div<any>`
  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  font-weight: ${(props) => props.fontWeight || `bold`};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};

  // 결과값제목 굵은버전
  // ${(props) => props.kindOf === `bold` && `font-weight : bold`}

  `;

// 결과값
export const CalcValue = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  color: ${(props) => props.color || props.theme.light_blue};

  // 결과값 검은색 텍스트
  ${(props) => props.kindOf === `CalcBlack` && `color : ${props.theme.basic_black}`}
  `;

// 메모 등 긴 텍스트 입력
export const TextArea = styled.textarea<any>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.width || `100%`};
  resize: ${(props) => props.reSize || `none`};
  border: ${(props) => props.border || `1px solid ${props.theme.grey_v2}`};
  border-radius: ${(props) => props.radius || `0`};
  padding:5px;
  &:focus {
    outline:1px solid rgba(0,113,244,0.5);
    box-shadow:0 0 4px rgba(0,113,244,0.5);
    transition:0.1s;
  }
  &::placeholder {
    color:${Theme.grey_v3};
  }
  `;


// 햄버거버튼
export const HamBtn = styled.span<any>`
  width: ${(props) => props.width || `40px`};
  height: ${(props) => props.height || `4px`};
  background: ${(props) => props.bgColor || props.theme.light_blue};
  margin-bottom: ${(props) => props.marginBottom || `10px`};
  border-radius: ${(props) => props.borderRadius || `30px`};
  transform: ${(props) => props.transform};
  opacity: ${(props) => props.opacity};

  // close
  ${(props) => props.kindOf === `close` && `background-color : #ffffff`}

  `;


// 유틸 라디오 버튼
//   export const RadioWrapper = styled.div<any>`
//     width: 25%;
//     display: flex;
// `

export const RadioInput = styled.input<any>`
    display: flex;
    width: 16px;
    height: 16px;
    margin: 0;
    margin-right: 4px;
`

// 체크박스
export const CheckBox = styled.input<any>`
    margin: 0;
    margin-right: 5px;
    padding: 0;
  `

// 페이지네이션

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

// 셀렉트박스
export const Select = styled.select<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `100%`};
  border: ${(props) => props.border || `1px solid ${props.theme.grey_v2}`};
  border-right: ${(props) => props.borderRight};
  outline: ${(props) => props.outline};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.BgColor};
  // borderRight: ${(props) => props.borderRight};
  // color: ${(props) => props.color || `${props.theme.grey_v4}`};

  &:focus {
    outline:1px solid rgba(0,113,244,0.5);
    box-shadow:0 0 4px rgba(0,113,244,0.5);
    transition:0.1s;
  }
  .option {
    // background : black;
  }
å
`
export const EtcBox = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  display: flex;
  border: 1px solid ${Theme.grey_v2};
  background-color:${Theme.basic_white};
  padding: 15px;
  color: ${Theme.light_blue}};
  // margin:0 20px 0 0;

  input {
    display: block;
    border: none;
    width: 90%;
    height: 100%
    padding-top:20px;
  }
  input::placeholder {
    color: ${Theme.grey_v5}
  }
  input:focus { outline: none; }

  textarea {
    display: block;
    border: none;
    width: 90%;
    height: 100%
    padding-top: 20px;
    resize: none;
  }
  textarea:focus { outline: none; }
  textarea::placeholder {
    color: ${Theme.grey_v5}
  }
`
export const EtcTitle = styled.p<any>`
  font-weight: bold;
  color: ${Theme.light_blue}};
  padding:0;
  margin:0 20px 0 0;
`



// ############### 홍보페이지 #############

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


/* table */
export const Table = styled.table<any>`
width: 100%;

`;


export const TableRow = styled.tr<any>`
font-weight: ${(props) => props.fontWeight};
font-size: ${(props) => props.fontSize || `13px`};
color: ${(props) => props.color};
`;


export const TableCell = styled.td<any>`
font-weight: ${(props) => props.fontWeight};
font-size: ${(props) => props.fontSize};
padding: ${(props) => props.padding || `5px 0`};
color: ${(props) => props.color};
`;



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
padding: ${(props) => props.padding};
margin-top: ${(props) => props.marginTop};
margin-bottom: ${(props) => props.marginBottom};
padding-bottom: ${(props) => props.paddingBottom};
font-size: ${(props) => props.fontSize || `18px`};
font-weight: ${(props) => props.fontWeight || `400`};
color: ${(props) => props.color};
border-bottom: ${(props) => props.borderBottom};
flex-direction: ${(props) => props.dr || `column`};
align-items: ${(props) => props.al || `center`};
text-align: ${(props) => props.tl || `center`};
line-height: ${(props) => props.lineHeight};
justify-content: ${(props) => props.ju || `center`};

${(props) => props.kindOf === `mainText` && `line-height : 2em`}

${(props) => props.kindOf === `title` && `font-size : 24px`}
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
`;


// 모바일 텍스트 인풋박스
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
  ::placeholder {
    color: #cecece;
    font-size: 16px;
  }
`;


export const MainTitle = styled.span<any>`
    width: ${(props) => props.width || `100%`};
    height:30px;
    font-size:12px;
    padding: ${(props) => props.paddin || `4px 10px`};
    font-weight: ${(props) => props.fontWeight || `bold`};
    position:relative;
    span {
        position:absolute;
        display:block;
        z-index:1;
    }
    span::after {
      position:absolute;
      display:block;
      content:"";
      width:100%;
      height:10px;
      padding:0 5px;
      bottom:0;
      left:0;
      z-index:-1;
      background-color:${Theme.light_sky_v2};
  }
`;

export const SubTitle = styled.span<any>`
width: ${(props) => props.width || `auto`};
display: ${(props) => props.display || `inline-block`};
font-weight: ${(props) => props.fontWeight || `bold`};
color: ${(props) => props.color};
background-color: ${(props) => props.bgColor};
padding: ${(props) => props.padding};
display: ${(props) => props.display};
`;

export const Blank = styled.span<any>`
width: ${(props) => props.width};
display: ${(props) => props.display || `inline-block`};
font-weight: ${(props) => props.fontWeight || `bold`};
color: ${(props) => props.color || props.theme.light_blue };
border-bottom: ${(props) => props.borderBottom || `1px solid ${Theme.grey_v2}`};
text-align : ${(props) => props.textAlign || `center`};
`;

export const Agree = styled.span<any>`
  display:flex;
  justify-content:end;
  margin-top:10px;
  font-weight:bold;
  span {
    display:block;
    font-size:12px;
    padding:0 15px;
  }
`;