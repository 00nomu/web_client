import {
    WholeWrapperDiv,
} from "../../../styles/AllStyles";
import React from "react";
import Theme from "../../../../../styles/Theme";

// import WagelModal from "./Body/WageModal"
import CommonHeaderComponent from "../../../commonComponent/CommonHeaderComponent";
import CommonUtilComponent from "../../../commonComponent/CommonUtilComponent";
import CommonListComponent from "../../../commonComponent/CommonListComponent";
import CommonModalComponent from "../../../commonComponent/CommonModalComponent";

const CustomerPresenter = ({
    width,
    customerProps
}: any) => {
    return (
        <WholeWrapperDiv
            ai={`center`}
        >
            <WholeWrapperDiv
                width={Theme.allWrap}
            >
                <CommonHeaderComponent {...customerProps} />
                <CommonUtilComponent {...customerProps} />
                <CommonListComponent {...customerProps} />
            </WholeWrapperDiv>
            <CommonModalComponent {...customerProps} />
        </WholeWrapperDiv>
    )
}

export default React.memo(CustomerPresenter);