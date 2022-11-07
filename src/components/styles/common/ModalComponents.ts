

import styled, { css } from "styled-components";
import Theme from "../../../../styles/Theme";

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