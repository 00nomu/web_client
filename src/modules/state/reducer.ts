import { commonInitState, companyInitState, customerFileInitState, customerInitState, muserInitState, userInitState, warrantFileInitState, warrantInitState } from "./initstate";

export const commonReducer = (
    loginData: any,
    componentTitle: string
) => {
    return function commonReducer(state: any, action: any) {
        switch (action.type) {
            case 'init':
                return commonInitState(loginData, componentTitle);
            default:
                return {
                    ...state,
                    [action.name]: action.value
                }
        }
    }

}

export const componentReducer = (
    loginData: any,
    componentTitle: string,
    commonDispatch: any
) => {
    return function reducer(state: any, action: any) {
        switch (action.type) {
            case 'init':
                switch (componentTitle) {
                    case "company":
                        return companyInitState();
                    case "mobileUser":
                        return muserInitState();
                    case "webUser":
                        return userInitState(loginData);
                    case "customer":
                        return customerInitState(loginData);
                    case "warrant":
                        return warrantInitState();

                }
            case 'listClick':
                switch (componentTitle) {
                    case "company":
                        var newState = { ...state };
                        var result = action.value;
                        newState.company_name = result.company_name;
                        newState.company_code = result.company_code;
                        newState.user_id = result.user_id;
                        newState.user_password = result.user_password;
                        return action.value;
                    case "mobileUser":
                        var newState = action.value;
                        commonDispatch({ name: "beforeId", value: action.value.muser_id })
                        return newState;
                    case "webUser":
                        var newState = action.value;
                        commonDispatch({ name: "beforeId", value: action.value.user_id });
                        newState.auth_menu_company = String(newState.auth_menu_company);
                        newState.auth_menu_user_customer = String(newState.auth_menu_user_customer);
                        newState.auth_menu_user_info = String(newState.auth_menu_user_info);
                        newState.auth_menu_muser_info = String(newState.auth_menu_muser_info);
                        newState.auth_menu_warrant = String(newState.auth_menu_warrant);
                        return newState;
                    case 'grade':
                        var newState = state;
                        newState.user_grade = action.value;
                        switch (action.value) {
                            case '근로계약서팀':
                                newState.auth_menu_company = "0"
                                newState.auth_menu_user_customer = "5"
                                newState.auth_menu_user_info = "0"
                                newState.auth_menu_muser_info = "0"
                                newState.auth_menu_warrant = "0"
                                break;
                            case '4대보험팀':
                                newState.auth_menu_company = "0"
                                newState.auth_menu_user_customer = "1"
                                newState.auth_menu_user_info = "0"
                                newState.auth_menu_muser_info = "0"
                                newState.auth_menu_warrant = "0"
                                break;
                            case '지원금팀':
                                newState.auth_menu_company = "0"
                                newState.auth_menu_user_customer = "1"
                                newState.auth_menu_user_info = "0"
                                newState.auth_menu_muser_info = "0"
                                newState.auth_menu_warrant = "0"
                                break;
                            case '사무장팀':
                                newState.auth_menu_company = "0"
                                newState.auth_menu_user_customer = "5"
                                newState.auth_menu_user_info = "0"
                                newState.auth_menu_muser_info = "0"
                                newState.auth_menu_warrant = "0"
                                break;
                            case '개발팀':
                                newState.auth_menu_company = "5"
                                newState.auth_menu_user_customer = "5"
                                newState.auth_menu_user_info = "5"
                                newState.auth_menu_muser_info = "5"
                                newState.auth_menu_warrant = "5"
                                break;
                            case '관리자':
                                newState.auth_menu_company = "1"
                                newState.auth_menu_user_customer = "1"
                                newState.auth_menu_user_info = "1"
                                newState.auth_menu_muser_info = "1"
                                newState.auth_menu_warrant = "1"
                                break;
                            case '기타':
                                newState.auth_menu_company = "0"
                                newState.auth_menu_user_customer = "1"
                                newState.auth_menu_user_info = "0"
                                newState.auth_menu_muser_info = "0"
                                newState.auth_menu_warrant = "0"
                                break;
                        }
                        return { ...newState };
                    default:
                        var newState = action.value;
                        return { ...newState };
                }

            case 'customerListClick':
                var newState = { ...state };
                for (let item in action.value) {
                    newState[item] = action.value[item]
                }
                var emptyList = action.value2;
                if (emptyList.length > 0) {
                    for (let i = 0; i < emptyList.length; i++) {
                        emptyList[i].worker_customer_data = action.value;
                        emptyList[i].worker_wage_term1 = JSON.parse(emptyList[i].worker_wage_term)[0];
                        emptyList[i].worker_wage_term2 = JSON.parse(emptyList[i].worker_wage_term)[1];
                        emptyList[i].worker_wage_term3 = JSON.parse(emptyList[i].worker_wage_term)[2];
                        emptyList[i].worker_wage_term4 = JSON.parse(emptyList[i].worker_wage_term)[3];
                        emptyList[i].worker_wage_date1 = JSON.parse(emptyList[i].worker_wage_date)[0];
                        emptyList[i].worker_wage_date2 = JSON.parse(emptyList[i].worker_wage_date)[1];
                        emptyList[i].worker_checked = false;
                        if (typeof (emptyList[i].worker_weekly_data) === 'string') {
                            emptyList[i].worker_weekly_data = JSON.parse(emptyList[i].worker_weekly_data)
                        }
                        if (typeof (emptyList[i].worker_weekly_pay_data) === 'string') {
                            emptyList[i].worker_weekly_pay_data = JSON.parse(emptyList[i].worker_weekly_pay_data)
                        }
                        if (typeof (emptyList[i].worker_customer_data) === 'string') {
                            emptyList[i].worker_customer_data = JSON.parse(emptyList[i].worker_customer_data)
                        }
                    }
                }
                newState.worker_list = emptyList;
                return newState;

            default:
                return {
                    ...state,
                    [action.name]: action.value
                }
        }

    }
}

// https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/customer/4442215123/business
export const fileReducer = (
    componentTitle: string
) => {
    return function reducer(state: any, action: any) {

        switch (action.type) {
            case 'init':
                if (componentTitle === "customer") {
                    return customerFileInitState();
                }
                else {
                    return warrantFileInitState();
                }
            case 'listClick':
                var newState = state;
                Object.keys(newState).map((item: any, index: any) => {
                    if (item === 'file_location') {
                        newState[item] = 'https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/' + action.value[item]
                    }
                    else {
                        newState[item] = action.value[item]
                    }
                })
                return { ...newState };
            default:
                return {
                    ...state,
                    [action.name]: action.value
                }
        }
    }
};