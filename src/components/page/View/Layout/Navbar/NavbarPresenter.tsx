import {
    Wrapper,
    LinkClick,
    HamBtn
} from "../../../../styles/CommonComponents3";
import React from "react";

import styled, { keyframes } from "styled-components";

const NavAnimation = keyframes`
  0%{
    width : 0px;
    opacity: 0;
  }
  100%{
    width : 330px;
    opacity: 1;
  }
`

const NavDiv = styled.div<any>`
  width: 330px;
  height: 100vh;
  font-weight: 400;
  background: #0071f4;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  position: absolute;
  display: ${props => props.barOpen ? `` : `none`};
  animation: ${NavAnimation} 1s;
  text-align: center;
  z-index: 2;
//   padding:100px 0;
`

const NavItem = styled.div<any>`
  width: ${(props) => props.width || `330px`};
  height: ${(props) => props.height || `100%`};
  padding: ${(props) => props.padding || `15px 0px 15px 0px;`};
  text-align: ${(props) => props.textAlign};
  color: white;
  cursor: pointer;
  transition: 0.1s;

  ${(props) => props.hover === true && `&:hover {
    background-color : white;
    color : navy;
    font-weight: bold;
    }`}
`


const NavbarPresenter = ({
    width,
    barOpen,
    setBarOpen,
    managerItemList,
    NaviClickHandler,
    isLogined,
    barRef
}: any) => {

    return (
        <NavDiv ref={barRef} barOpen={barOpen}>
            <div style={{ marginBottom: "80px" }}>
                {/* 햄버거버튼&로고*/}
                <Wrapper
                    style={{ cursor: "pointer" }}
                    width={`40px`}
                    height={`100%`}
                    // bgColor={`white`}
                    marginLeft={`28px`}
                    marginTop={`5%`}
                >
                    <LinkClick
                        width={`40px`}
                        onClick={() => { setBarOpen(!barOpen) }}
                    >
                        <HamBtn
                            transform={`translateY(14px) rotate(45deg)`}
                            kindOf={`close`}
                        ></HamBtn>
                        <HamBtn
                            opacity={`0`}
                        ></HamBtn>
                        <HamBtn
                            marginBottom={`0`}
                            transform={`translateY(-14px) rotate(-45deg)`}
                            kindOf={`close`}
                        ></HamBtn>
                    </LinkClick>
                </Wrapper>
            </div>
            {((isLogined.user_auth < 2) && isLogined.auth_menu_user_customer > 0) ?
                <div>
                    <NavItem
                        hover={true}
                        id={'거래처관리'}
                        onClick={NaviClickHandler}
                    >
                        거래처 관리
                    </NavItem>
                </div>
                : null}
            {(isLogined.auth_menu_warrant > 0) ?
                <div>
                    <NavItem
                        hover={true}
                        id={'경정청구'}
                        onClick={NaviClickHandler}
                    >
                        경정청구
                    </NavItem>
                </div>
                : null}
            {((isLogined.user_auth < 2) && isLogined.auth_menu_user_info > 0) ?
                <div>
                    <NavItem
                        hover={true}
                        id={'사용자관리'}
                        onClick={NaviClickHandler}
                    >
                        사용자 관리
                    </NavItem>
                </div>
                : null}
            {((isLogined.user_auth < 2) && isLogined.auth_menu_muser_info > 0) ?
                <div>
                    <NavItem
                        hover={true}
                        id={'모바일사용자관리'}
                        onClick={NaviClickHandler}
                    >
                        모바일사용자 관리
                    </NavItem>
                </div>
                : null}


            {(isLogined.user_auth === 0) ? managerItemList.map((item: any, index: any) => (
                <div
                    key={index}
                >
                    <NavItem
                        hover={true}
                        id={item}
                        onClick={NaviClickHandler}
                    >
                        {item}
                    </NavItem>
                </div>
            )) : null}
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "20px",
                    color: "#014a9f"
                }}
            >
                Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
            </div>


        </NavDiv>
    )

}

export default NavbarPresenter;