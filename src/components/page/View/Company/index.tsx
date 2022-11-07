import { NextPage } from "next";
import { useReducer } from "react";
import { commonInitState, companyInitState } from "../../../../modules/state/initstate";
import CompanyPresenter from "./CompanyPresenter";
import { commonReducer, componentReducer } from "../../../../modules/state/reducer";

interface LoginData {
    loginData: any
}

const Company: NextPage<LoginData> = (props: any) => {
    const loginData = props.loginData;

    const [commonState, commonDispatch] = useReducer(
        commonReducer(loginData, "company"),
        commonInitState(loginData, "company")
    );

    const [state, dispatch] = useReducer(
        componentReducer(loginData, "company", commonDispatch),
        companyInitState()
    );


    // 하위 컴포넌트에 보낼 Props
    const companyProps = {
        ...props,

        commonState,
        commonDispatch,

        state, // 사용자 state
        dispatch,
    }

    return (
        <CompanyPresenter
            companyProps={companyProps}
        />
    )
}
export default Company;