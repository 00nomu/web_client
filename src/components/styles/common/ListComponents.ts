import styled, { css } from "styled-components";
import Theme from "../../../../styles/Theme";
import { appearAnimation, floating } from "../AnimationCommon";

export const ListWrapper = styled.div<any>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

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

  export const ListGrid = styled.div<any>`
  width: 100%;
  display: grid;
  flex-direction:  row;
  align-items: left;
  justify-content: left;

  flex-wrap: wrap;
  transition:0.1s;
  background-color: ${(props) => props.bgColor || `${Theme.basic_white}`};

  border: ${(props) => props.border || `1px solid ${Theme.grey_v2}`};
  grid-template-columns: ${(props) => props.gtc};
  grid-template-rows: ${(props) => props.gtr};

  ${(props) => props.kindOf === `header` && `border-color : ${props.theme.grey_v5};`}
  ${(props) => props.kindOf === `lists` && `border-top : none`}
  // 리스트
  ${(props) => props.kindOf === `lists` && `transition : 0.1s`};
  ${(props) => props.kindOf === `lists` && `background-color : white`};
  ${(props) => props.kindOf === `lists` && `display : grid`};
  ${(props) => props.kindOf === `lists` && `cursor : pointer`};
  &:hover {
    ${(props) => props.hover === true && css`
      animation : ${floating} 0.2s ease 1;
      background-color : ${props.theme.hover};
    `}

    // ${(props) => props.hoverHeader === true && `&:hover {
    //     background-color : ${Theme.light_sky};
    //   }`}
    }
  `;

  // export const List = styled.div<any>`
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // flex-wrap: wrap;
  // `;

// 리스트 셀
export const ListCell = styled.div<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `40px`};
  background-color: ${(props) => props.bgColor};
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
  align-items: ${(props) => props.al || `center`};
  align-content: ${(props) => props.ac || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};

  grid-template-columns: ${(props) => props.gridColumn};
  grid-template-rows: ${(props) => props.gridRow};

  // 리스트 헤더
  ${(props) => props.kindOf === `header` && `background-color : ${props.theme.grey_v2};`}
  ${(props) => props.kindOf === `header` && `border-color : ${props.theme.grey_v5};`}

  // 거래처관리 왼쪽정렬
  ${(props) => props.kindOf === `left` && `align-items : start`};
  ${(props) => props.kindOf === `left` && `margin-left : 10px`};
  ${(props) => props.kindOf === `left` && `justify-content : start`};

  ${(props) => props.kindOf === `lastCell` && `border-right : none`};

  ${(props) => props.kindOf === `null` && `border-right : 1px solid ${Theme.grey_v2}`};
  ${(props) => props.kindOf === `null` && `border-left : 1px solid ${Theme.grey_v2}`};
  ${(props) => props.kindOf === `null` && `border-bottom : 1px solid ${Theme.grey_v2}`};

  ${(props) => props.kindOf === `modalWorkerList` && `height : 30px`};

  ${(props) => props.kindOf === `alignLeft` && `align-items : start`};
  ${(props) => props.kindOf === `alignLeft` && `margin-left : 10px`};
  ${(props) => props.kindOf === `alignLeft` && `justify-content : start`};

  // text-overflow: ellipsis;
  // white-space: nowrap;
  // overflow: hidden;

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
export const ListCellInner = styled.div<any>`
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

${(props) => props.kindOf === `null` && `width : 100%`};
${(props) => props.kindOf === `null` && `height : 100%`};
${(props) => props.kindOf === `null` && `justify-content : center`};
${(props) => props.kindOf === `null` && `color : ${Theme.grey_v4}`};

${(props) => props.kindOf === `numbering` && `color : ${Theme.grey_v3}`};

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