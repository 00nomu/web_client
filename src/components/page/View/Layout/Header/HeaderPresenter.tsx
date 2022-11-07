import { withResizeDetector } from "react-resize-detector";

import {
    HeaderWrapper,
    HeaderInner,
    HamMenuWrapper,
    HamMenuBars,
    LogoWrapper,
    LogoInner,
    MyPageButton,
    MyPageButtonInner
} from "../LayoutComponents";
import {
    WrapperDiv,
} from "../../../../styles/AllStyles";

import React from "react";
import styled from "styled-components";
import Theme from '../../../../../../styles/Theme'
import Image from "next/image";


import router from "next/router";

import Modal from "react-modal"
import MyPage from "./MyPage";

export const HeaderWrap = styled.div<any>`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  padding-bottom: ${(props) => props.paddingBottom};
  color: ${(props) => props.color};
  border-bottom: ${(props) => props.borderBottom};
  flex-direction: ${(props) => props.dr};
  align-items: ${(props) => props.al};
  text-align: ${(props) => props.tl};
  line-height: ${(props) => props.lineHeight};
  justify-content: ${(props) => props.ju};
`;


// const myPageItem = styled.div<any>`
//     bgColor={Theme.basic_white}
//     border={`1px solid ${Theme.grey_v2}`}
//     shadow={`0 0 10px rgba(0,0,0,0.1)`}
//     transition={`0.5s`}
//     isAbsolute={true}
//     bottom={`-80px`}
//     radius={`5px`}
//     overflow={`hidden`}
// `;

const HeaderPresenter = ({
    width,
    barClickHandler,
    LogoutHandler,
    headerOpen,
    setHeaderOpen,
    modalOpen,
    setModalOpen,
    modalProps
}: any) => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                {/* 햄버거버튼&로고*/}
                <WrapperDiv
                    width={`5%`}
                    height={`100%`}
                    ac={`start`}
                >
                    <HamMenuWrapper
                        width={`40px`}
                        style={{ cursor: "pointer" }}
                        onClick={barClickHandler}
                    >
                        <HamMenuBars></HamMenuBars>
                        <HamMenuBars></HamMenuBars>
                        <HamMenuBars
                            marginBottom={`0`}
                        ></HamMenuBars>
                    </HamMenuWrapper>
                </WrapperDiv>
                {/* 로고 */}
                <LogoWrapper
                    width={`20%`}
                    onClick={(e: any) => { router.push(`/view/customer`) }}
                >
                    {/* <LogoInner>
                            <Image
                                src={`/images/ilsa-logo.png`}
                                layout={`fill`}
                                alt={``}
                            />
                        </LogoInner> */}
                    <span style={{ color: Theme.light_blue, fontWeight: "bold", fontSize: 20 }}>
                        공공노무법인 대전지사
                    </span>
                </LogoWrapper>
                {/* menu */}
                <MyPageButton>
                    <MyPageButtonInner
                        onClick={(e: any) => { setHeaderOpen(!headerOpen) }}
                    >
                        <b>{modalProps.tokenValue.isLogined.user_name}</b>&nbsp;님&nbsp;
                        {headerOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="4.704" viewBox="0 0 10 4.704">
                                <g id="_01_align_center" data-name="01 align center" transform="translate(-5 -9)">
                                    <path id="패스_406" data-name="패스 406" d="M5,9H15l-4.5,4.495a.714.714,0,0,1-1.01,0Z" fill="#2a2d2f" />
                                </g>
                            </svg>
                            :

                            <svg id="_01_align_center" data-name="01 align center" xmlns="http://www.w3.org/2000/svg" width="10" height="4.704" viewBox="0 0 10 4.704">
                                <path id="패스_406" data-name="패스 406" d="M5,13.7H15L10.5,9.209a.714.714,0,0,0-1.01,0Z" transform="translate(-5 -9)" fill="#2a2d2f" />
                            </svg>}
                    </MyPageButtonInner>

                    {/* 열렸을때 */}
                    {headerOpen ?
                        <WrapperDiv
                            dr={`column`}
                            ai={`center`}
                            ju={`center`}
                            display={`block`}
                            bgColor={Theme.basic_white}
                            border={`1px solid ${Theme.grey_v2}`}
                            shadow={`0 0 10px rgba(0,0,0,0.1)`}
                            position={`absolute`}
                            bottom={`-40px`}
                            radius={`5px`}
                            overflow={`hidden`}
                            zIndex={`100`}

                        >
                            {/* <WrapperDiv
                                ai={`center`}
                                ju={`center`}
                                padding={`10px`}
                                hoverHeader={true}
                                bgColor={`basic_white`}
                                cursor={`pointer`}
                                zIndex={`101`}
                                onClick={(e: any) => { setModalOpen(!modalOpen) }}
                            >
                                정보 변경
                            </WrapperDiv> */}
                            <WrapperDiv
                                ai={`center`}
                                ju={`center`}
                                padding={`10px`}
                                hoverHeader={true}
                                cursor={`pointer`}
                                zIndex={`101`}
                                onClick={LogoutHandler}
                            >
                                로그아웃
                            </WrapperDiv>
                        </WrapperDiv>
                        :
                        null}
                </MyPageButton>
                {/* <Modal
                    isOpen={modalOpen}
                    onRequestClose={() => setModalOpen(false)}
                    shouldCloseOnOverlayClick={false}
                    style={{
                        overlay: {
                            position: "fixed",
                            zIndex: 1020,
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            background: "rgba(0, 0, 0, 0.6)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        content: {
                            background: "#F4F4F4",
                            width: "500px",
                            // maxWidth: "1000px",
                            // minWidth: "300px",
                            top: 0,
                            overflowY: "auto",
                            position: "relative",
                            border: "none",
                            borderRadius: "0.3rem",
                            inset: 0,
                            padding: "0px",
                            margin: "0px 2%",
                            boxShadow: "0px 0px 16px rgba(0,0,0,0.2)"
                        },
                    }}>
                    {modalOpen ? <MyPage {...modalProps} /> : null}
                </Modal> */}


            </HeaderInner>
        </HeaderWrapper>
    )
}

export default withResizeDetector(HeaderPresenter);