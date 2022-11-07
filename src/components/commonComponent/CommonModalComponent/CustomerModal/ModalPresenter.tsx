import {
    WholeWrapperDiv,
    WrapperDiv,
    GridBoxDiv,
    Button,
    TitleP,
} from "../../../styles/AllStyles";
import React from "react";

import WorkerComponent from './WokerComponent'
import CustomerComponent from "./CustomerComponent";
import { ClipLoader } from "react-spinners";
import Theme from "../../../../../styles/Theme";
import dataSubmitHandler from "../../../../modules/dataSubmitHandler";

const ModalPresenter = ({
    modalProps,
}: any) => {

    const {
        commonState,
        commonDispatch,

        state,
        dispatch,

        fileState,
        fileDispatch
    } = modalProps;

    const {
        componentTitle,
        modalKinds,
        buttonLoading,
    } = commonState;

    return (
        <WholeWrapperDiv
            kindOf={`modalBg`}
            position={`relative`}
        >
            {/* 창닫기 */}
            <Button
                hoverGrey={true}
                kindOf={`closeGreyButton`}
                top={`20px`}
                right={`20px`}
                onClick={(e: any) => { commonDispatch({ name: "modalOpen", value: false }); }}
            >
                <svg id="close" data-name="01 align center" xmlns="http://www.w3.org/2000/svg" width="13.764" height="13.764" viewBox="0 0 13.764 13.764">
                    <path id="패스_189" data-name="패스 189" d="M13.764.811,12.953,0,6.882,6.071.811,0,0,.811,6.071,6.882,0,12.953l.811.811L6.882,7.693l6.071,6.071.811-.811L7.693,6.882Z" />
                </svg>
            </Button>
            <WrapperDiv
                dr={`column`}
                al={`center`}
            >
                {/* 헤더 */}
                <WrapperDiv>
                    <TitleP
                        kindOf={`24px`}>
                        거래처 관리 / 근로자 관리
                    </TitleP>
                </WrapperDiv>
                <GridBoxDiv
                    gtc={`360px auto`}
                    gap={`10px`}
                >
                    <CustomerComponent

                        commonState={commonState}
                        commonDispatch={commonDispatch}

                        state={state}
                        dispatch={dispatch}

                        fileState={fileState}
                        fileDispatch={fileDispatch}
                    />

                    <WorkerComponent
                        commonState={commonState}
                        state={state}
                        dispatch={dispatch}
                    />

                </GridBoxDiv >
                <WrapperDiv
                    ju={`center`}
                    al={`center`}
                >
                    <Button
                        kindOf={`lightBlue`}
                        hover={true}
                        margin={`20px 20px 0 0`}
                        onClick={async (e: any) => {
                            await dataSubmitHandler(
                                e,
                                componentTitle,
                                commonState,
                                commonDispatch,
                                state,
                                dispatch,
                                fileState,
                                fileDispatch
                            )
                        }}
                    >
                        {buttonLoading ?
                            <ClipLoader
                                loading={true}
                                color={Theme.basic_white}
                                size={`20px`}
                            />
                            :
                            modalKinds === "추가" ? "저장" : "수정하기"
                        }
                    </Button>
                    <Button
                        kindOf={`greyButton`}
                        margin={`20px 0 0 0`}
                        onClick={(e: any) => { commonDispatch({ name: "modalOpen", value: false }); }}
                    >
                        닫기
                    </Button>
                </WrapperDiv>
            </WrapperDiv >
        </WholeWrapperDiv >
    )
}

export default React.memo(ModalPresenter);