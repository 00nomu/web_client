import axios, { Method } from "axios";
import moment from "moment";
import { companyNumberValidation, userIdValidaion } from "../validation";

export const axiosReadListHandler = async (
    commonState: any,
    commonDispatch: any,

) => {

    let checkboxKey: string;

    switch (commonState.componentTitle) {
        case "company":
            checkboxKey = "company_code"
            break;
        case "customer":
            checkboxKey = "customer_code"
            break;
        case "mobileUser":
            checkboxKey = "muser_id"
            break;
        case "webUser":
            checkboxKey = "user_id"
            break;
        case "customer":
            checkboxKey = "customer_code"
            break;
        case "warrant":
            checkboxKey = "warrant_index"
            break;
        default:
            checkboxKey = ""
            break;
    }

    const {
        pageNumber,
        postNumber,

        postPageNumber,
    } = commonState;

    commonDispatch({ name: "isLoading", value: true })
    commonState.startDate = moment(commonState.startDate);
    commonState.endDate = moment(commonState.endDate).add(2, 'days');


    await axios(`/java/common/list`, { method: 'post', data: commonState })
        .then(({ data }) => {
            commonDispatch({ name: "totalListCount", value: data.totalCount })
            let emptyArray = [];
            // checkbox와 list는 각각의 요소가 위치가 같게끔 설계
            if (data.result.length !== 0) {
                for (let i = 0; i < data.result.length; i++) {
                    emptyArray.push({ checkboxKey: data.result[i][checkboxKey], checked: false })
                }
            }
            commonDispatch({ name: "dataList", value: data.result })
            commonDispatch({ name: "checkboxArray", value: emptyArray })


            // 페이지네이션
            const count = data.totalCount;

            var startpage = Math.floor(pageNumber / postPageNumber) * postPageNumber; // 시작 페이지 숫자
            var endpage = startpage + postPageNumber; // 마지막 페이지 숫자
            var totalpage = Math.ceil(count / postNumber); // 전체 페이지 개수

            if (endpage > totalpage) { // 끝 페이지가 총 페이지 수보다 많으면 같게끔 처리
                endpage = totalpage
            }

            emptyArray = [];
            for (let i = startpage; i < endpage; i++) {
                emptyArray.push(i + 1);
            }

            commonDispatch({ name: "pageArray", value: emptyArray })
            commonDispatch({ name: "totalPage", value: totalpage })

        })

    commonDispatch({ name: "isLoading", value: false })
}


export const modalSubmitHandler = async (
    commonState: any,
    commonDispatch: any,
    state: any,
    dispatch: any,

) => {
    const {
        loginData,
        modalKinds,
        componentTitle,
        beforeId,

    } = commonState;

    let url: string = "";
    let method: Method = "post";
    let updateData: any;
    let dupleIdName: string = "";

    /**
     * componentTitle에 따라 url , upDateData 수정 및 조건문 설정
     */
    switch (componentTitle) {
        case "company":
            url = "/java/company";
            dupleIdName = "company_code";
            updateData = { where: { company_code: beforeId }, content: state };
            break;

        case "customer":
            url = "/java/customer";
            dupleIdName = "customer_code";

            if (modalKinds === "추가") {
                if (loginData.auth_menu_user_customer < 2) {
                    return alert('거래처 추가 권한이 없습니다.')
                }
                if (!companyNumberValidation(state.customer_code)) {
                    return alert('사업자번호를 확인해주세요.')
                }
                if (state.customer_owner_name === "") {
                    return alert('대표자를 입력해주세요.');
                }
                if (state.customer_name === "") {
                    return alert('상호를 입력해주세요.');
                }
                if (state.customer_tel === "") {
                    return alert('연락처를 입력해주세요');
                }
            }
            else {
                updateData = { where: { customer_code: state.customer_code }, content: state };
                if (loginData.auth_menu_user_customer < 3) {
                    return alert('거래처 수정 권한이 없습니다.')
                }
                if (!companyNumberValidation(state.customer_code)) {
                    return alert('사업자번호를 확인해주세요.')
                }
                if (!window.confirm('수정하시겠습니까?')) {
                    return alert('취소되었습니다.')
                }
            }
            break;

        case "mobileUser":
            url = "/java/muser";
            dupleIdName = "muser_id";

            if (!userIdValidaion(state.muser_id)) {
                return alert('아이디는 영문 숫자만 가능합니다.');
            }

            if (modalKinds === "추가") {
                if (loginData.auth_menu_muser_info < 2) {
                    return alert('사용자 추가 권한이 없습니다.')
                }
            }
            else {
                updateData = { where: { muser_id: beforeId }, content: state };
                if (loginData.auth_menu_muser_info < 3) {
                    return alert('사용자 수정 권한이 없습니다.')
                }
            }
            break;

        case "webUser":
            url = "/java/user";
            dupleIdName = "user_id";

            if (!userIdValidaion(state.user_id)) {
                return alert('아이디는 영문 숫자만 가능합니다.');
            }
            if (state.user_company_code === "") {
                return alert('업체를 선택해주세요');
            }


            if (modalKinds === "추가") {
                if (loginData.auth_menu_user_info < 2) {
                    return alert('사용자 추가 권한이 없습니다.')
                }
            }
            else {
                updateData = { where: { user_id: beforeId }, content: state };
                if (loginData.auth_menu_user_info < 3) {
                    return alert('사용자 수정 권한이 없습니다.')
                }
            }
            break;

        case "warrant":
            url = "/java/warrant";
            if (modalKinds === "추가") {

            }
            else {
                updateData = { where: { warrant_index: state.warrant_index }, content: state }
                if (state.warrant_company_code.length < 10) {
                    return alert('사업자번호의 형식이 잘못됐습니다.');
                }

            }
            break;

        default:
            url = ""
            break;
    }


    /**
     * modalKinds 따라 axios 설정 ( create, update )
     */
    commonDispatch({ name: "isLoading", value: true })
    commonDispatch({ name: "buttonLoading", value: true });
    if (modalKinds === "추가") {
        method = "post";
        await axios(url, { method: method, data: state })
            .then(async ({ data }) => {
                if (data.success) {
                    alert('추가되었습니다');
                    await dispatch({ type: 'init' });
                    await commonDispatch({ name: "modalOpen", value: false });
                    await axiosReadListHandler(
                        commonState,
                        commonDispatch
                    )
                }
                else if (data.result === 'duple') {
                    if (dupleIdName === "customer_code") {
                        alert("이미 등록된 사업자등록번호 입니다.")
                    }
                    else {
                        alert('중복된 아이디가 존재합니다.');
                    }
                    await dispatch({ name: dupleIdName, value: "" });
                }
            })
    }
    else {
        method = "patch";
        await axios(url, { method: method, data: updateData }) // spring 에서 application/json;charset=UTF-8 지원하지 않음 ( json 데이터 보낼 때 유의 )
            .then(async ({ data }) => {
                if (data.success) {
                    await alert('수정되었습니다');
                    await dispatch({ type: 'init' });
                    await commonDispatch({ name: "modalOpen", value: false });
                    await axiosReadListHandler(
                        commonState,
                        commonDispatch
                    )
                }
                else if (data.result === 'duple') {
                    if (dupleIdName === "customer_code") {
                        alert("이미 등록된 사업자등록번호 입니다.")
                    }
                    else {
                        alert('중복된 아이디가 존재합니다.');
                    }
                    await dispatch({ name: dupleIdName, value: "" });
                }
            })
    }
    commonDispatch({ name: "isLoading", value: false })
    commonDispatch({ name: "buttonLoading", value: false });

}

export const axiosDeleteHandler = async (
    commonState: any,
    commonDispatch: any,

    url: string,

    confirmText: string,
    dispatch: any,
) => {
    const {
        checkboxArray
    } = commonState;

    let method: Method = "delete";

    const checkboxList = [];
    for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray[i].checked) {
            checkboxList.push(checkboxArray[i].checkboxKey);
        }
    }
    if (window.confirm(confirmText)) {
        await axios(url, { method: method, data: { checkboxList } })
            .then(async ({ data }) => {
                // 삭제된 데이터 반영해서 데이터 리스트 변경
                if (data.success) {
                    await axiosReadListHandler(
                        commonState,
                        commonDispatch
                    )
                    await dispatch({ type: 'init' })
                    await commonDispatch({ name: "pageNumber", value: 0 });
                }
            })
    }
}