import { NextPage } from "next";
import { useReducer } from "react";
import { commonInitState, muserInitState } from "../../../../modules/state/initstate";
import UserPresenter from './MobileUserPresenter'
import { commonReducer, componentReducer } from "../../../../modules/state/reducer";

interface LoginData {
    loginData: any
}

const MobileUser: NextPage<LoginData> = (props: any) => {

    const loginData = props.loginData;

    commonReducer

    const [commonState, commonDispatch] = useReducer(
        commonReducer(loginData, "mobileUser"),
        commonInitState(loginData, "mobileUser")
    );

    const [state, dispatch] = useReducer(
        componentReducer(loginData, "mobileUser", commonDispatch),
        muserInitState()
    );

    // 하위 컴포넌트에 보낼 Props
    const userProps = {
        ...props, // 로그인 데이터

        commonState,
        commonDispatch,

        state, // 사용자 state
        dispatch,

    }

    return (
        <UserPresenter
            userProps={userProps}
        />
    )
}
export default MobileUser;