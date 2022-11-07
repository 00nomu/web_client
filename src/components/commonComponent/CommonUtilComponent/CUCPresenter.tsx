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
import { SCREEN_SIZE } from "../../../Lib/consts";
registerLocale("ko", ko)

const UtilPresenter = ({
    windowWidth,

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
                dr={windowWidth < SCREEN_SIZE.MOBILE ? `column` : null}
                margin={`15px 0`}
            >
                {/* 버튼 박스 */}
                <ButtonBoxComponent
                    windowWidth={windowWidth}
                    commonState={commonState}
                    commonDispatch={commonDispatch}
                    dispatch={dispatch}
                    fileDispatch={fileDispatch}
                />
                {/* 필터 박스 전체 */}
                {windowWidth < SCREEN_SIZE.MOBILE ?
                    <FilterWrapper kindOf={`longFilter`}>
                        <SelectBoxComponent
                            componentTitle={componentTitle}
                            commonState={commonState}
                            commonDispatch={commonDispatch}
                        />
                    </FilterWrapper>

                    :
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

                        <SelectBoxComponent
                            windowWidth={windowWidth}
                            componentTitle={componentTitle}
                            commonState={commonState}
                            commonDispatch={commonDispatch}
                        />
                    </FilterWrapper>
                }
            </WrapperDiv>
        </WholeWrapperDiv >
    )
}

export default React.memo(UtilPresenter);