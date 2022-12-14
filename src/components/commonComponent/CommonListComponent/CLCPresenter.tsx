import {
    WholeWrapperDiv,
} from "../../styles/AllStyles";
import React from "react";
import PageBoxComponent from "./subComponent/PageBoxComponent";
import NodataComponent from "./subComponent/NodataComponent";
import ListHeaderComponent from "./subComponent/ListHeaderComponent";
import ListBodyComponent from "./subComponent/ListBodyComponent";
import { SCREEN_SIZE } from "../../../Lib/consts";
import ListMobileHeaderComponent from "./subComponent/ListMobileHeaderComponent";
import ListMobileBodyComponent from "./subComponent/ListMobileBodyComponent";

const ListPresenter = ({
    windowWidth,

    commonState,
    commonDispatch,

    state,
    dispatch,

    fileState,
    fileDispatch,

    dataList, // dataList 데이터

    isLoading
}: any) => {
    return (
        <WholeWrapperDiv index={`-1`}>
            {/* 테이블헤더 */}
            {
                windowWidth < SCREEN_SIZE.MOBILE ?
                    <ListMobileHeaderComponent
                        commonState={commonState}
                        commonDispatch={commonDispatch}
                    />
                    :
                    <ListHeaderComponent
                        commonState={commonState}
                        commonDispatch={commonDispatch}
                    />

            }

            {(dataList.length === 0 && isLoading === false) ? // 데이터가 존재하지 않을경우
                <NodataComponent />

                : // 데이터가 존재할 경우
                windowWidth < SCREEN_SIZE.MOBILE ?
                    <ListMobileBodyComponent
                        commonState={commonState}
                        commonDispatch={commonDispatch}

                        state={state}
                        dispatch={dispatch}

                        fileState={fileState}
                        fileDispatch={fileDispatch}
                    />
                    :
                    <ListBodyComponent
                        commonState={commonState}
                        commonDispatch={commonDispatch}

                        state={state}
                        dispatch={dispatch}

                        fileState={fileState}
                        fileDispatch={fileDispatch}
                    />



            }
            {/* 페이지 */}
            <PageBoxComponent
                commonState={commonState}
                commonDispatch={commonDispatch}
            />
        </WholeWrapperDiv>
    )
}

export default React.memo(ListPresenter);