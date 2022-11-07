import axios from "axios";
import router from "next/router";
import { useReducer } from "react";
// import { axiosEditProfileHandler } from "../../../../../../modules/axios/axiosAuth";
import MyPagePresenter from "./MyPagePresenter";

const MyPage = (props: any) => {
    const data = props.tokenValue.isLogined;
    const { setModalOpen } = props;

    const [mypageState, dispatch] = useReducer(reducer, {
        user_id: data.user_id,
        user_password: data.user_password,
        user_name: data.user_name,
        user_phone: data.user_phone,
        user_grade: data.user_grade,
        user_number: data.user_number
    })


    function reducer(state: any, action: any) {
        switch (action.type) {
            default:
                return {
                    ...state,
                    [action.name]: action.value
                }
        }
    }

    const onChangeHandler = (e: any) => {
        dispatch({ name: e.target.name, value: e.target.value });
    }

    // 이거 지금 라우터 없으니 사용할 경우 만들어야 함.
    // const editSubmtHandler = async (e: any) => {
    //     await axiosEditProfileHandler(mypageState);
    // }

    return (
        <MyPagePresenter
            mypageState={mypageState}
            onChangeHandler={onChangeHandler}
            // editSubmtHandler={editSubmtHandler}
            setModalOpen={setModalOpen}
        />
    )
}
export default MyPage;