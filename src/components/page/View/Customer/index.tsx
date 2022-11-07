import { NextPage } from "next";
import { useReducer } from "react";
import { commonInitState, customerFileInitState, customerInitState } from "../../../../modules/state/initstate";
import CustomerPresenter from './CustomerPresenter'
import { commonReducer, componentReducer, fileReducer } from "../../../../modules/state/reducer";

interface LoginData {
    loginData: any
}

const Customer: NextPage<LoginData> = (props: any) => {

    const loginData = props.loginData; // 로그인 사용자 정보

    const [commonState, commonDispatch] = useReducer(
        commonReducer(loginData, "customer"),
        commonInitState(loginData, "customer")
    );


    const [state, dispatch] = useReducer(
        componentReducer(loginData, "customer", commonDispatch),
        customerInitState(loginData)
    );

    const [fileState, fileDispatch] = useReducer(
        fileReducer("customer"),
        customerFileInitState()
    );

    const customerProps = {
        ...props,

        commonState,
        commonDispatch,

        state,
        dispatch,

        fileState,
        fileDispatch,

    }

    return (
        <CustomerPresenter
            customerProps={customerProps}
        />
    )
}
export default Customer;