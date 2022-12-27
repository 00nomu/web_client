import moment from "moment";
import React from "react";
import { useState } from "react";
import Theme from "../../../../../styles/Theme";
import { warrantMainTypeArray } from "../../../../Lib/array/warrant";
import { commonFiveIcon, commonFourIcon } from "../../../../Lib/svg";
import refreshDataOne from "../../../../modules/refreshDataOne";
import { companyNumber, phoneNumber } from "../../../../modules/replace";
import { CheckBoxInput, WholeWrapperDiv } from "../../../styles/AllStyles";
import { ListCell, ListCellInner, ListGrid } from "../../../styles/common/ListComponents";
import LoadingDataComponent from "./LoadingDataComponent";

const ListBodyComponent = ({

    commonState,
    commonDispatch,

    state,
    dispatch,

    fileState,
    fileDispatch

}: any) => {

    const {
        componentTitle,

        isLoading,
        dataList,

        checkboxArray,

        pageNumber,
        postNumber,

    } = commonState;

    const [clickBackgroundColor, setClickBackgroundColor] = useState(""); // 리스트 클릭 시  클릭된 데이터 남아있음

    const checkboxClickHandler = (e: any) => {
        const emptyArray = checkboxArray;
        emptyArray[e.target.id].checked = !emptyArray[e.target.id].checked;
        commonDispatch({ name: "checkboxArray", value: emptyArray });
    }

    const listClickHandler = (code: any) => {
        commonDispatch({ name: "modalKinds", value: "수정" });

        refreshDataOne(
            componentTitle,
            code,
            dispatch,
            fileDispatch
        );
        commonDispatch({ name: "modalOpen", value: true })
        setClickBackgroundColor(code);
    }

    switch (componentTitle) {
        case 'customer':
            return (
                <WholeWrapperDiv
                    display={`block`}
                    height={`70vh`}
                    bgColor={Theme.basic_white}
                    overflowY={`scroll`}
                >
                    {isLoading === true ? // 데이터를 받아오는 중일경우
                        <LoadingDataComponent />
                        :
                        <></>
                    }

                    {dataList.map((item: any, index: any) =>

                        <ListGrid
                            style={{ backgroundColor: (clickBackgroundColor === item.customer_code) && Theme.hover }}
                            hover={true}
                            kindOf={`lists`}
                            gtc={`40px 40px repeat(2, 0.5fr) 1fr repeat(7, 0.5fr) `}
                            key={index}
                        >
                            <ListCell
                                borderRight={`none`}
                            >
                                <ListCellInner>
                                    <CheckBoxInput
                                        id={index}
                                        type={`checkbox`}
                                        checked={checkboxArray[index]?.checked}
                                        onChange={checkboxClickHandler}
                                    />
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                kindOf={`numbering`}
                            >
                                <ListCellInner>
                                    {(pageNumber * postNumber) + (index + 1)}
                                </ListCellInner>
                            </ListCell>

                            {/* 등록일 */}
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {(moment(item.customer_created).format() === "Invalid date") ? (<>-</>) : moment(item.customer_created).format("YYYY-MM-DD HH:mm:ss")}
                                </ListCellInner>
                            </ListCell>

                            {/* 등록자 */}
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.customer_create_name !== "" && item.customer_create_name ? item.customer_create_name : '-'}
                                </ListCellInner>
                            </ListCell>

                            {/* 상호 */}
                            <ListCell
                                kindOf={`alignLeft`}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.customer_scale_status === 0 ? commonFourIcon() : commonFiveIcon()} &nbsp;{item.customer_name}
                                </ListCellInner>
                            </ListCell>
                            {/* 대표자 성명 */}
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.customer_owner_name !== "" ? companyNumber(item.customer_owner_name) : '-'}
                                </ListCellInner>

                            </ListCell>
                            {/* 사업자 코드 */}
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.customer_code !== "" ? companyNumber(item.customer_code) : '-'}
                                </ListCellInner>

                            </ListCell>

                            {/* 연락처 */}
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.customer_tel !== "" && item.customer_tel ? phoneNumber(item.customer_tel) : '-'}
                                </ListCellInner>

                            </ListCell>

                            {/* 주소 */}
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {(item.customer_address !== "" && item.customer_address && (item.customer_address)) ? item.customer_address.split(' ')[0] + ' ' + item.customer_address.split(' ')[1] : ''}
                                </ListCellInner>

                            </ListCell>

                            {/* 4대보험 */}
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {(item.customer_four_insurance_name !== "" && item.customer_four_insurance_name) ? item.customer_four_insurance_name : '-'}
                                </ListCellInner>
                            </ListCell>

                            {/* 생성경로 */}
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {(item.customer_create_route !== "" && item.customer_create_route) ? item.customer_create_route : '-'}
                                </ListCellInner>
                            </ListCell>

                            {/* 모바일id */}
                            <ListCell
                                kindOf={`lastCell`}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {(item.customer_muser_id !== "" && item.customer_muser_id) ? item.customer_muser_id : '-'}
                                </ListCellInner>
                            </ListCell>

                        </ListGrid>
                    )}
                </WholeWrapperDiv>
            )
        case 'company':
            /**
             * 업체 관리
             */
            return (
                <WholeWrapperDiv
                    display={`block`}
                    overflowY={`scroll`}
                    height={`70vh`}
                    bgColor={Theme.basic_white}
                >
                    {isLoading === true ? // 데이터를 받아오는 중일경우
                        <LoadingDataComponent />
                        :
                        <></>
                    }
                    {dataList.map((item: any, index: any) =>

                        <ListGrid
                            hover={true}
                            kindOf={`lists`}
                            gtc={`40px 0.3fr repeat(5, 1fr)`}
                            key={index}
                        >
                            <ListCell
                                borderRight={`none`}
                            >
                                <CheckBoxInput
                                    id={index}
                                    type={`checkbox`}
                                    checked={checkboxArray[index]?.checked}
                                    onChange={checkboxClickHandler}
                                />
                            </ListCell>
                            <ListCell
                                kindOf={`numbering`}
                            >
                                {(pageNumber * postNumber) + (index + 1)}
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.company_created ? moment(item.company_created).format("YYYY-MM-DD") : '-'}
                                </ListCellInner>
                            </ListCell>

                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.company_name ? item.company_name : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.company_owner_name ? item.company_owner_name : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.company_tel ? phoneNumber(item.company_tel) : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.company_code ? companyNumber(item.company_code) : '-'}
                                </ListCellInner>
                            </ListCell>

                        </ListGrid>
                    )}
                </WholeWrapperDiv>
            )
        /**
         * 모바일 사용자 관리
         */
        case 'mobileUser':
            return (
                <WholeWrapperDiv
                    display={`block`}
                    overflowY={`scroll`}
                    height={`70vh`}
                    bgColor={Theme.basic_white}
                >
                    {isLoading === true ? // 데이터를 받아오는 중일경우
                        <LoadingDataComponent />
                        :
                        <></>
                    }

                    {dataList.map((item: any, index: any) =>

                        <ListGrid
                            hover={true}
                            kindOf={`lists`}
                            gtc={`repeat(2, 40px) 0.5fr repeat(6, 1fr)`}
                            key={index}
                        >
                            <ListCell
                                borderRight={`none`}
                            >
                                <CheckBoxInput
                                    id={index}
                                    type={`checkbox`}
                                    checked={checkboxArray[index]?.checked}
                                    onChange={checkboxClickHandler}
                                />
                            </ListCell>
                            <ListCell
                                kindOf={`numbering`}
                            >
                                {(pageNumber * postNumber) + (index + 1)}
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                {moment(item.muser_created).format("YYYY-MM-DD")}
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.muser_id}
                                </ListCellInner>
                            </ListCell>

                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.muser_password}
                                </ListCellInner>
                            </ListCell>

                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.muser_name ? item.muser_name : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.muser_tel ? item.muser_tel : '-'}
                                </ListCellInner>
                            </ListCell>
                            {/* 사업장 수 */}
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.muser_customer_count}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.muser_mobile_signup === 1 ? '모바일' : '웹'}
                                </ListCellInner>
                            </ListCell>

                        </ListGrid>
                    )}
                </WholeWrapperDiv>
            )
        case 'webUser':
            return (
                <WholeWrapperDiv
                    display={`block`}
                    overflowY={`scroll`}
                    height={`70vh`}
                    bgColor={Theme.basic_white}
                >
                    {isLoading === true ? // 데이터를 받아오는 중일경우
                        <LoadingDataComponent />
                        :
                        <></>
                    }

                    {dataList.map((item: any, index: any) =>

                        <ListGrid
                            hover={true}
                            kindOf={`lists`}
                            gtc={`repeat(2, 40px) 0.5fr repeat(10, 1fr)`}
                            key={index}
                        >
                            <ListCell
                                borderRight={`none`}
                            >
                                <CheckBoxInput
                                    id={index}
                                    type={`checkbox`}
                                    checked={checkboxArray[index]?.checked}
                                    onChange={checkboxClickHandler} />
                            </ListCell>
                            <ListCell
                                kindOf={`numbering`}
                            >
                                {(pageNumber * postNumber) + (index + 1)}
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                {item.user_company_code}
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                {item.company_name}
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {moment(item.user_created).format("YYYY-MM-DD")}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.user_create_name ? item.user_create_name : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.user_name ? item.user_name : '-'}
                                </ListCellInner>
                            </ListCell>

                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.user_grade ? item.user_grade : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.user_id ? item.user_id : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.user_password ? item.user_password : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.user_phone ? phoneNumber(item.user_phone) : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.user_number ? item.user_number : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                kindOf={`lastCell`}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.user_note ? item.user_note : '-'}
                                </ListCellInner>
                            </ListCell>

                        </ListGrid>
                    )}
                </WholeWrapperDiv>
            )
        case 'warrant':
            return (
                <WholeWrapperDiv
                    display={`block`}
                    overflowY={`scroll`}
                    height={`70vh`}
                    bgColor={Theme.basic_white}
                >
                    {isLoading === true ? // 데이터를 받아오는 중일경우
                        <LoadingDataComponent />
                        :
                        <></>
                    }

                    {dataList.map((item: any, index: any) =>

                        <ListGrid
                            hover={true}
                            kindOf={`lists`}
                            gtc={`repeat(2, 40px) 0.6fr 2fr 0.5fr repeat(2, 0.6fr) repeat(12, 0.9fr)`}
                            key={index}
                        >
                            <ListCell
                                borderRight={`none`}
                            >
                                <CheckBoxInput
                                    id={index}
                                    type={`checkbox`}
                                    checked={checkboxArray[index]?.checked}
                                    onChange={checkboxClickHandler}
                                />
                            </ListCell>
                            <ListCell
                                kindOf={`numbering`}
                            >
                                {(pageNumber * postNumber) + (index + 1)}
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                {moment(item.warrant_sign_date).format("YYYY-MM-DD")}
                            </ListCell>
                            <ListCell
                                style={{ color: !item.warrant_company_name && 'red' }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_company_name ? item.warrant_company_name : '미기재'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                {item.warrant_company_type === 0 ? '개인' : '법인'}
                            </ListCell>
                            <ListCell
                                style={{ color: !item.warrant_company_name && 'red' }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_owner_name ? item.warrant_owner_name : '미기재'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_main_type ? warrantMainTypeArray[item.warrant_main_type] : '미기재'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_reg_number ? <>{item.warrant_reg_number}-{item.warrant_reg_number2}</> : '미기재'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                style={{ color: !item.warrant_personal_reg_card_path && 'red' }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_personal_reg_card_path ? '첨부 O' : '첨부 X'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                style={{ color: !item.warrant_company_code && 'red' }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_company_code ? companyNumber(item.warrant_company_code) : '미기재'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                style={{ color: !item.warrant_business_reg_card_path && 'red' }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_business_reg_card_path ? '첨부 O' : '첨부 X'}
                                </ListCellInner>
                            </ListCell>

                            <ListCell
                                style={{ color: !item.warrant_stamp_path && 'red' }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_stamp_path ? '첨부 O' : '첨부 X'}
                                </ListCellInner>
                            </ListCell>

                            <ListCell
                                style={{ color: !item.warrant_complete_path && 'red' }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_complete_path ? '첨부 O' : '첨부 X'}
                                </ListCellInner>
                            </ListCell>


                            <ListCell
                                style={{ color: item.warrant_special_people_boolean === 0 && "red" }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_special_people_boolean === 0 ? '파악필요' : item.warrant_special_people_boolean === 1 ? '특이사항없음' : '파악완료'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                style={{ color: !item.warrant_special_peoples && "red" }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_special_peoples ? item.warrant_special_peoples : '미기재'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                style={{ color: !item.warrant_special_people_result && "red" }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_special_people_result ? item.warrant_special_people_result : ""}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                style={{ color: item.warrant_refund_boolean === 0 && "red" }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_refund_boolean === 0 ? '조회중' : item.warrant_refund_boolean === 1 ? '환급 가능' : '환급금 없음'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                style={{ color: item.warrant_refund_boolean === 0 && "red" }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_refund_boolean === 0 ? '조회중' : item.warrant_refund_boolean === 1 ? item.warrant_refund_amount : '-'}
                                </ListCellInner>
                            </ListCell>
                            <ListCell
                                borderRight={item.company_name && `none`}
                                style={{ color: !item.company_name && "red" }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.company_name ? item.company_name : '미기재'}
                                </ListCellInner>
                            </ListCell>

                        </ListGrid>
                    )}
                </WholeWrapperDiv>
            )
        default:
            return (
                <></>
            )
    }
}


export default React.memo(ListBodyComponent);