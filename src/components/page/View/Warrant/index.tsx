import { NextPage } from "next";
import { useReducer } from "react";
import { commonInitState, warrantFileInitState, warrantInitState } from "../../../../modules/state/initstate";
import WarrantPresenter from './WarrantPresenter'
import { commonReducer, componentReducer, fileReducer } from "../../../../modules/state/reducer";

interface LoginData {
    loginData: any
}

const MobileUser: NextPage<LoginData> = (props: any) => {

    const loginData = props.loginData; // 로그인 사용자 정보

    const [commonState, commonDispatch] = useReducer(
        commonReducer(loginData, "warrant"),
        commonInitState(loginData, "warrant")
    );

    const [state, dispatch] = useReducer(
        componentReducer(loginData, "warrant", commonDispatch),
        warrantInitState()
    );

    const [fileState, fileDispatch] = useReducer(fileReducer("warrant"), warrantFileInitState());

    // 하위 컴포넌트에 보낼 Props
    const warrantProps = {
        ...props,

        commonState,
        commonDispatch,

        state, // 사용자 state
        dispatch,

        fileState,
        fileDispatch,
    }

    return (
        <WarrantPresenter
            warrantProps={warrantProps}
        />
    )
}
export default MobileUser;