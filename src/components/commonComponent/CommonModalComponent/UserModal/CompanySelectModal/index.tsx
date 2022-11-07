import { useEffect, useReducer } from "react";
import { commonInitState } from "../../../../../modules/state/initstate";
import { axiosReadListHandler } from "../../../../../modules/axios/axiosCRUD";
import ModalPresenter from "./ModalPresenter";
import React from "react";

const DataListModal = (props: any) => {
    const {
        loginData,
        dispatch,
        setCompanyModalOpen

    } = props;

    const [commonState, commonDispatch] = useReducer(commonReducer, commonInitState(loginData, "company"));

    function commonReducer(state: any, action: any) {
        switch (action.type) {
            case 'init':
                return commonInitState(loginData, "company");
            default:
                return {
                    ...state,
                    [action.name]: action.value
                }
        }
    }

    const {
        totalPage,
        postPageNumber,

        pageNumber,

    } = commonState;

    const pageUpClickHandler = (e: any) => {
        if ((pageNumber + 1) < totalPage) {
            commonDispatch({ name: "pageNumber", value: pageNumber + 1 });
        }
    }

    const pageDoubleUpClickHandler = (e: any) => {
        if ((pageNumber + postPageNumber) < totalPage) {
            commonDispatch({ name: "pageNumber", value: pageNumber + postPageNumber });
        }
        else if ((totalPage - 1) < 0) {

        }
        else {
            commonDispatch({ name: "pageNumber", value: totalPage - 1 });
        }
    }

    const pageDownClickHandler = (e: any) => {
        if ((pageNumber - 1) >= 0) {
            commonDispatch({ name: "pageNumber", value: pageNumber - 1 });
        }
    }

    const pageDoubleDouwnClickHandler = (e: any) => {
        if ((pageNumber - postPageNumber) >= 0) {
            commonDispatch({ name: "pageNumber", value: pageNumber - postPageNumber });
        }
        else {
            commonDispatch({ name: "pageNumber", value: 0 });
        }
    }

    useEffect(() => {
        axiosReadListHandler(
            commonState,
            commonDispatch
        )
    }, [pageNumber])

    const companySearchHandler = (e: any) => {
        e.preventDefault();

        axiosReadListHandler(
            commonState,
            commonDispatch
        )
    }

    const companySelectHandler = async (item: any) => {
        dispatch({ name: "user_auth", value: item.company_code === "7828500389" ? 1 : 2 })
        dispatch({ name: "company_name", value: item.company_name })
        dispatch({ name: "user_company_code", value: item.company_code })
        setCompanyModalOpen(false);

    }
    return (
        <ModalPresenter
            companyProps={props}
            commonState={commonState}
            commonDispatch={commonDispatch}
            companySearchHandler={companySearchHandler}
            companySelectHandler={companySelectHandler}
            setCompanyModalOpen={setCompanyModalOpen}
        />
    )
}
export default React.memo(DataListModal);