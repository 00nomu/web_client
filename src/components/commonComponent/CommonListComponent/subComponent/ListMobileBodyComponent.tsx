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

const ListMobileBodyComponent = ({

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
                            gtc={`repeat(2, 40px) 1fr 1fr `}
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
                            gtc={`repeat(2, 40px) 1fr 1fr`}
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
                            gtc={`repeat(2, 40px) 1fr 1fr`}
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
                                    {item.muser_id}
                                </ListCellInner>
                            </ListCell>

                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.muser_name ? item.muser_name : '-'}
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
                            gtc={`repeat(2, 40px) 1fr 1fr`}
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
                                {item.company_name}
                            </ListCell>
                            <ListCell
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.user_id ? item.user_id : '-'}
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
                            gtc={`repeat(2, 40px) 2fr `}
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
                                style={{ color: !item.warrant_company_name && 'red' }}
                                onClick={(e: any) => { listClickHandler(item); }}
                            >
                                <ListCellInner>
                                    {item.warrant_company_name ? item.warrant_company_name : '미기재'}
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


export default React.memo(ListMobileBodyComponent);