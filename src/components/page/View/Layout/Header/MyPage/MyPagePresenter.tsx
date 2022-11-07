import { withResizeDetector } from "react-resize-detector";

import {
    WrapperDiv,
    GridBoxDiv,
    Button,
    TitleP,
} from "../../../../../styles/AllStyles";

import {
    Section,
    InnerBox
} from "../../../../../styles/common/ModalComponents";

import { mInput } from "../../../../../styles/mui/mInput";
import { TextField } from '@mui/material/';

import React from "react";

const MyPagePresenter = ({
    width,
    mypageState,
    onChangeHandler,
    // editSubmtHandler,
    setModalOpen
}: any) => {

    const classes = mInput();

    return (
        <Section
            kindOf={`modalBg`}
            position={`relative`}
            width={`auto`}
        >
            <form
            // onSubmit={userSubmitHandler}
            >
                <InnerBox
                    kindOf={`titleBox`}
                    ju={`space-between`}
                >
                    <TitleP
                        kindOf={`18px`}
                    >
                        정보 변경
                    </TitleP>
                    {/* 닫기 */}
                    <Button
                        kindOf={`closeGreyButton`}
                        hoverGrey={true}
                        right={`18px`}
                        onClick={(e: any) => { setModalOpen(false) }}
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
                        {/* 아이디 */}
                        <TextField disabled
                            className={classes.inputFullWidth}
                            label='아이디'
                            size='small'
                            name='user_id'
                            type='text'
                            value={mypageState.user_id}
                            onChange={(e: any) => { }}
                        />

                        {/* 패스워드 */}
                        <TextField disabled
                            className={classes.inputFullWidth}
                            label='아이디'
                            size='small'
                            name='user_id'
                            type={`password`}
                            value={mypageState.user_password}
                            onChange={onChangeHandler}
                        />

                        {/* 성명 */}
                        <TextField disabled
                            className={classes.inputFullWidth}
                            label='사용자 성명'
                            size='small'
                            name={`user_name`}
                            type={`text`}
                            value={mypageState.user_name}
                            onChange={onChangeHandler}
                        />

                        {/* 연락처 */}
                        <TextField disabled
                            className={classes.inputFullWidth}
                            label='연락처'
                            size='small'
                            name={`user_phone`}
                            type={`text`}
                            value={mypageState.user_phone}
                            onChange={onChangeHandler}
                        />

                        {/* 직급 */}
                        <TextField disabled
                            className={classes.inputFullWidth}
                            label='직급'
                            size='small'
                            name={`user_grade`}
                            type={`text`}
                            value={mypageState.user_grade}
                            onChange={onChangeHandler}
                        />

                        {/* 사원번호 */}
                        <TextField disabled
                            className={classes.inputFullWidth}
                            label='직급'
                            size='small'
                            name={`user_number`}
                            type={`text`}
                            value={mypageState.user_number}
                            onChange={onChangeHandler}
                        />
                    </GridBoxDiv>
                </InnerBox>

                {/* 완료버튼 */}
                <WrapperDiv ai={`center`} ju={`center`}>
                    <Button
                        kindOf={`lightBlue`}
                        hover={true}
                        margin={`15px 0`}
                    // onClick={editSubmtHandler}
                    >
                        완료
                    </Button>
                </WrapperDiv>
            </form>
        </Section>
    )
}

export default withResizeDetector(MyPagePresenter);