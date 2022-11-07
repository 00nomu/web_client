import styled, { css } from "styled-components";
import Theme from "../../../../../styles/Theme";

export const HeaderWrapper =styled.div<any>`
    width: 100%;
    height: 5%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: white;
    border-bottom: 1px solid #e8e8e8;
    box-shadow: 0 0 20px rgba(0,0,0,10px);
}
`;
export const HeaderInner = styled.div<any>`
    width: 97%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const HamMenuWrapper = styled.a<any>`
    width: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: start;
    justify-content: center;
    flex-wrap: wrap;
    width: ${(props) => props.width || `5%`};

    padding: ${(props) => props.padding};
    overflow: ${(props) => (props.isOverflow ? `auto` : props.overflow || ``)};
    background-image: ${(props) => props.bgImg};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: ${(props) => props.attachment || `fixed`};
    background-position: center;
    transition: 0.5s;
    cursor: ${(props) => props.cursor};
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


// 햄버거버튼
export const HamMenuBars = styled.span<any>`
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

  export const LogoInner =styled.div<any>`
    position: absolute;
    width: 153px;
    max-width: 170px;
    height: 40px;
    max-height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    margin: auto;
    cursor: pointer;
  `;

  export const LogoWrapper = styled.div<any> `
  width: ${(props) => props.width || `10%`};
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor:pointer;
    // background: white;
    @media only screen and (max-width: 1000px) {
        span {
            font-size: 15px;
        }
    }
  `;

  export const MyPageButton = styled.div<any>`
  width: 130px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    cursor: pointer;
    text-align: right;
  `;

  export const MyPageButtonInner = styled.div<any>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: white;
  color: #7b7b7b;
  `