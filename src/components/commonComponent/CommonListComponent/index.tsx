import React from "react";
import { useEffect } from "react";
import { axiosReadListHandler } from "../../../modules/axios/axiosCRUD";
import CLCPresenter from "./CLCPresenter";

const CommonListComponent = (props: any) => {

    const {

        commonState,
        commonDispatch,

        state,
        dispatch,

        fileState,
        fileDispatch,

    } = props; // Props 에서 리스트 배열만 가져온다.

    const {
        isLoading, // 처음 리스트 받아올 때 로딩
        dataList,
        pageNumber,
        bodyNumber

    } = commonState;

    useEffect(() => {
        axiosReadListHandler(
            commonState,
            commonDispatch
        )
    }, [pageNumber, bodyNumber])

    return (
        <CLCPresenter
            commonState={commonState}
            commonDispatch={commonDispatch}

            state={state}
            dispatch={dispatch}

            fileState={fileState}
            fileDispatch={fileDispatch}

            dataList={dataList}

            isLoading={isLoading}
        />
    )
}
export default React.memo(CommonListComponent);