import moment from "moment"

export const commonInitState = (
    loginData: any,
    componentTitle: string
) => {
    return {
        loginData,
        companyCode: loginData.company_code,
        componentTitle: componentTitle,
        bodyNumber: 0,
        subBodyNumber: 0,

        dataList: [],
        totalListCount: 0,
        totalAllListCount: 0,

        pageNumber: 0,
        postNumber: 50,
        postPageNumber: 5,
        totalPage: 0,
        pageArray: [],

        searchDateBox: "등록일순",
        searchSelectBox: "전체",
        searchText: "",
        searchSubSelectBox: "전체",

        startDate: moment().add(-3, "year").format("YYYY-MM-DD"),
        endDate: moment().format("YYYY-MM-DD"),
        startDateObject: moment().add(-3, "year").toDate(),
        endDateObject: moment().toDate(),

        isLoading: false,
        buttonLoading: false,

        range: "",

        modalOpen: false,
        modalKinds: "추가",

        checkboxArray: [],
        allCheck: false,

    }
}

export const companyInitState = () => {
    return {
        company_name: "",
        company_code: "",

        company_owner_name: "",
        company_tel: "",
        company_memo: "",
    }
}

export const customerInitState = (loginData: any) => {

    return { // 추가, 수정할 때 필요한 상태값
        customer_company_code: loginData.company_code,
        customer_create_name: loginData.user_name, // 등록자
        customer_create_route: "웹", // 생성경로
        customer_deposit_date: "", // 입금날짜
        customer_bill_boolean: "발행미완료", // 계산서 발행여부
        customer_name: "",
        customer_owner_name: "",
        customer_status: "관리중",
        customer_code: "",
        customer_four_insurance_name: "미정",
        customer_tel: "",
        customer_set_cost: 0,
        customer_manage_cost: 0,
        customer_insurance_cost: 0,
        customer_main_type: "",
        customer_sub_type: "",
        customer_address: "",
        customer_address_city: "",
        customer_address_detail: "",
        customer_support_fee: "미정",
        customer_muser_id: "",
        customer_memo: "",
        customer_muser_memo: "",
        customer_scale_status: 0,

        worker_list: []
    }
}

export const customerFileInitState = () => {
    return {
        file_where: "customer",
        file_kinds: "business",
        file_name: "",
        file_object: "",
        file_url: "",
        file_location: ""
        // customerImageDownloadComponent: false,
    }
}

export const muserInitState = () => {
    return {
        muser_id: "",
        muser_password: "",
        muser_name: "",
        muser_tel: "",
        muser_point: 0,
    }
}

export const userInitState = (loginData: any) => {
    return {
        user_company_code: loginData.company_code,
        user_create_name: loginData.user_name,
        user_id: "",
        user_password: "",
        user_name: "",
        user_phone: "",
        user_grade: "",
        user_number: "",
        user_note: "",

        user_auth: 1,

        company_name: "공공노무법인 대전지사",

        auth_menu_company: "0",
        auth_menu_user_customer: "0",
        auth_menu_user_info: "0",
        auth_menu_muser_info: "0",
        auth_menu_warrant: "0",
    }
}

export const warrantInitState = () => {
    return {
        warrant_sign_date: "",
        warrant_send_date: "",

        warrant_company_type: 0,
        warrant_company_name: "",
        warrant_main_type: "",
        warrant_company_code: "",
        warrant_company_address: "",
        warrant_company_address_detail: "",

        warrant_owner_name: "",
        warrant_reg_number: "",
        warrant_reg_number2: "",
        warrant_company_tel: "",

        warrant_sign: "",
        warrant_sign_pad: "",

        warrant_stamp_image: "",

        warrant_personal_reg_card_name: "",
        warrant_personal_reg_card_path: "",

        warrant_business_reg_card_name: "",
        warrant_business_reg_card_path: "",

        warrant_contents: "",

        warrant_stamp_name: "",
        warrant_stamp_path: "",

        warrant_refund_result_name: "",
        warrant_refund_result_path: "",

        warrant_refund_result_scan_name: "",
        warrant_refund_result_scan_path: "",

        warrant_contract_doc_name: "",
        warrant_contract_doc_path: "",

        warrant_contract_doc_scan_name: "",
        warrant_contract_doc_scan_path: "",

        warrant_refund_complete_name: "",
        warrant_refund_complete_path: "",

        warrant_complete_name: "",
        warrant_complete_path: "",

        warrant_special_people_boolean: 0,
        warrant_special_peoples: "",
        warrant_special_people_result: "",

        warrant_refund_boolean: 0,
        warrant_refund_amount: "0",
    }
}

export const warrantFileInitState = () => {
    return {
        warrant_personal_reg_card_object: "",
        warrant_personal_reg_card_url: "",

        warrant_business_reg_card_object: "",
        warrant_business_reg_card_url: "",

        warrant_stamp_object: "",
        warrant_stamp_url: "",

        warrant_refund_result_object: "",
        warrant_refund_result_url: "",

        warrant_refund_result_scan_object: "",
        warrant_refund_result_scan_url: "",

        warrant_contract_doc_object: "",
        warrant_contract_doc_url: "",

        warrant_contract_doc_scan_object: "",
        warrant_contract_doc_scan_url: "",

        warrant_refund_complete_object: "",
        warrant_refund_complete_url: "",

        warrant_complete_object: "",
        warrant_complete_url: ""
    }
}

export const initWorker요일정보 = () => {
    return {
        일: {
            시업시간: "",
            종업시간: "",
            휴게시간_주간: 0,
            휴게시간_야간: 0,
            근무시간: 0,
            근무여부: false,
        },
        월: {
            시업시간: "",
            종업시간: "",
            휴게시간_주간: 0,
            휴게시간_야간: 0,
            근무시간: 0,
            근무여부: true,
        },
        화: {
            시업시간: "",
            종업시간: "",
            휴게시간_주간: 0,
            휴게시간_야간: 0,
            근무시간: 0,
            근무여부: true,
        },
        수: {
            시업시간: "",
            종업시간: "",
            휴게시간_주간: 0,
            휴게시간_야간: 0,
            근무시간: 0,
            근무여부: true,
        },
        목: {
            시업시간: "",
            종업시간: "",
            휴게시간_주간: 0,
            휴게시간_야간: 0,
            근무시간: 0,
            근무여부: true,
        },
        금: {
            시업시간: "",
            종업시간: "",
            휴게시간_주간: 0,
            휴게시간_야간: 0,
            근무시간: 0,
            근무여부: true,
        },
        토: {
            시업시간: "",
            종업시간: "",
            휴게시간_주간: 0,
            휴게시간_야간: 0,
            근무시간: 0,
            근무여부: false,
        }
    }
}

export const initWorker요일급여정보 = () => {
    return {
        고정유무: "주급자동",
        주급자동: 0,
        주휴포함주급: 0,
        고정주급: 0
    }
}

export const initWorkerState = (loginData: string) => {
    return {
        worker_index: 0,
        worker_name: "",
        worker_geunroja_reg_num1: "",
        worker_geunroja_reg_num2: "",
        worker_start_date: "",
        worker_end_date: "",
        worker_tel: "",
        worker_wage_term1: "당월",
        worker_wage_term2: "말일",
        worker_wage_term3: "당월",
        worker_wage_term4: "말일",
        worker_wage_date1: "당월",
        worker_wage_date2: "말일",
        worker_employ_type: "고정근로",
        worker_get_date: "",
        worker_lost_date: "",
        worker_national_pension: 0,
        worker_health_insurance: 0,
        worker_longcare_insurance: 0,
        worker_employment_insurance: 0,
        worker_income_tax: 0,
        worker_resident_tax: 0,
        worker_code_number: "",
        worker_wage_boolean: true,
        worker_insurance_boolean: true,
        worker_delete_status: false,
        worker_checked: false,
        worker_address: "",
        worker_address_detail: "",
        worker_memo: "",
        worker_muser_memo: "",
        worker_insurance_memo: "",
        worker_singo_status: 0,

        worker_weekly_data: initWorker요일정보(),
        worker_weekly_pay_data: initWorker요일급여정보(),
        worker_customer_data: customerInitState(loginData),
        worker_work_type: "정규직",
        worker_work_type_detail: "통상 근로자",
        worker_pay_type: "월급제",
        worker_pay: "0",
        worker_refresh_type: "주간",

        worker_monthly_refresh_count: 6,
        worker_weekly_work_count: 5,
        worker_주간휴무일수: 2,

        worker_start_time: new Date(''),
        worker_end_time: new Date(''),

        worker_chideuk_cost: 0,

        worker_avg_worker_count: 0
    }
}