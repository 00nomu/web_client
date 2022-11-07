import { withResizeDetector } from "react-resize-detector";

import {
    WrapperDiv,
    GridBoxDiv,
    Button,
    TitleP,
    LineDiv
} from "../../../styles/AllStyles";
import {
    Section,
    Article,
    InnerBox
} from "../../../styles/common/ModalComponents";

import { TextField } from "@mui/material";
import { mInput } from "../../../styles/mui/mInput";


import React from "react";
import Theme from '../../../../../styles/Theme'
import dataSubmitHandler from "../../../../modules/dataSubmitHandler";

const ModalPresenter = ({
    width,
    props
}: any) => {

    const {
        state,
        dispatch,
        commonState,
        commonDispatch
    } = props;

    const {
        componentTitle,
        modalKinds
    } = commonState;

    const classes = mInput();

    return (
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
            <Section overflowY={`hidden`} position={`relative`}>
                <InnerBox
                    kindOf={`titleBox`}
                    ju={`space-between`}
                >
                    <TitleP kindOf={`18px`} >
                        업체 {modalKinds}
                    </TitleP>

                    {/* 닫기 */}
                    <Button
                        kindOf={`closeGreyButton`}
                        hoverGrey={true}
                        right={`18px`}
                        onClick={(e: any) => { commonDispatch({ name: "modalOpen", value: false }) }}
                    >
                        <svg id="close" data-name="01 align center" xmlns="http://www.w3.org/2000/svg" width="13.764" height="13.764" viewBox="0 0 13.764 13.764">
                            <path id="패스_189" data-name="패스 189" d="M13.764.811,12.953,0,6.882,6.071.811,0,0,.811,6.071,6.882,0,12.953l.811.811L6.882,7.693l6.071,6.071.811-.811L7.693,6.882Z" />
                        </svg>
                    </Button>
                </InnerBox>
                <InnerBox>
                    <Article kindOf={`scroll`}>
                        <Article kindOf={`padding-r15`}>
                            <WrapperDiv dr={`column`}>
                                <GridBoxDiv
                                    kindOf={`inputFirst`}
                                >
                                    <TextField
                                        className={classes.inputFullWidth}
                                        label={`상호`}
                                        type='text'
                                        color='primary'
                                        size='small'
                                        name={`company_name`}
                                        value={state.company_name}
                                        onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                    />
                                </GridBoxDiv>
                                <GridBoxDiv
                                    gtc={`repeat(2, 1fr)`}
                                    gap={`10px`}
                                    kindOf={`input`}
                                >
                                    <TextField
                                        className={classes.inputProps}
                                        label={`대표자`}
                                        type='text'
                                        color='primary'
                                        size='small'
                                        name={`company_owner_name`}
                                        value={state.company_owner_name}
                                        onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                    />
                                    <TextField
                                        className={classes.inputProps}
                                        label={`연락처`}
                                        type='text'
                                        color='primary'
                                        size='small'
                                        name={`company_tel`}
                                        value={state.company_tel}
                                        onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                    />
                                </GridBoxDiv>
                                <GridBoxDiv
                                    kindOf={`input`}
                                >
                                    <TextField
                                        className={classes.inputFullWidth}
                                        label={`사업자등록번호`}
                                        type='text'
                                        color='primary'
                                        size='small'
                                        name={`company_code`}
                                        value={state.company_code}
                                        onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                    />
                                </GridBoxDiv>
                                <GridBoxDiv
                                    gtc={`repeat(2, 1fr)`}
                                    gap={`25px 10px`}
                                    kindOf={`input`}
                                >
                                </GridBoxDiv>
                                <LineDiv margin={`20px 0`}></LineDiv>
                                <TextField fullWidth
                                    id="outlined-multiline-static"
                                    label="메모"
                                    multiline
                                    rows={3}
                                    name={`company_memo`}
                                    value={state.company_memo}
                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                />
                                <WrapperDiv ai={`center`} ju={`center`}>
                                    <Button
                                        hover={true}
                                        kindOf={`lightBlue`}
                                        margin={Theme.SaveButtonMargin}
                                        type={`submit`}
                                    >
                                        저장
                                    </Button>
                                </WrapperDiv>
                            </WrapperDiv>
                        </Article>
                    </Article>
                </InnerBox>
            </Section>
        </form>
    )
}

export default React.memo(withResizeDetector(ModalPresenter));