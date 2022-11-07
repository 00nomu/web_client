import { withResizeDetector } from "react-resize-detector";
import {
    WholeWrapperDiv,
} from "../../../styles/AllStyles";
import React from "react";
import Theme from "../../../../../styles/Theme";

import CommonHeaderComponent from "../../../commonComponent/CommonHeaderComponent";
import CommonUtilComponent from "../../../commonComponent/CommonUtilComponent";
import CommonListComponent from "../../../commonComponent/CommonListComponent";
import CommonModalComponent from "../../../commonComponent/CommonModalComponent";

const CompanyPresenter = ({
    width,
    companyProps,
}: any) => {
    return (
        <WholeWrapperDiv
            ai={`center`}
        >
            <WholeWrapperDiv
                width={Theme.allWrap}
            >
                <CommonHeaderComponent {...companyProps} />
                <CommonUtilComponent {...companyProps} />
                <CommonListComponent {...companyProps} />
            </WholeWrapperDiv>
            <CommonModalComponent {...companyProps} />
        </WholeWrapperDiv>
    )
}

export default React.memo(withResizeDetector(CompanyPresenter));
