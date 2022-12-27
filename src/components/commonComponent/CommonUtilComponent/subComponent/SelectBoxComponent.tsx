import React from "react";
import { companySelectData, companySelectTitle } from "../../../../Lib/array/company";
import { customerSelectData, customerSelectTitle } from "../../../../Lib/array/customer";
import { mUserSelectData, mUserSelectTitle } from "../../../../Lib/array/muser";
import { userSelectData, userSelectTitle } from "../../../../Lib/array/user";
import { warrantCompanyCode, warrantCompanyName, warrantMainTypeArray, warrantSelectData, warrantSelectTitle } from "../../../../Lib/array/warrant";
import { searchIcon } from "../../../../Lib/svg";
import { axiosReadListHandler } from "../../../../modules/axios/axiosCRUD";
import { Button, FilterBox, Input, Select } from "../../../styles/common/UtillComponents"
import { SCREEN_SIZE } from "../../../../Lib/consts";

const SelectBoxComponent = ({
    windowWidth,
    commonState,
    commonDispatch,
}: any) => {

    const {
        componentTitle,

        searchText,
        searchSelectBox,
        searchSubSelectBox,

    } = commonState;

    const selectBoxChangeHandler = (e: any) => {
        if (e.target.name === 'select_main') {
            if (e.target.value === '직접입력') {
                commonDispatch({ name: "searchSubSelectBox", value: "직접입력" });
                commonDispatch({ name: "searchSelectBox", value: e.target.value });
            } else {
                commonDispatch({ name: "searchSubSelectBox", value: "직접입력" });
                commonDispatch({ name: "searchSelectBox", value: e.target.value });
                commonDispatch({ name: "searchText", value: "" });
            }

        } else if (e.target.name === 'select_sub') {
            commonDispatch({ name: "searchSubSelectBox", value: e.target.value });
            commonDispatch({ name: "searchText", value: "" });

        } else if (e.target.name === 'date_text') {
            commonDispatch({ name: "searchDateBox", value: e.target.value });
        } else if (e.target.name === 'select_text') {
            commonDispatch({ name: "searchSelectBox", value: e.target.value });
        }
    }

    const searchSubmitHandler = async (e: any) => {
        e.preventDefault();
        await axiosReadListHandler(
            { ...commonState, pageNumber: 0 },
            commonDispatch
        )
    }


    let selectTitle: any = [];
    let selectData: any = [];

    switch (componentTitle) {
        /**
         * 거래처
         */
        case 'customer':
            selectTitle = customerSelectTitle;
            selectData = customerSelectData;
            return (
                <form
                    onSubmit={searchSubmitHandler}
                >
                    <FilterBox
                        kindOf={`temporary`}
                    >
                        {windowWidth > SCREEN_SIZE.MOBILE &&
                            <Select
                                kindOf={`filter`}
                                name={`select_main`}
                                value={searchSelectBox}
                                onChange={(e: any) => { selectBoxChangeHandler(e) }}
                            >
                                {selectTitle.map((item: any, i: any) => (
                                    <option key={i} value={selectData[i]} >{item} </option>
                                ))}
                            </Select>
                        }
                        {searchSelectBox === '전체' ||
                            searchSelectBox === 'customer_name' ||
                            searchSelectBox === 'customer_owner_name' ||
                            searchSelectBox === 'customer_muser_id'

                            ? (
                                <Input
                                    kindOf={`search`}
                                    type={`text`}
                                    value={searchText}
                                    onChange={(e: any) => { commonDispatch({ name: "searchText", value: e.target.value }); }}
                                    placeholder={`검색어를 입력 후 엔터를 눌러주세요.`}
                                />
                            )
                            :
                            (searchSelectBox === 'customer_create_route') ?
                                <Select
                                    kindOf={`filter`}
                                    nmae={`select_sub`}
                                    value={searchText}
                                    onChange={(e: any) => { commonDispatch({ name: "searchText", value: e.target.value }); }}
                                >
                                    <option value={'웹'} >웹</option>
                                    <option value={'모바일'} >모바일</option>
                                </Select>
                                :
                                <>
                                    {searchSubSelectBox === '직접입력' ? (
                                        <Input
                                            kindOf={`search`}
                                            type={`text`}
                                            value={searchText}
                                            onChange={(e: any) => { commonDispatch({ name: "searchText", value: e.target.value }); }}
                                            placeholder={`검색어를 입력 후 엔터를 눌러주세요.`}
                                        />
                                    ) : (<>
                                    </>)}

                                </>
                        }

                        <Button
                            type={`button`}
                            kindOf={`searchGreyButton`}
                            hoverGrey={true}
                            onClick={searchSubmitHandler}
                        >
                            {searchIcon()}
                        </Button>
                    </FilterBox>
                </form>
            )
        /**
         * 업체 관리
         */
        case 'company':
            selectTitle = companySelectTitle;
            selectData = companySelectData;
            return (
                <form
                    onSubmit={searchSubmitHandler}
                >
                    <FilterBox
                        kindOf={`search`}
                    >
                        <Select
                            kindOf={`filter`}
                            name={`select_text`}
                            value={searchSelectBox}
                            onChange={(e: any) => { selectBoxChangeHandler(e) }}
                        >
                            {selectTitle.map((item: any, i: any) => (
                                <option key={i} value={selectData[i]} >{item} </option>
                            ))}
                        </Select>

                        <Input
                            kindOf={`search`}
                            type={`text`}
                            value={searchText}
                            onChange={(e: any) => { commonDispatch({ name: "searchText", value: e.target.value }); }}
                            placeholder={`검색어를 입력 후 엔터를 눌러주세요.`}
                        />
                        <Button
                            type={`button`}
                            kindOf={`searchGreyButton`}
                            hoverGrey={true}
                            onClick={searchSubmitHandler}
                        >
                            {searchIcon()}
                        </Button>
                    </FilterBox>
                </form>
            )
        /**
         * 사용자, 모바일 사용자
         */
        case 'webUser':
            selectTitle = userSelectTitle;
            selectData = userSelectData;
        case 'mobileUser':
            selectTitle = mUserSelectTitle;
            selectData = mUserSelectData;
            return (
                <form
                    onSubmit={searchSubmitHandler}
                >
                    <FilterBox
                        kindOf={`search`}
                    >
                        <Select
                            kindOf={`filter`}
                            name={`select_text`}
                            value={searchSelectBox}
                            onChange={(e: any) => { selectBoxChangeHandler(e) }}
                        >
                            {selectTitle.map((item: any, i: any) => (
                                <option key={i} value={selectData[i]} >{item} </option>
                            ))}
                        </Select>

                        <Input
                            kindOf={`search`}
                            type={`text`}
                            value={searchText}
                            onChange={(e: any) => { commonDispatch({ name: "searchText", value: e.target.value }); }}
                            placeholder={`검색어를 입력 후 엔터를 눌러주세요.`}
                        />
                        <Button
                            type={`button`}
                            kindOf={`searchGreyButton`}
                            hoverGrey={true}
                            onClick={searchSubmitHandler}
                        >
                            {searchIcon()}
                        </Button>
                    </FilterBox>
                </form>
            )
        case 'warrant':
            selectTitle = warrantSelectTitle;
            selectData = warrantSelectData;
            return (
                <form
                    onSubmit={searchSubmitHandler}
                >
                    <FilterBox
                        kindOf={`search`}
                    >
                        {windowWidth > SCREEN_SIZE.MOBILE &&
                            <Select
                                kindOf={`filter`}
                                name={`select_main`}
                                value={searchSelectBox}
                                onChange={(e: any) => { selectBoxChangeHandler(e) }}
                            >
                                {warrantSelectTitle.map((item: any, i: any) => (
                                    <option key={i} value={warrantSelectData[i]} >{item}</option>
                                ))}
                                {commonState.loginData.user_auth < 2 &&
                                    <option key={4} value={'company_name'} >업체명</option>
                                }
                            </Select>
                        }

                        {searchSelectBox === '전체' ||
                            searchSelectBox === 'warrant_company_name' ||
                            searchSelectBox === 'company_name' ||
                            searchSelectBox === 'warrant_owner_name' ||
                            searchSelectBox === 'warrant_company_code' ? (
                            <Input
                                kindOf={`search`}
                                type={`text`}
                                value={searchText}
                                onChange={(e: any) => { commonDispatch({ name: "searchText", value: e.target.value }); }}
                                placeholder={`검색어를 입력 후 엔터를 눌러주세요.`}
                            />
                        )
                                :
                                <>
                                    <Select
                                        kindOf={`filter`}
                                        name={`select_sub`}
                                        value={searchSubSelectBox}
                                        onChange={(e: any) => { selectBoxChangeHandler(e) }}
                                    >
                                        {searchSelectBox === 'warrant_main_type' ? (
                                            <>
                                                {warrantMainTypeArray.map((item: any, i: any) => (
                                                    <option key={i} value={i} >{warrantMainTypeArray[i]} </option>
                                                ))}
                                            </>
                                        )
                                            :
                                            searchSelectBox === 'warrant_manage_code' ?
                                                (
                                                    <>
                                                        {warrantCompanyCode.map((item: any, i: any) => (
                                                            <option key={i} value={item} >{warrantCompanyName[i]} </option>
                                                        ))}
                                                    </>
                                                )
                                                :
                                                (searchSelectBox === 'warrant_special_people_boolean') ?
                                                    <>
                                                        <option value={0}>파악필요</option>
                                                        <option value={1}>특이사항없음</option>
                                                        <option value={2}>파악완료</option>
                                                    </>
                                                    :
                                                    (searchSelectBox === 'warrant_refund_boolean') &&
                                                    <>
                                                        <option value={0}>조회중</option>
                                                        <option value={1}>환급 가능</option>
                                                        <option value={2}>환급금 없음</option>
                                                    </>
                                        }

                                    </Select>
                                </>

                        }
                        <Button
                            type={`button`}
                            kindOf={`searchGreyButton`}
                            hoverGrey={true}
                            onClick={searchSubmitHandler}
                        >
                            {searchIcon()}
                        </Button>
                    </FilterBox>
                </form>
            )
        default:
            return (
                <></>
            )
    }


}

export default React.memo(SelectBoxComponent);