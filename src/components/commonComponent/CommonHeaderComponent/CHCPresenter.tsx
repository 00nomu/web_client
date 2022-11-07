import { withResizeDetector } from "react-resize-detector";
import {
    WrapperDiv,
    TabMenuWrapperDiv,
    WholeWrapperDiv,
} from "../../styles/common/UtillComponents";
import {
    TabMenuA,
    LineDiv
} from "../../styles/AllStyles";
import React from "react";
import Theme from '../../../../styles/Theme'
import HeaderSubtitleComponent from "./subComponent/HeaderSubtitleComponent";

const CHCPresenter = ({
    width,
    commonState,
    commonDispatch
}: any) => {

    const headerTextHandler = () => {
        switch (commonState.componentTitle) {
            case "customer":
                return "거래처 관리";
            case "webUser":
                return "사용자 관리";
            case "mobileUser":
                return "모바일 사용자 관리";
            case "warrant":
                return "경정청구";
            case "company":
                return "업체 관리";
            default:
                return "";
        }
    }

    return (
        <>
            <WholeWrapperDiv
                borderBottom={`1px solid ${Theme.grey_v5}`}
                margin={`25px 0 15px 0`}
            >
                <WrapperDiv>
                    <TabMenuWrapperDiv
                        kindOf={`headerTabMenu`}
                    >
                        <TabMenuA
                            style={{
                                color: Theme.light_blue,
                            }}
                        >
                            {headerTextHandler()}
                        </TabMenuA>
                    </TabMenuWrapperDiv>
                </WrapperDiv>
            </WholeWrapperDiv>
            <LineDiv kindOf={`header`}></LineDiv>
            <HeaderSubtitleComponent
                commonState={commonState}
                commonDispatch={commonDispatch}
            />
        </>
    )
}

export default React.memo(withResizeDetector(CHCPresenter));