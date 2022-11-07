import {
    WrapperDiv,
    GridBoxDiv,
    Button,
    TitleP,
} from "../../../styles/AllStyles";

import {
    Section,
    InnerBox
} from "../../../styles/common/ModalComponents";
import { mInput } from "../../../styles/mui/mInput";
import { TextField } from '@mui/material/';

import React from "react";
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
                        top={`20px`}
                        right={`18px`}
                        onClick={(e: any) => {
                            commonDispatch({ name: "modalOpen", value: false });
                            dispatch({ type: "init" })
                        }}
                    >
                        <svg id="close" data-name="01 align center" xmlns="http://www.w3.org/2000/svg" width="13.764" height="13.764" viewBox="0 0 13.764 13.764">
                            <path id="패스_189" data-name="패스 189" d="M13.764.811,12.953,0,6.882,6.071.811,0,0,.811,6.071,6.882,0,12.953l.811.811L6.882,7.693l6.071,6.071.811-.811L7.693,6.882Z" />
                        </svg>
                    </Button>
                </InnerBox>


                {/* 하얀색 박스 */}
                <InnerBox style={{ paddingBottom: '0' }}>
                    {/* 입력 부분 */}
                    <GridBoxDiv
                        gtc={`repeat(2, 1fr)`}
                        gap={`10px`}
                    >
                        <TextField
                            disabled={modalKinds === '추가' ? false : true}
                            className={classes.inputFullWidth}
                            label='아이디'
                            size='small'
                            name='muser_id'
                            type='text'
                            value={state.muser_id}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                        <TextField
                            className={classes.inputFullWidth}
                            label='패스워드'
                            size='small'
                            name='muser_password'
                            type='text'
                            value={state.muser_password}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                        <TextField
                            className={classes.inputFullWidth}
                            label='사용자 성명'
                            size='small'
                            name='muser_name'
                            type='text'
                            value={state.muser_name}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                        <TextField
                            className={classes.inputFullWidth}
                            label='연락처'
                            size='small'
                            name='muser_tel'
                            type='text'
                            value={state.muser_tel}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                        <TextField
                            className={classes.inputFullWidth}
                            label='포인트'
                            size='small'
                            name='muser_point'
                            type='number'
                            value={state.muser_point}
                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                        />

                    </GridBoxDiv>
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
        </Section>
    )
}

export default React.memo(ModalPresenter);