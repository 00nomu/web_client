import { NextPage } from "next";
import { useReducer } from "react";
import { commonInitState, userInitState } from "../../../../modules/state/initstate";
import UserPresenter from './UserPresenter'
import { commonReducer, componentReducer } from "../../../../modules/state/reducer";

interface LoginData {
    loginData: any
}

const User: NextPage<LoginData> = (props: any) => {

    const loginData = props.loginData;

    const [commonState, commonDispatch] = useReducer(
        commonReducer(loginData, "webUser"),
        commonInitState(loginData, "webUser")
    );

    const [state, dispatch] = useReducer(
        componentReducer(loginData, "webUser", commonDispatch),
        userInitState(loginData)
    );

    // 하위 컴포넌트에 보낼 Props
    const userProps = {
        ...props, // 로그인 데이터

        state,
        dispatch,

        commonState,
        commonDispatch,
    }

    return (
        <UserPresenter
            userProps={userProps}
        />
    )
}
export default User;