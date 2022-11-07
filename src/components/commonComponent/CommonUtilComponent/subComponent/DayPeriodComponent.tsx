import { DatepickerDiv, FilterBox, Select, WrapperDiv } from "../../../styles/common/UtillComponents"

//datepicker
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { customerBasicDateData, customerBasicTitleDate, customerDateData, customerDateTitle } from "../../../../Lib/array/customer";
import { companyBasicTitleDate, companyUserBasicDateData, companyUserDateData, companyUserDateTitle } from "../../../../Lib/array/company";
import { userBasicDateData, userBasicTitleDate, userDateData, userDateTitle } from "../../../../Lib/array/user";
import { warrantBasicDateData, warrantBasicTitleDate, warrantDateData, warrantDateTitle } from "../../../../Lib/array/warrant";
import { mUserBasicDateData, mUserBasicTitleDate, mUserDateData, mUserDateTitle } from "../../../../Lib/array/muser";
import React from "react";

const DayPeriodComponent = ({
    commonState,
    commonDispatch,

}: any) => {

    const {
        componentTitle,
        range,
        searchDateBox,

        startDateObject,
        endDateObject,
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

    const rangeChangeHandler = (e: any) => {
        commonDispatch({ name: "range", value: e.target.value })
    }

    let basicTitleDate: any = [];
    let basicDateData: any = [];
    let dateTitle: any = [];
    let dateData: any = [];

    switch (componentTitle) {
        case 'customer':
            basicTitleDate = customerBasicTitleDate;
            basicDateData = customerBasicDateData;
            dateTitle = customerDateTitle;
            dateData = customerDateData;
            break;
        case 'company':
            basicTitleDate = companyBasicTitleDate;
            basicDateData = companyUserBasicDateData;
            dateTitle = companyUserDateTitle;
            dateData = companyUserDateData;
            break;
        /**
         * 사용자, 모바일 사용자
         */
        case 'webUser':
            basicTitleDate = userBasicTitleDate;
            basicDateData = userBasicDateData;
            dateTitle = userDateTitle;
            dateData = userDateData;
            break;
        case 'mobileUser':
            basicTitleDate = mUserBasicTitleDate;
            basicDateData = mUserBasicDateData;
            dateTitle = mUserDateTitle;
            dateData = mUserDateData;
            break;
        case 'warrant':
            basicTitleDate = warrantBasicTitleDate;
            basicDateData = warrantBasicDateData;
            dateTitle = warrantDateTitle;
            dateData = warrantDateData;
            break;
        default:
            break;
    }

    return (
        <FilterBox
            kindOf={`term`}
        >
            <span>기간</span>
            {/* 셀렉트박스1 */}
            <Select
                kindOf={`filter`}
                name={`date`}
                value={range}
                onChange={(e: any) => { rangeChangeHandler(e) }}
            >
                {basicTitleDate.map((item: any, i: any) => (
                    <option key={i} value={basicDateData[i]} >{item} </option>
                ))}
            </Select>
            <Select
                kindOf={`filter`}
                name={`date_text`}
                value={searchDateBox}
                onChange={(e: any) => { selectBoxChangeHandler(e) }}
            >
                {dateTitle.map((item: any, i: any) => (
                    <option key={i} value={dateData[i]} >{item} </option>
                ))}
            </Select>

            <DatepickerDiv>
                <DatePicker
                    className={`datepicker`}
                    locale={`ko`}
                    dateFormat={`yyyy.MM.dd`}
                    selected={startDateObject}
                    onChange={(date) => commonDispatch({ name: "startDateObject", value: date })}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
            </DatepickerDiv>
            <WrapperDiv>
                ~
            </WrapperDiv>
            <DatepickerDiv>
                <DatePicker
                    className={`datepicker`}
                    locale={`ko`}
                    dateFormat={`yyyy.MM.dd`}
                    selected={endDateObject}
                    onChange={(date) => commonDispatch({ name: "endDateObject", value: date })}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
            </DatepickerDiv>
        </FilterBox>
    )
}

export default React.memo(DayPeriodComponent);