import styled, { css } from "styled-components";
import Theme from "../../../styles/Theme";

// 체크박스
export const CheckBoxInput = styled.input<any>`
    margin: 0;
    padding: 0;
    height:16px;
    margin-right: ${(props) => props.marginRight || `2px`};
`;

// 라디오버튼
export const RadioInput = styled.input<any>`
    display: flex;
    width: 16px;
    height: 16px;
    margin: 0;
    margin-right: 4px;
`;

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
    border-radius : 0

    &:focus {
        border: 1px solid #0071f4;
        transition:0.5s;
    }
    ::placeholder {
        color: #a5a5a5;
    }
    :disabled { background: #ffffff; }
`;
