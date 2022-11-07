import { withResizeDetector } from "react-resize-detector";
import {
    WrapperDiv,
    FilterWrapper,
    WholeWrapperDiv,
} from "../../styles/common/UtillComponents";
import React from "react";
import Theme from '../../../../styles/Theme'

//datepicker
import { registerLocale } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';
import PostNumberComponent from "./subComponent/PostNumberComponent";
import DayPeriodComponent from "./subComponent/DayPeriodComponent";
import ButtonBoxComponent from "./subComponent/ButtonBoxComponent";
import SelectBoxComponent from "./subComponent/SelectBoxComponent";
registerLocale("ko", ko)

const UtilPresenter = ({
    width,

    commonState,
    commonDispatch,

    state,
    dispatch,

    fileState,
    fileDispatch,
}: any) => {
    const { componentTitle } = commonState;

    return (
        <WholeWrapperDiv
            kindOf={`utill`}
        >
            <WrapperDiv
                ju={`space-between`}
                margin={`15px 0`}
            >
                {/* 버튼 박스 */}
                <ButtonBoxComponent
                    commonState={commonState}
                    commonDispatch={commonDispatch}
                    dispatch={dispatch}
                    fileDispatch={fileDispatch}
                />
                {/* 필터 박스 전체 */}
                <FilterWrapper kindOf={`longFilter`}>
                    {/* 포스트넘버  */}
                    <PostNumberComponent
                        commonState={commonState}
                        commonDispatch={commonDispatch}
                    />
                    <div style={{ backgroundColor: Theme.grey_v2 }}></div>
                    {/* 기간 */}
                    <DayPeriodComponent
                        componentTitle={componentTitle}
                        commonState={commonState}
                        commonDispatch={commonDispatch}
                    />
                    <div style={{ backgroundColor: Theme.grey_v2 }}></div>

                    {/* 셀렉스박스2 */}
                    <SelectBoxComponent
                        componentTitle={componentTitle}
                        commonState={commonState}
                        commonDispatch={commonDispatch}
                    />
                </FilterWrapper>
            </WrapperDiv>
        </WholeWrapperDiv >
    )
}

export default React.memo(withResizeDetector(UtilPresenter));