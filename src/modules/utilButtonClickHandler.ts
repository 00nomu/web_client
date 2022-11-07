import { axiosDeleteHandler } from "./axios/axiosCRUD";

// 버튼 클릭 시 
const utilButtonClickHandler = async (
    type: string,

    commonState: any,
    commonDispatch: any,

    dispatch: any,

    fileDispatch: any
) => {
    const {
        loginData,
        componentTitle
    } = commonState;

    let confirmText = "";
    let url = "";

    switch (componentTitle) {
        case "company":
            if (type === "create") {
                commonDispatch({ name: "beforeId", value: "" });
                commonDispatch({ name: "modalKinds", value: "추가" });
                commonDispatch({ name: "modalOpen", value: true });
                dispatch({ type: 'init' });
            }
            else {
                await axiosDeleteHandler(
                    commonState,
                    commonDispatch,

                    "/java/company",

                    "업체를 삭제하시겠습니까?",
                    dispatch,
                )
            }
            break;
        case "customer":

            if (type === "create") {
                commonDispatch({ name: "modalKinds", value: "추가" });
                fileDispatch({ type: 'init' });
                dispatch({ type: 'init' });
                commonDispatch({ name: "modalOpen", value: true });
            }
            else {
                if (type === "delete") {
                    if (loginData.auth_menu_user_customer < 4) {
                        return alert('거래처 관리 종료 권한이 없습니다.')
                    }
                    confirmText = "선택하신 거래처의 관리를 종료하시겠습니까?";
                    url = "/java/customer/managementend"
                }
                else if (type === "deleteComplete") {
                    if (loginData.auth_menu_user_customer < 4) {
                        return alert('거래처 삭제 권한이 없습니다.')
                    }
                    confirmText = "거래처를 삭제하시겠습니까? 거래처와 관련된 근로자, 근로계약서, 임금명세서 정보도 같이 삭제됩니다.";
                    url = "/java/customer/"
                }
                else if (type === "restore") {
                    if (loginData.auth_menu_user_customer < 4) {
                        return alert('거래처 관리 재개 권한이 없습니다.')
                    }
                    confirmText = "거래처의 관리를 재개하시겠습니까?";
                    url = "/java/customer/restore"
                }

                await axiosDeleteHandler(
                    commonState,
                    commonDispatch,

                    url,

                    "업체를 삭제하시겠습니까?",
                    dispatch,
                )
            }
            break;
        case "mobileUser":
            if (type === 'create') {
                commonDispatch({ name: "beforeId", value: "" });
                dispatch({ type: 'init' });
                commonDispatch({ name: "modalKinds", value: "추가" });
                commonDispatch({ name: "modalOpen", value: true });
            }
            else {
                if (type === 'delete') {
                    if (loginData.auth_menu_muser_info < 4) {
                        return alert('사용자 삭제 권한이 없습니다.')
                    }
                }
                await axiosDeleteHandler(
                    commonState,
                    commonDispatch,

                    "/java/muser",

                    "유저를 삭제하시겠습니까?",
                    dispatch,
                )
            }
            break;
        case "webUser":
            if (type === 'create') {
                commonDispatch({ name: "beforeId", value: "" });
                dispatch({ type: 'init' });
                commonDispatch({ name: "modalKinds", value: "추가" });
                commonDispatch({ name: "modalOpen", value: true });
            }
            else {
                if (type === 'delete') {
                    if (loginData.auth_menu_user_info < 4) {
                        return alert('사용자 삭제 권한이 없습니다.')
                    }
                }

                await axiosDeleteHandler(
                    commonState,
                    commonDispatch,

                    "/java/user",

                    "유저를 삭제하시겠습니까?",
                    dispatch,
                )
            }
            break;
        case "warrant":

            if (type === 'create') {

            }
            else {
                if (type === 'delete') {
                    if (loginData.auth_menu_warrant < 5) {
                        return alert('위임장 삭제 권한이 없습니다.')
                    }
                    confirmText = "데이터를 삭제하시겠습니까?";
                    url = "/java/warrant/"

                }
                else if (type === 'lookupcomplete') {
                    if (loginData.auth_menu_warrant < 5) {
                        return alert('이동 권한이 없습니다.')
                    }
                    confirmText = "완료 탭으로 이동하시겠습니까?";
                    url = "/java/warrant/lookupcomplete"
                }

                await axiosDeleteHandler(
                    commonState,
                    commonDispatch,

                    url,

                    confirmText,
                    dispatch,
                )
            }
            break;
        default:
            break;
    }

}

export default utilButtonClickHandler;