import { withResizeDetector } from "react-resize-detector";
import {
    Wrapper,
} from "../../styles/CommonComponents3";
import {
    WrapperDiv,
    WholeWrapperDiv,
    TitleP,
    Button,
    LineDiv
} from "../../styles/AllStyles";

import { mInput, CssTextField } from "../../styles/mui/mInput";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../../../styles/Theme";
import { ClipLoader } from "react-spinners";

const DownText = styled.div<any>`
    text-align:center;
    display:block;
    transition:3s;
    animation: ani 1s 1 ease-in-out alternate;
    @keyframes ani{
        0% {
            opacity:0;
            transform:translateY(-20px);
            }
        100% {
            opacity:1;
            transform:translateY(0px);
        }
`

const SigninPresenter = ({
    width,
    id,
    setId,
    pw,
    setPw,
    loginSubmit,
    homeClickHandler,
    buttonLoading
}: any) => {

    const classes = mInput();
    const [inputFocus, setInputFocus] = useState('');
    const [pwdShow, setPwdShow] = useState(false);

    return (
        // 전체 Wrapper
        <WholeWrapperDiv
            ai={`center`}
            ju={`center`}
            width={`100%`}
            height={`100vh`}
            bgColor={Theme.basic_white}
        >
            {/* 로그인 가운데 화면  */}
            <WrapperDiv
                width={`400px`}
                maxWidth={`400px`}
                minHeight={`700px`}
                maxHeight={`800px`}
                padding={`0 25px`}
                height={`auto`}
                ai={`center`}
                bgColor={`white`}
            >
                <WrapperDiv>
                    <form style={{ width: "100%", height: "100%" }} onSubmit={loginSubmit}>
                        {/* 로그인 위에 이미지 */}
                        {/* <Wrapper
                            width={`230px`}
                            height={`60px`}
                            margin={`auto`}
                            onClick={homeClickHandler}
                            cursor={`pointer`}
                            isRelative={true}
                        >
                            <Image
                                src={`/images/ilsa-logo.png`}
                                layout={`fill`}
                                alt={``}
                            />
                        </Wrapper> */}
                        <WrapperDiv
                            ju={`center`}
                            ai={`center`}
                            margin={`0 0 20% 0`}
                            onClick={homeClickHandler}
                        >
                            <DownText>
                                <TitleP kindOf={`login`} color={Theme.light_blue}>
                                    공공노무법인<br /><span style={{ letterSpacing: "17px" }}>대전지</span>사
                                </TitleP>
                                <LineDiv margin={` 15px 0`}></LineDiv>
                                <span style={{ color: Theme.light_blue, letterSpacing: "6px" }}>FOR DESKTOP</span>
                            </DownText>
                        </WrapperDiv>

                        {/* <DownText>
                            <b>일사관리</b>와 함께 <br /> <b>일</b>과 <b>사람</b> 똑똑하게 관리하자!
                        </DownText> */}

                        {/* 로그인 아이디, 비밀번호, 아이디저장 들어가는 부분 */}
                        <WrapperDiv
                            ai={`center`}
                            dr={`column`}
                            margin={`0 0 20% 0`}
                        >
                            {/* 아이디 입력하는 부분 전체 */}
                            {/* <Wrapper
                                height={`50px`}
                                kindOf={'login'}
                                marginBottom={`10px`}
                                bgColor={Theme.grey_v1}
                                radius={`5px`}
                                border={(inputFocus === 'id') ? `1px solid ${Theme.grey_v4}` : `1px solid ${Theme.grey_v5}`}
                                onClick={(e: any) => { setInputFocus('id') }}
                            >
                                <Title
                                    width={`15%`}
                                    height={`100%`}
                                    marginBottom={`0`}
                                    marginTop={`6px`}
                                >
                                    <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                        <g id="그룹_222" data-name="그룹 222" transform="translate(-631 -529)">
                                            <g id="그룹_221" data-name="그룹 221">
                                                <rect id="사각형_751" data-name="사각형 751" width="30" height="30" transform="translate(631 529)" fill="none" />
                                            </g>
                                            <path id="fi-rs-comment-user" d="M12.17,10.142A3.042,3.042,0,1,1,15.212,7.1,3.042,3.042,0,0,1,12.17,10.142ZM17.241,14.2A3.042,3.042,0,0,0,14.2,11.156H10.142A3.042,3.042,0,0,0,7.1,14.2v2.028H9.127V14.2a1.014,1.014,0,0,1,1.014-1.014H14.2A1.014,1.014,0,0,1,15.212,14.2v2.028h2.028ZM12.179,24a2.038,2.038,0,0,1-1.357-.516l-3.8-3.2H0V3.042A3.042,3.042,0,0,1,3.042,0H21.3A3.042,3.042,0,0,1,24.34,3.042V20.283H17.39l-3.9,3.225A1.967,1.967,0,0,1,12.179,24ZM2.028,18.255H7.762l4.386,3.7,4.513-3.7h5.65V3.042A1.014,1.014,0,0,0,21.3,2.028H3.042A1.014,1.014,0,0,0,2.028,3.042Z" transform="translate(633.83 532)" fill="#cecece" />
                                        </g>
                                    </svg>
                                </Title>
                                <TextInput
                                    width={`85%`}
                                    height={`100%`}
                                    bgColor={Theme.grey_v1}
                                    type={'id'}
                                    placeholder={`아이디`}
                                    value={id}
                                    onChange={(e: any) => { setId(e.target.value); setInputFocus('id'); }}
                                >
                                </TextInput>
                            </Wrapper> */}



                            <CssTextField
                                style={{
                                    width: "100%",
                                    marginBottom: "20px"
                                }}
                                label="아이디"
                                id="custom-css-outlined-input"
                                onClick={(e: any) => { setInputFocus('id') }}
                                type={'id'}
                                value={id}
                                onChange={(e: any) => { setId(e.target.value); setInputFocus('id'); }}
                            />
                            <CssTextField
                                style={{
                                    width: "100%"
                                }}
                                label="비밀번호"
                                id="custom-css-outlined-input"
                                value={pw}
                                InputProps={{
                                    // startAdornment: (
                                    //     <InputAdornment className={classes.IconStyle} position="start">
                                    //         <LockOutlinedIcon ></LockOutlinedIcon>
                                    //     </InputAdornment>
                                    // ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={(e: any) => { setPwdShow(!pwdShow) }}
                                                edge="end"
                                            >
                                                {pwdShow ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                variant='outlined'
                                type={pwdShow ? 'text' : 'password'}
                                color='success'
                                name='password'
                                onChange={(e: any) => { setPw(e.target.value); setInputFocus('pw'); }}
                            />



                            {/* 비밀번호 입력하는 부분 전체 */}
                            {/* <Wrapper
                                height={`50px`}
                                kindOf={'login'}
                                bgColor={Theme.grey_v1}
                                radius={`5px`}
                                border={(inputFocus === 'pw') ? `1px solid ${Theme.grey_v4}` : `1px solid ${Theme.grey_v5}`}
                                onClick={(e: any) => { setInputFocus('pw') }}
                            >
                                <Title
                                    width={`15%`}
                                    height={`100%`}
                                    marginBottom={`0`}
                                    marginTop={`6px`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                        <g id="그룹_221" data-name="그룹 221" transform="translate(-597 -529)">
                                            <rect id="사각형_752" data-name="사각형 752" width="30" height="30" transform="translate(597 529)" fill="none" />
                                            <g id="_01_align_center" data-name="01 align center" transform="translate(600 532)">
                                                <path id="패스_190" data-name="패스 190" d="M19,8V7A7,7,0,1,0,5,7V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM7,7A5,5,0,1,1,17,7V8H7ZM20,21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20Z" fill="#cecece" />
                                                <rect id="사각형_748" data-name="사각형 748" width="2" height="4" transform="translate(11 14)" fill="#cecece" />
                                            </g>
                                        </g>
                                    </svg>
                                </Title>
                                <TextInput
                                    width={`85%`}
                                    height={`100%`}
                                    bgColor={Theme.grey_v1}
                                    type={'password'}
                                    placeholder={`비밀번호`}
                                    value={pw}
                                    onChange={(e: any) => { setPw(e.target.value); setInputFocus('pw'); }}
                                >
                                </TextInput>
                            </Wrapper> */}

                            {/* 체크박스 아이디 저장 부분 */}
                            {/* <Wrapper
                                width={`80%`}
                                height={`20%`}
                                border={`1px solid red`}
                            >
                                <Title
                                    width={`100%`}
                                    height={`100%`}
                                    fontSize={`10px`}
                                    tl={`right`}
                                >
                                </Title>
                            </Wrapper> */}

                        </WrapperDiv>

                        {/* 로그인, 회원가입 버튼 들어가는 곳 */}
                        <WrapperDiv dr={`column`} ai={`center`}>
                            {/* 로그인 버튼 */}
                            <Button
                                width={`90%`}
                                kindOf={'login'}
                                hover={true}
                                type="submit"
                                margin={`0 0 10px 0`}
                            >
                                {
                                    buttonLoading ?
                                        <ClipLoader
                                            loading={true}
                                            color={Theme.basic_white}
                                        />
                                        :
                                        '로그인'
                                }
                            </Button>
                        </WrapperDiv>
                        <Wrapper
                            width={`auto`}
                            marginTop={`100px`}
                            onClick={homeClickHandler}
                            textDecoration={`underLine`}
                            color={Theme.grey_v5}
                        >
                            홈으로 이동
                        </Wrapper>
                    </form>
                </WrapperDiv>

            </WrapperDiv>

        </WholeWrapperDiv>
    )
}

export default withResizeDetector(SigninPresenter);