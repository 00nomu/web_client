import { modalSubmitHandler } from "./axios/axiosCRUD";
import { axiosFileUploadHandler } from "./axios/axiosFIle";

const dataSubmitHandler = async (
    e: any,
    componentTitle: string,

    commonState: any,
    commonDispatch: any,

    state: any,
    dispatch: any,

    fileState?: any,
    fileDispatch?: any
) => {
    e.preventDefault();
    await modalSubmitHandler(
        commonState,
        commonDispatch,
        state,
        dispatch,
    ).then(async (result) => {
        switch (componentTitle) {
            case "customer":
                if (fileState.file_url !== '') {
                    await axiosFileUploadHandler(
                        state.customer_code,
                        fileState.file_name,
                        fileState.file_where,
                        fileState.file_kinds,
                        fileState.file_object
                    );
                }
                fileDispatch({ type: 'init' });
                break;

            case "warrant":
                // 인감도장
                if (fileState.warrant_stamp_object !== '') {
                    await axiosFileUploadHandler(
                        state.warrant_company_code,
                        state.warrant_stamp_name,
                        "customer",
                        "stamp",
                        fileState.warrant_stamp_object
                    )
                }

                // 사업자등록증
                if (fileState.warrant_business_reg_card_object !== '') {
                    await axiosFileUploadHandler(
                        state.warrant_company_code,
                        state.warrant_business_reg_card_name,
                        "customer",
                        "business",
                        fileState.warrant_business_reg_card_object
                    )
                }

                // 주민등록증
                if (fileState.warrant_personal_reg_card_object !== '') {
                    await axiosFileUploadHandler(
                        state.warrant_company_code,
                        state.warrant_personal_reg_card_name,
                        "customer",
                        "regcard",
                        fileState.warrant_personal_reg_card_object
                    )
                }

                // 환급 완료 보고
                if (fileState.warrant_refund_complete_object !== '') {
                    await axiosFileUploadHandler(
                        state.warrant_company_code,
                        state.warrant_refund_complete_name,
                        "customer",
                        "warrant_refund_complete",
                        fileState.warrant_refund_complete_object
                    )
                }

                // 인감증명서
                if (fileState.warrant_complete_object !== '') {
                    await axiosFileUploadHandler(
                        state.warrant_company_code,
                        state.warrant_complete_name,
                        "customer",
                        "warrant_complete",
                        fileState.warrant_complete_object
                    )
                }

                fileDispatch({ type: 'init' });
                break;
            default:
                break;
        }
    })

}

export default dataSubmitHandler;
