import {
    WrapperDiv,
    GridBoxDiv,
    Button,
    TitleP,
    LineDiv
} from "../../../styles/AllStyles";

import {
    Section,
    InnerBox
} from "../../../styles/common/ModalComponents";
import { mInput } from "../../../styles/mui/mInput";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material/';


import React, { useState } from "react";
import Theme from '../../../../../styles/Theme'
import { userGradeData } from "../../../../Lib/array/user";
import AuthManageComponent from "./AuthManageComponent";

import Modal from "react-modal"
import CompanySelectModal from "./CompanySelectModal";
import dataSubmitHandler from "../../../../modules/dataSubmitHandler";

const ModalPresenter = ({
    width,
    modalProps,
}: any) => {

    const {
        commonState,
        commonDispatch,

        state,
        dispatch,

    } = modalProps;

    const {
        componentTitle,
        modalKinds
    } = commonState;

    const classes = mInput();

    const {
        auth_menu_user_customer,
        auth_menu_user_info,
        auth_menu_muser_info,
        auth_menu_warrant
    } = modalProps.loginData;

    const [companyModalOpen, setCompanyModalOpen] = useState(false);


    const companyProps = {
        ...modalProps,
        companyModalOpen,
        setCompanyModalOpen
    }


    return (
        <Section
            kindOf={`modalBg`}
            position={`relative`}
            width={`auto`}
        >
            <form onSubmit={
                async (e: any) => {
                    await dataSubmitHandler(
                        e,
                        componentTitle,
                        commonState,
                        commonDispatch,
                        state,
                        dispatch,
                    )
                }
            } >
                {/* Header 추가일 땐 사용자 추가, 수정일 땐 사용자 수정 */}

                <InnerBox
                    kindOf={`titleBox`}
                    ju={`space-between`}
                >
                    <TitleP
                        kindOf={`18px`}
                    >
                        사용자 {modalKinds}
                    </TitleP>
                    {/* 닫기 */}
                    <Button
                        kindOf={`closeGreyButton`}
                        hoverGrey={true}
                        right={`18px`}
                        onClick={(e: any) => { commonDispatch({ name: "modalOpen", value: false }); }}
                    >
                        <svg id="close" data-name="01 align center" xmlns="http://www.w3.org/2000/svg" width="13.764" height="13.764" viewBox="0 0 13.764 13.764">
                            <path id="패스_189" data-name="패스 189" d="M13.764.811,12.953,0,6.882,6.071.811,0,0,.811,6.071,6.882,0,12.953l.811.811L6.882,7.693l6.071,6.071.811-.811L7.693,6.882Z" />
                        </svg>
                    </Button>
                </InnerBox>

                <InnerBox style={{ paddingBottom: '0' }}>
                    {(modalKinds === "추가") ?
                        <Button
                            kindOf={`lightBlue`}
                            hover={true}
                            marginBottom={`15px`}
                            type={`button`}
                            onClick={(e: any) => { setCompanyModalOpen(true); }}
                        >

                            <svg id="svg" data-name="그룹 878" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                <g id="그룹_879" data-name="그룹 879">
                                    <rect id="사각형_687" data-name="사각형 687" width="12" height="1.5" transform="translate(0 5)" fill="#fff" />
                                    <rect id="사각형_688" data-name="사각형 688" width="12" height="1.5" transform="translate(6.5) rotate(90)" fill="#fff" />
                                </g>
                            </svg>
                            업체 선택
                        </Button>
                        : null}
                    {/* 입력 부분 */}
                    <GridBoxDiv
                        gtc={`repeat(2, 1fr)`}
                        gap={`10px`}
                    >
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            disabled={true}
                            className={classes.inputFullWidth}
                            label='사업자 번호'
                            size='small'
                            name='user_company_code'
                            type='text'
                            value={state.user_company_code}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            disabled={true}
                            className={classes.inputFullWidth}
                            label='상호'
                            size='small'
                            name='company_name'
                            type='text'
                            value={state.company_name}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />
                        <TextField
                            className={classes.inputFullWidth}
                            label='아이디'
                            size='small'
                            name='user_id'
                            type='text'
                            value={state.user_id}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                        <TextField
                            className={classes.inputFullWidth}
                            label='패스워드'
                            size='small'
                            name='user_password'
                            type='text'
                            value={state.user_password}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                        <TextField
                            className={classes.inputFullWidth}
                            label='사용자 성명'
                            size='small'
                            name='user_name'
                            type='text'
                            value={state.user_name}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                        <TextField
                            className={classes.inputFullWidth}
                            label='연락처'
                            size='small'
                            name='user_phone'
                            type='text'
                            value={state.user_phone}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                        <FormControl
                            className={classes.inputFullWidth}

                        >
                            <InputLabel id="demo-multiple-name-label">직급</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                label='직급'
                                id='직급'
                                name={`user_grade`}
                                size='small'
                                value={state.user_grade}
                                onChange={(e: any) => { dispatch({ type: 'grade', name: e.target.name, value: e.target.value }) }}
                            >
                                {userGradeData.map((item: any, i: any) => (
                                    <MenuItem
                                        key={i}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            className={classes.inputFullWidth}
                            label='사원번호'
                            size='small'
                            name='user_number'
                            type='text'
                            value={state.user_number}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                    </GridBoxDiv>
                    <LineDiv></LineDiv>
                    {/* 라디오박스 부분 */}
                    <WrapperDiv dr={`column`} marginTop={`15px`}>
                        <TitleP
                            color={Theme.light_blue}
                            kindOf={`16px`}
                        >
                            권한설정
                        </TitleP>
                        <WrapperDiv padding={`20px 0 0 0`}>
                            <GridBoxDiv
                                gtr={`repeat(7,1fr)`}
                                gap={`10px`}
                                dr={`column`}
                            >
                                <AuthManageComponent
                                    authTitle={'거래처관리'}
                                    authState={auth_menu_user_customer}
                                    authStateString={`auth_menu_user_customer`}
                                    state={state}
                                    dispatch={dispatch}
                                />
                                <AuthManageComponent
                                    authTitle={'사용자관리'}
                                    authState={auth_menu_user_info}
                                    authStateString={`auth_menu_user_info`}
                                    state={state}
                                    dispatch={dispatch}
                                />
                                <AuthManageComponent
                                    authTitle={'모바일사용자관리'}
                                    authState={auth_menu_muser_info}
                                    authStateString={`auth_menu_muser_info`}
                                    state={state}
                                    dispatch={dispatch}
                                />
                                <AuthManageComponent
                                    authTitle={'경정청구'}
                                    authState={auth_menu_warrant}
                                    authStateString={`auth_menu_warrant`}
                                    state={state}
                                    dispatch={dispatch}
                                />


                            </GridBoxDiv>
                        </WrapperDiv>

                    </WrapperDiv>
                </InnerBox>
                {/* 완료버튼 */}
                <WrapperDiv ai={`center`} ju={`center`}>
                    <Button
                        kindOf={`lightBlue`}
                        hover={true}
                        margin={`15px 0`}
                    >
                        완료
                    </Button>
                </WrapperDiv>
            </form>
            <Modal
                isOpen={companyModalOpen}
                onRequestClose={() => setCompanyModalOpen(false)}
                shouldCloseOnOverlayClick={false}
                style={{
                    overlay: {
                        position: "fixed",
                        zIndex: 1020,
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        background: "#F4F4F4",
                        width: "80vh",
                        top: 0,
                        overflowY: "auto",
                        position: "relative",
                        border: "none",
                        borderRadius: "0.3rem",
                        inset: 0,
                        padding: "0px",
                        boxShadow: "0px 0px 16px rgba(0,0,0,0.2)"
                    },
                }}>
                {companyModalOpen ? <CompanySelectModal {...companyProps} /> : null}
            </Modal>
        </Section>
    )
}

export default React.memo(ModalPresenter);