import React, { useState } from "react";
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

    const [windowWidth, setWindowWidth] = useState(0);

    const resizeWindow = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener("resize", resizeWindow)
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [windowWidth])

    useEffect(() => {
        axiosReadListHandler(
            commonState,
            commonDispatch
        )
    }, [pageNumber, bodyNumber])

    return (
        <CLCPresenter
            windowWidth={windowWidth}

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