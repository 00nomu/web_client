import styled, { css } from "styled-components";
import Theme from "../../../styles/Theme";

// 버튼
export const Button = styled.button<any>`
    width: ${(props) => props.width};
    display: ${(props) => props.display || `flex`};
    justify-content: ${(props) => props.ju || `center`};
    align-items: ${(props) => props.al ||`center`};
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

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

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

    // 로그인
    ${(props) => props.kindOf === `login` && `background : ${props.theme.light_blue}`};
    ${(props) => props.kindOf === `login` && `color : #ffffff`};
    ${(props) => props.kindOf === `login` && `border-radius : 5px`};
    ${(props) => props.kindOf === `login` && `height : 50px`};
    ${(props) => props.kindOf === `login` && `font-weight : bold`};
    ${(props) => props.kindOf === `login` && `font-size : 16px`};

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

    // 검색 버튼
    ${(props) => props.kindOf === `searchGreyButton` && `border-radius : 0`};
    ${(props) => props.kindOf === `searchGreyButton` && `background : ${props.theme.grey_v5}`};
    ${(props) => props.kindOf === `searchGreyButton` && `border : 1px solid ${props.theme.grey_v3}`};
    ${(props) => props.kindOf === `searchGreyButton` && `width : 30px `};
    ${(props) => props.kindOf === `searchGreyButton` && `height : 30px `};
    ${(props) => props.kindOf === `searchGreyButton` && `padding : 0`};
    ${(props) => props.kindOf === `searchGreyButton` && `margin : 0`};

    // 닫기 버튼
    ${(props) => props.kindOf === `closeGreyButton` && `border-radius : 0`};
    ${(props) => props.kindOf === `closeGreyButton` && `background : ${props.theme.grey_v5}`};
    ${(props) => props.kindOf === `closeGreyButton` && `border : 1px solid ${props.theme.grey_v3}`};
    ${(props) => props.kindOf === `closeGreyButton` && `width : 30px `};
    ${(props) => props.kindOf === `closeGreyButton` && `height : 30px `};
    ${(props) => props.kindOf === `closeGreyButton` && `padding : 0`};
    ${(props) => props.kindOf === `closeGreyButton` && `margin : 0`};
    ${(props) => props.kindOf === `closeGreyButton` && `position : absolute`};
    // ${(props) => props.kindOf === `closeGreyButton` && `top : 20px`};

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