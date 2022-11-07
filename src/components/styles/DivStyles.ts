import styled, { css } from "styled-components";
import Theme from "../../../styles/Theme";
import { appearAnimation, floating, slideUp } from "./AnimationCommon";

export const WholeWrapperDiv = styled.div<any>`
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
    overflow-x: ${(props) => props.overflowX || `auto`};
    overflow-y: ${(props) => props.overflowY};
    display: ${(props) => props.display || `flex`};
    justify-content: ${(props) => props.ju};
    align-contents: ${(props) => props.ac};
    align-items: ${(props) => props.ai};
    flex-direction: ${(props) => props.dr || `column`};
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

    ${(props) => props.kindOf === `modalBg` && `background-color : ${Theme.grey_v1}`};
    ${(props) => props.kindOf === `modalBg` && `padding: 20px`};

    ${(props) => props.kindOf === `utill` && ` justify-content : space-between`};

`;

// 모든 감싸기
export const WrapperDiv = styled.div<any>`
    width: ${(props) => props.width || `100%`};
    height: ${(props) => props.height};
    position: ${(props) => props.position};
    font-size: ${(props) => props.fontSize};
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    background-color: ${(props) => props.bgColor};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    border-top: ${(props) => props.borderTop};
    border-bottom: ${(props) => props.borderBottom};
    border-right: ${(props) => props.borderRight};
    border-left: ${(props) => props.borderLeft};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    margin-right: ${(props) => props.marginRight};
    margin-left: ${(props) => props.marginLeft};
    position: ${(props) => props.position};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    bottom: ${(props) => props.bottom};
    transform: ${(props) => props.transform};
    display: ${(props) => props.display || `flex`};
    justify-content: ${(props) => props.ju};
    align-content: ${(props) => props.ac};
    align-items: ${(props) => props.ai};
    align-self: ${(props) => props.as};
    flex-direction: ${(props) => props.dr};
    flex-wrap: ${(props) => props.wrap};
    grid-template-columns: ${(props) => props.gtc};
    z-index : ${(props) => props.zIndex};
    opacity : ${(props) => props.opacity};
    box-sizing:border-box;

    ${(props) => props.kindOf === `utillButtonBox` && `justify-content : start`};
    ${(props) => props.kindOf === `utillButtonBox` && `align-items : center`};

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
`;

// 모든 그리드
export const GridBoxDiv = styled.div<any>`
    width: ${(props) => props.width || `100%`};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    display: ${(props) => props.display || `grid`};
    grid-template-columns: ${(props) => props.gtc};
    grid-template-rows: ${(props) => props.gtr};
    grid-auto-columns: ${(props) => props.gac};
    grid-auto-rows: ${(props) => props.gar};
    grid-row: ${(props) => props.gr};
    grid-column: ${(props) => props.gc};
    gap: ${(props) => props.gap};
    align-content: ${(props) => props.ac};
    align-items: ${(props) => props.ai};
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    position: ${(props) => props.position};
    overflow-y: ${(props) => props.overflowY};
    font-size: ${(props) => props.fontSize};
    border: ${(props) => props.border};
    border-bottom: ${(props) => props.borderBottom};
    border-top: ${(props) => props.borderTop};
    border-right: ${(props) => props.borderRight};
    border-left: ${(props) => props.borderLeft};

    ${(props) => props.kindOf === `listHeader` && `border-top: 1px solid ${Theme.grey_v5}`};
    ${(props) => props.kindOf === `listHeader` && `border-bottom: 1px solid ${Theme.grey_v5}`};

    ${(props) => props.kindOf === `list` && `border-bottom: 1px solid ${Theme.grey_v2}`};
    ${(props) => props.kindOf === `list` && `cursor: pointer`};

    ${(props) => props.kindOf === `text` && `padding-top: 5px`};

    ${(props) => props.kindOf === `input` && `margin : 25px 0 0 0`};

    ${(props) => props.kindOf === `inputFirst` && `margin : 7px 0 0 0`};
    ${(props) => props.kindOf === `inputLast` && `margin : 25px 0 0 0`};

    ${(props) => props.kindOf === `authoritySetting` && `grid-template-columns : 2fr repeat(6,1fr)`};
    ${(props) => props.kindOf === `authoritySetting` && `gap : 10px`};
    ${(props) => props.kindOf === `authoritySetting` && `width : 500px`};
    ${(props) => props.kindOf === `authoritySetting` && `align-items : center`};
    ${(props) => props.kindOf === `authoritySetting` && `justify-content : center`};
    ${(props) => props.kindOf === `authoritySetting` && `background-color : ${Theme.grey_v1}`};
    ${(props) => props.kindOf === `authoritySetting` && `padding : 10px`};
    ${(props) => props.kindOf === `authoritySetting` && `border-radius : 5px`};

    &:hover {
        ${(props) => props.hover === true && css`
        animation : ${floating} 0.2s ease 1;
        background-color : ${props.theme.hover};
    `}
    ${(props) => props.hoverHeader === true && `&:hover {
            background-color : ${props.theme.light_sky};
            font-weight : bold;
        }
    `}
}
`;

export const DateBoxDiv = styled.div<any>`
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
export const DateInnerDiv = styled.div<any>`
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

export const InputWrapperDiv = styled.div<any>`
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac || `center`};
  justify-content: ${(props) => props.ju};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;


// 샤옹설명
export const HelperDiv = styled.div<any>`
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
export const LineDiv = styled.div<any>`
width: ${(props) => props.width || `100%`};
height:1px;
background-color: ${(props) => props.bgColor || `${Theme.grey_v2}`};
margin: ${(props) => props.margin || `20px 0 0 0`};

${(props) => props.kindOf === `header` && `margin : 0`}
${(props) => props.kindOf === `manage` && `margin-top : 10px`}

`;

export const DatepickerDiv = styled.div<any>`
  width: auto;
  border-radius: 50px;
  z-index:10;

  .datepicker {
      width: 100%;
      height: 30px;
      padding: 5px;
      border: 1px solid #e8e8e8;
  }
`
export const TabMenuWrapperDiv = styled.div<any>`
  height:100%;
  font-size: ${(props) => props.fontSize || `20px`};
  margin-right:30px;
  align-content:center;
  justify-content:center;
  flex-direction:column;

  ${(props) => props.kindOf === `headerTabMenu` && `font-size : 24px;`}

`;

export const TabMenuBarDiv = styled.div<any>`
  width: 100%;
  height: 4px;
  border-radius: 5px;
`;


export const RadioWrapperDiv = styled.div<any>`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BoxInnerTextDiv = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  display: ${(props) => props.display || `flex`};
  justify-content: ${(props) => props.ju || `space-between`};
  align-items: ${(props) => props.ai || `center`};
  flex-direction: ${(props) => props.dr};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  background-color: ${(props) => props.bgColor};
  position: ${(props) => props.position};
  word-break:break-all;

  ${(props) => props.kindOf === `title` && `background-color : ${props.theme.grey_v1}`};
  ${(props) => props.kindOf === `title` && `padding : 10px 12px`};
  ${(props) => props.kindOf === `title` && `margin : 0 0 10px 0`};
  ${(props) => props.kindOf === `title` && `font-weight : bold`};
  ${(props) => props.kindOf === `title` && `border-bottom : 1px solid ${props.theme.grey_v1}`};
  ${(props) => props.kindOf === `title` && `border-top : 1px solid ${props.theme.grey_v1}`};

  ${(props) => props.kindOf === `subtitle` && `color : ${props.theme.grey_v3}`};
  ${(props) => props.kindOf === `subtitle` && `padding : 2px 0`};
  ${(props) => props.kindOf === `subtitle` && `margin : 0 0 5px 0`};
  ${(props) => props.kindOf === `subtitle` && `font-weight : bold`};
  ${(props) => props.kindOf === `subtitle` && `font-size : 0.9em`};
  ${(props) => props.kindOf === `subtitle` && `border-bottom : 1px solid ${props.theme.grey_v1}`};
  ${(props) => props.kindOf === `subtitle` && `border-top : 1px solid ${props.theme.grey_v1}`};

  ${(props) => props.kindOf === `date` && `padding : ${props.theme.grey_v3}`};
  ${(props) => props.kindOf === `date` && `color : ${props.theme.grey_v3}`};

  // 박스안에 사업장
  ${(props) => props.kindOf === `workplace` && `font-size : 20px`};
  ${(props) => props.kindOf === `workplace` && `font-weight : bold`};
  ${(props) => props.kindOf === `workplace` && `width : 80%`};

  // 박스안에 상단 근로자이름
  ${(props) => props.kindOf === `workerName` && `font-size : 18px`};
  ${(props) => props.kindOf === `workerName` && `font-weight : bold`};
  ${(props) => props.kindOf === `workerName` && `width : 40%`};

  // 박스안에 회색
  ${(props) => props.kindOf === `date` && `width : auto`};
  ${(props) => props.kindOf === `date` && `justify-content : end`};
//   ${(props) => props.kindOf === `date` && `width : auto`};


//   회색글씨
  ${(props) => props.kindOf === `greyColor` && `color : ${Theme.grey_v3}`};

  ${(props) => props.kindOf === `privacyAgree` && `width : 70%`};
  ${(props) => props.kindOf === `privacyAgree` && `justify-content : end`};

  ${(props) => props.kindOf === `modalBox` && `justify-content : start`};
  ${(props) => props.kindOf === `modalBox` && `align-items : start`};
  ${(props) => props.kindOf === `modalBox` && `margin-bottom : 5px`};

`;