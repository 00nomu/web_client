import styled, { css } from "styled-components";
import Theme from "../../../styles/Theme";



// ###################################
// #########  textarea  ##############
// ###################################

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


// ###################################
// #############  span  ##############
// ###################################

export const LaborTitleSpan = styled.span<any>`
  width: ${(props) => props.width || `100%`};
  height:30px;
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

export const LaborBlankSpan = styled.span<any>`
  width: ${(props) => props.width};
  display: ${(props) => props.display || `inline-block`};
  font-weight: ${(props) => props.fontWeight || `bold`};
  color: ${(props) => props.color || props.theme.light_blue };
  border-bottom: ${(props) => props.borderBottom || `1px solid ${Theme.grey_v2}`};
  text-align : ${(props) => props.textAlign || `center`};
`;

export const MuiInputSpan = styled.span<any>`
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
  z-index:-1;
  width:100%;
  padding:4px;
  height:10px;
  top:1px;
  left:-4px;
}
`;

// 인풋 제목
export const InputTitleSpan = styled.span<any>`
padding:0;
display:block;
margin: ${(props) => props.margin};
width: ${(props) => props.width};
color: ${(props) => props.color || `${Theme.grey_v3}`};

${(props) => props.kindOf === `subText` && `font-size : 13px`};
`;

// 결과값 제목
export const CalcTitleSpan = styled.span<any>`
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
`;

// 결과값
export const CalcValueSpan = styled.span<any>`
padding:0;
display:block;
width: ${(props) => props.width};
color: ${(props) => props.color};
font-weight:bold;

${(props) => props.kindOf === `bold` && `font-weight : bold`}
${(props) => props.kindOf === `normal` && `font-weight : normal`}
`;


// ###################################
// ###############  p  ###############
// ###################################

// 타이틀
export const TitleP = styled.p<any>`
margin:0;
padding:0;
font-weight:bold;
font-size: ${(props) => props.fontSize};
margin: ${(props) => props.margin};
text-align: ${(props) => props.textAlign};
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

// 기본정보타이틀
${(props) => props.kindOf === `modalBoxTitle` && `width : 90px`};

// 로그인 타이틀

${(props) => props.kindOf === `login` && `font-size : 30px`};
${(props) => props.kindOf === `login` && `text-align : center`};
${(props) => props.kindOf === `login` && `line-height : 1.5`};
// ${(props) => props.kindOf === `login` && `color : ${Theme.basic_black}`};

`;

export const TextSpan = styled.span<any>`
color: ${(props) => props.color};
margin: ${(props) => props.margin};
width: ${(props) => props.width};
display:block;

${(props) => props.kindOf === `null` && `font-size : 1.15em`};
${(props) => props.kindOf === `null` && `color : ${Theme.grey_v3}`};

${(props) => props.kindOf === `ml_5` && `margin-left : 5px`};

${(props) => props.kindOf === `mb_10` && `margin-bottom : 10px`};
${(props) => props.kindOf === `mb_40` && `margin-bottom : 40px`};

${(props) => props.kindOf === `modalBoxText` && `width : calc(100% - 90px)`};


`;
