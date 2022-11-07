import styled, { css } from "styled-components";
import Theme from "../../../styles/Theme";

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
