import styled, { css } from "styled-components";
import Theme from "../../../styles/Theme";
import { appearAnimation, floating, slideUp } from "./AnimationCommon";


export const WholeWrapper = styled.main<any>`
width: ${(props) => props.width || `100%`};
height: ${(props) => props.height};
background: ${(props) => props.bgColor};
box-sizing: ${(props) => props.boxSizing};
box-shadow: ${(props) => props.boxShadow};
position: ${(props) => props.position};
top: ${(props) => props.top};
bottom: ${(props) => props.bottom};
left: ${(props) => props.left};
right: ${(props) => props.right};
padding: ${(props) => props.padding};
margin: ${(props) => props.margin};
z-index: ${(props) => props.index};
animation: ${appearAnimation} 1s forwards;
overflow-x: hidden;
display: ${(props) => props.display || `flex`};
justify-content: ${(props) => props.ju};
align-contents: ${(props) => props.ac};
align-items: ${(props) => props.al};
flex-direction: ${(props) => props.dr || `column`};
&::-webkit-scrollbar {
  width:5px;
  height:8px;
  background:transparent;
}
&::-webkit-scrollbar-thumb {
  box-sizing:border-box;
  padding:2px;
  background-color:${Theme.grey_v2};
}
${(props) => props.kindOf === `modalBg` && `background-color : ${Theme.grey_v1}`};
${(props) => props.kindOf === `modalBg` && `padding: 20px`};
`;

// 모든 그리드
export const GridBox = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  display: ${(props) => props.display || `grid`};
  grid-template-columns: ${(props) => props.gtc};
  grid-template-rows: ${(props) => props.gtr};
  grid-auto-columns: ${(props) => props.gac};
  grid-auto-rows: ${(props) => props.gar};
  grid-row: ${(props) => props.gr};
  grid-column: ${(props) => props.gc};
  gap: ${(props) => props.gap};
  align-content: ${(props) => props.ac};
  align-items: ${(props) => props.al};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  position: ${(props) => props.position};
  overflow-y: ${(props) => props.overflowY};
  font-size: ${(props) => props.fontSize};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};

${(props) => props.kindOf === `listHeader` && `border-top: 1px solid ${Theme.grey_v5}`};
${(props) => props.kindOf === `listHeader` && `border-bottom: 1px solid ${Theme.grey_v5}`};

${(props) => props.kindOf === `list` && `border-bottom: 1px solid ${Theme.grey_v2}`};
${(props) => props.kindOf === `list` && `cursor: pointer`};

${(props) => props.kindOf === `text` && `padding-top: 5px`};
// ${(props) => props.kindOf === `text` && `grid-template-rows : 26.5px`};

${(props) => props.kindOf === `input` && `margin : 25px 0 0 0`};
${(props) => props.kindOf === `inputFirst` && `margin : 7px 0 0 0`};


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
export const CalenderCell = styled.div<any>`
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lineHeight};
  background-color: ${(props) => props.bgColor};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: ${(props) => props.fontSize};
  grid-template-columns: ${(props) => props.gtc};
  grid-template-rows: ${(props) => props.gtr};
  grid-auto-columns: ${(props) => props.gac};
  grid-auto-rows: ${(props) => props.gar};
  grid-row: ${(props) => props.gr};
  grid-column: ${(props) => props.gc};
  gap: ${(props) => props.gap};
  align-content: ${(props) => props.ac};
  align-items: ${(props) => props.al};
  justify-content: ${(props) => props.ju};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  border-bottom: ${(props) => props.borderBottom};
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  `;

  export const CalenderInput = styled.div<any>`
  display:flex;
  align-items:start;
  justify-content:start;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color || Theme.basic_white};
  `;


// 모달 흰박스
export const Section = styled.section<any>`
border-radius:5px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
width: ${(props) => props.width || `360px`};
height: ${(props) => props.height};
position: ${(props) => props.position};
background-color: ${(props) => props.bgColor || `${Theme.basic_white}`};
overflow-x: ${(props) => props.overflowX || `hideen`};
overflow-y: ${(props) => props.overflowY};
display: ${(props) => props.display};
grid-template-columns: ${(props) => props.gtc};
grid-template-rows: ${(props) => props.gtr};
grid-auto-columns: ${(props) => props.gac};
grid-auto-rows: ${(props) => props.gar};
grid-row: ${(props) => props.gr};
grid-column: ${(props) => props.gc};
gap: ${(props) => props.gap};
justify-content: ${(props) => props.ju};
align-contents: ${(props) => props.ac};
align-items: ${(props) => props.al};
flex-direction: ${(props) => props.dr};
`;

// 모달 흰박스 안 패딩
export const InnerBox = styled.div<any>`
box-sizing:border-box;
overflow:hidden;
width: ${(props) => props.width};
height: ${(props) => props.height || `calc(100% - 50px)`};
padding: ${(props) => props.padding || `20px`};
display: ${(props) => props.display || `flex`};
justify-content: ${(props) => props.ju};
flex-direction: ${(props) => props.dr || `column`};
align-items: ${(props) => props.al};
&::-webkit-scrollbar {
  width:15px;
  height:8px;
  background:transparent;
}
&::-webkit-scrollbar-thumb {
  box-sizing:border-box;
  padding:2px;
  background-color:${Theme.grey_v2};
}
// 섹션 안에 타이틀 박스
${(props) => props.kindOf === `titleBox` && `background-color : ${Theme.grey_v1}`};
${(props) => props.kindOf === `titleBox` && `padding : 0px 20px`};
${(props) => props.kindOf === `titleBox` && `flex-direction : row`};
${(props) => props.kindOf === `titleBox` && `align-items : center`};
${(props) => props.kindOf === `titleBox` && `height : 50px`};

${(props) => props.kindOf === `largeBox` && `height : auto`};

${(props) => props.kindOf === `padding-none` && `padding : 0`};

`;

// 모달 흰박스 패딩 안에 스크롤
export const Article = styled.article<any>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  overflow-y: ${(props) => props.overflowY};
  overflow-x: ${(props) => props.overflowX};
  &::-webkit-scrollbar {
    width:5px;
    height:8px;
    background:transparent;
  }
  &::-webkit-scrollbar-thumb {
    box-sizing:border-box;
    padding:2px;
    background-color:${Theme.grey_v5};
  }
  ${(props) => props.kindOf === `scroll` && `width : calc(100% + 20px)`};
  ${(props) => props.kindOf === `scroll` && `overflow-y : scroll`};
  ${(props) => props.kindOf === `scroll` && `overflow-x : hidden`};

  ${(props) => props.kindOf === `padding-r15` && `width : calc(100% - 15px)`};

`;

// 모든 감싸기
export const Wrapper = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  background-color: ${(props) => props.bgColor};
  overflow-y: ${(props) => props.overflowY};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  border-top: ${(props) => props.borderTop};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  marginRight: ${(props) => props.marginRight};
  display: ${(props) => props.display || `flex`};
  justify-content: ${(props) => props.ju};
  align-content: ${(props) => props.ac};
  align-items: ${(props) => props.al};
  flex-direction: ${(props) => props.dr};
  flex-wrap: ${(props) => props.wrap};
  grid-template-columns: ${(props) => props.gtc};
  box-sizing:border-box;

  ${(props) => props.kindOf === `text` && `padding-top : 5px`};

  ${(props) => props.kindOf === `input-margin0` && `margin-top : 0`};
  ${(props) => props.kindOf === `input-margin0` && `flex-direction : column`};

  ${(props) => props.kindOf === `input` && `margin : 25px 0 0 0`};
  ${(props) => props.kindOf === `inputFirst` && `margin : 7px 0 0 0`};

  ${(props) => props.kindOf === `margin30` && `flex-direction : column`};
  ${(props) => props.kindOf === `margin30` && `margin-bottom : 30px`};

  ${(props) => props.kindOf === `margin20` && `margin-top : 20px`};

  ${(props) => props.kindOf === `borderBox` && `border : 1px solid rgba(0,0,0,0.25)`};
  ${(props) => props.kindOf === `borderBox` && `border-radius : 4px`};
  ${(props) => props.kindOf === `borderBox` && `padding : 10px 14px`};

  ${(props) => props.kindOf === `list` && `transition : 0.1s`};
  ${(props) => props.kindOf === `list` && `background-color : white`};
  ${(props) => props.kindOf === `list` && `display : grid`};
  ${(props) => props.kindOf === `list` && `cursor : pointer`};

  ${(props) => props.kindOf === `calenderTitle` && `height : 60px`};
  ${(props) => props.kindOf === `calenderTitle` && `align-items : center`};
  ${(props) => props.kindOf === `calenderTitle` && `justify-content : space-between`};
  ${(props) => props.kindOf === `calenderTitle` && `border-top : 1px solid ${Theme.grey_v2}`};

  ${(props) => props.kindOf === `calenderWeek` && `justify-content: center`};

  ${(props) => props.kindOf === `laborSection` && `margin-bottom: 30px`};


    span.colorGrey {
      color:${Theme.grey_v5};
      font-weight:normal;
    }
    span.colorGreyV4 {
      color:${Theme.grey_v4};
      font-weight:normal;
    }



  // &:hover {
  //   ${(props) => props.hover === true && css`
  //   animation : ${floating} 0.2s ease 1;
  //   background-color : ${props.theme.hover};
  //   `}

  //   ${(props) => props.hoverHeader === true && `&:hover {
  //       background-color : ${props.theme.light_sky};
  //       font-weight : bold;
  //     }`}
  //   }
  `;

// 리스트 셀
export const DateBox = styled.div<any>`
  width: ${(props) => props.width};
  height:30px;
  overflow:hidden;
  white-space: ${(props) => props.whiteSpace};
  color: ${(props) => props.color};

  border: ${(props) => props.border};
  border-right: ${(props) => props.borderRight || `1px solid ${props.theme.grey_v2}`};
  border-left: ${(props) => props.borderLeft};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderBottom};

  border-color: ${(props) => props.borderColor || `color: ${props.theme.grey_v5}`};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};

  // 리스트 헤더
  ${(props) => props.kindOf === `HeaderColor` && `background : ${props.theme.grey_v2};`}
  ${(props) => props.kindOf === `HeaderColor` && `font-weight : bold;`}
  ${(props) => props.kindOf === `HeaderColor` && `border-color : ${props.theme.grey_v5};`}

  // 거래처관리 왼쪽정렬
  ${(props) => props.kindOf === `left` && `align-items : start`};
  ${(props) => props.kindOf === `left` && `margin-left : 10px`};
  ${(props) => props.kindOf === `left` && `justify-content : start`};

  ${(props) => props.kindOf === `notDate` && `border-right : none`};
  ${(props) => props.kindOf === `notDate` && `color : ${Theme.grey_v5}`};

  &::-webkit-scrollbar {
    width:5px;
    height:0px;
    // background:rgba(255,255,255,0.4);
  }
  &::-webkit-scrollbar-thumb {
    box-sizing:border-box;
    background-color:${Theme.grey_v2};
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

export const InputWrapper = styled.div<any>`
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac || `center`};
  justify-content: ${(props) => props.ju};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

// 체크박스
export const CheckBox = styled.input<any>`
  margin: 0;
  padding: 0;
  height:16px;
  margin-right: ${(props) => props.marginRight || `2px`};
`;

// 셀렉트
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
  ${(props) => props.kindOf === `filter` && `width : 100px`};
  `;

// 라디오버튼
export const RadioInput = styled.input<any>`
  display: flex;
  width: 16px;
  height: 16px;
  margin: 0;
  margin-right: 4px;
`
// 인풋
export const Input = styled.input<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `30px`};
  border: ${(props) => props.border || `1px solid ${props.theme.grey_v2}`};
  border-radius: ${(props) => props.radius || `5px`};
  padding: ${(props) => props.padding || `0 5px`};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  outline:none;

  ${(props) => props.kindOf === `search` && `width : 250px`};
  ${(props) => props.kindOf === `search` && `border-radius : 0`};

  &:focus {
    border: 1px solid #0071f4;
    transition:0.5s;
  }
  ::placeholder {
    color: #a5a5a5;
  }
  :disabled { background: #ffffff; }
`;

// 메모 등 긴 텍스트 입력
export const TextArea = styled.textarea<any>`
  outline:none;
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  resize: ${(props) => props.reSize || `none`};
  border: ${(props) => props.border || `1px solid ${props.theme.grey_v2}`};
  border-radius: ${(props) => props.radius || `0`};
  padding:5px;
  &:focus {
    outline:none;
    border:1px solid ${Theme.light_blue};
    // box-shadow:0 0 4px rgba(0,113,244,0.5);
    transition:0.5s;
  }
  &::placeholder {
    color:${Theme.grey_v3};
  }
  ${(props) => props.kindOf === `memo` && `border-radius : 5px`};
  `;

// 타이틀
export const Title = styled.p<any>`
padding:0;
font-weight: ${(props) => props.fontWeight || `bold`};
text-align: ${(props) => props.textAlign};
margin: ${(props) => props.margin || `0px`};
color: ${(props) => props.color};

// 24px (모달 타이틀)
${(props) => props.kindOf === `24px` && `font-size : 24px`};
${(props) => props.kindOf === `24px` && `margin : 0 0 20px 0`};

// 18px (섹션 타이틀)
${(props) => props.kindOf === `18px` && `font-size : 18px`};

// 16px (임금명세서 결과값 타이틀)
${(props) => props.kindOf === `16px` && `font-size : 16px`};

// 13px
${(props) => props.kindOf === `13px` && `font-size : 13px`};
${(props) => props.kindOf === `13px` && `color : ${props.theme.light_blue}`};
${(props) => props.kindOf === `13px` && `margin-bottom : 10px`};

// 13px 볼드 아닌버전 파란글씨
${(props) => props.kindOf === `13normal` && `font-size : 13px`};
${(props) => props.kindOf === `13normal` && `color : ${props.theme.light_blue}`};
${(props) => props.kindOf === `13normal` && `font-weight : normal`};
`;

export const LaborTitle = styled.span<any>`
    width: ${(props) => props.width || `100%`};
    height:30px;
    // font-size:16px;
    // padding: ${(props) => props.paddin || `4px 10px`};
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

export const LaborBlank = styled.span<any>`
width: ${(props) => props.width};
display: ${(props) => props.display || `inline-block`};
font-weight: ${(props) => props.fontWeight || `bold`};
color: ${(props) => props.color || props.theme.light_blue };
border-bottom: ${(props) => props.borderBottom || `1px solid ${Theme.grey_v2}`};
text-align : ${(props) => props.textAlign || `center`};
`;

//메테리얼유아이 인풋 제목 대신
export const MuiInput = styled.span<any>`
  padding:0;
  display:inline-block;
  margin-left:14px;
  font-size:0.74rem;
  z-index:0;
  position:absolute;
  top:-10px;
  width: ${(props) => props.width};
  color: ${(props) => props.color || `rgba(0,0,0,0.6)`};

  ${(props) => props.kindOf === `subText` && `font-size : 13px`};

  &::after {
    display:block;
    content:"";
    position: absolute;
    background-color:#ffffff;
    // background-color:#ff0000;
    z-index:-1;
    width:100%;
    padding:4px;
    height:10px;
    top:1px;
    left:-4px;
  }
  `;

// 인풋 제목
export const InputTitle = styled.span<any>`
  padding:0;
  display:block;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  color: ${(props) => props.color || `${Theme.grey_v3}`};

  ${(props) => props.kindOf === `subText` && `font-size : 13px`};
  `;

// 결과값 제목
export const CalcTitle = styled.span<any>`
  padding:0;
  display:${(props) => props.display || `flex`};
  justify-content:${(props) => props.ju || `space-between`};
  width: ${(props) => props.width};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};

  ${(props) => props.kindOf === `normal` && `font-weight : normal`};
  ${(props) => props.kindOf === `normal` && `width : 100px`};
  ${(props) => props.kindOf === `blue` && `color : ${Theme.light_blue}`};
  ${(props) => props.kindOf === `bold` && `font-weight : bold`};

  ${(props) => props.kindOf === `info` && `width : 90px`};

  `;

// 결과값
export const CalcValue = styled.span<any>`
  padding:0;
  display:block;
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  font-weight:bold;
  word-break:break-all;

  ${(props) => props.kindOf === `bold` && `font-weight : bold`}
  ${(props) => props.kindOf === `normal` && `font-weight : normal`}
  `;

// 버튼
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
    backgroundcolor : ${props.theme.grey_v5};
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

  // // 텍스트 버튼 (모달창 등등 에서 쓰이는 파란색 글씨 버튼)
  ${(props) => props.kindOf === `textButton` && `background : none`};
  ${(props) => props.kindOf === `textButton` && `color : ${props.theme.light_blue}`};
  ${(props) => props.kindOf === `textButton` && `font-weight : bold`};
  ${(props) => props.kindOf === `textButton` && `padding: 0`};
  ${(props) => props.kindOf === `textButton` && `text-decoration: underline`};

  // // 텍스트 버튼 (모달창 등등 에서 쓰이는 빨간색 글씨 버튼)
  ${(props) => props.kindOf === `textButtonRed` && `background : none`};
  ${(props) => props.kindOf === `textButtonRed` && `color : ${props.theme.basic_Red}`};
  ${(props) => props.kindOf === `textButtonRed` && `font-weight : bold`};
  ${(props) => props.kindOf === `textButtonRed` && `padding: 0`};
  ${(props) => props.kindOf === `textButtonRed` && `text-decoration: underline`};

  // // 텍스트 버튼 (모달창 등등 에서 쓰이는 회색 비활성화 글씨 버튼)
  ${(props) => props.kindOf === `t_disabledButton` && `background : none`};
  ${(props) => props.kindOf === `t_disabledButton` && `color : ${props.theme.grey_v3}`};
  ${(props) => props.kindOf === `t_disabledButton` && `font-weight : bold`};
  ${(props) => props.kindOf === `t_disabledButton` && `padding: 0`};

  // // 모달창 주소검색버튼
  ${(props) => props.kindOf === `modalSearch` && `background : none`};
  ${(props) => props.kindOf === `modalSearch` && `font-weight : bold`};
  ${(props) => props.kindOf === `modalSearch` && `padding: 0`};

  #mr {
    margin-right: 5px ;
  }

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

// 샤옹설명
export const Helper = styled.div<any>`
  display:flex;
  justify-content:center;
  align-items:center;
  width: ${(props) => props.width};
  ${(props) => props.kindOf === `bold` && `font-weight : bold`}
  .ex {
    display : none;
  }
  &:hover .ex {
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    // width: ${(props) => props.width || `360px`};
    min-width: ${(props) => props.minWidth || `360px`};
    background-color:rgba(0,113,244,0.8);
    color:#ffffff;
    text-align:center;
    z-index:999;
    padding:0 20px 20px 20px;
    border-radius:5px;
    // transition:0.5s;
    display: block;
    animation : ${slideUp} 0.5s ease 1;
    }
    // ${(props) => props.hover === true && css`
    //       .ex {
    //         transition:0.5s;
    //       }
    // }
    // `}
  `;

// 회색라인
export const Line = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  height:1px;
  background-color: ${(props) => props.bgColor || `${Theme.grey_v2}`};
  margin: ${(props) => props.margin || `20px 0 0 0`};
`;

export const TableCell = styled.div<any>`
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr};
  background-color: ${(props) => props.bgcolor};
  grid-row-span: ${(props) => props.grs};
  grid-column-span: ${(props) => props.gcs};
  grid-row: ${(props) => props.gr};
  grid-column: ${(props) => props.gc};
  grid-row-start: ${(props) => props.grStart};
  grid-row-end: ${(props) => props.grEnd};
  grid-column-start: ${(props) => props.gcStart};
  grid-column-end: ${(props) => props.gcEnd};
  justify-content: ${(props) => props.ju};
  align-contents: ${(props) => props.ac || `center`};
  align-items: ${(props) => props.al || `center`};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-bottom: ${(props) => props.borderBottom};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding || `4px 7px`};

  ${(props) => props.kindOf === `title` && `background-color : ${props.theme.light_sky_v2};`}
  ${(props) => props.kindOf === `title` && `font-weight : bold;`}
  ${(props) => props.kindOf === `title` && `justify-content : center;`}
  ${(props) => props.kindOf === `secondTitle` && `justify-content : center`}
  `;
