import {
    WholeWrapperDiv,
} from "../../../styles/AllStyles";
import React from "react";
import Theme from '../../../../../styles/Theme'
import CommonHeaderComponent from "../../../commonComponent/CommonHeaderComponent";
import CommonUtilComponent from "../../../commonComponent/CommonUtilComponent";
import CommonListComponent from "../../../commonComponent/CommonListComponent";
import CommonModalComponent from "../../../commonComponent/CommonModalComponent";

const MobileWarrantPresenter = ({
    width,
    warrantProps
}: any) => {
    warrantProps = { ...warrantProps, width }
    return (
        <WholeWrapperDiv
            ai={`center`}
        >
            <WholeWrapperDiv
                width={Theme.allWrap}
            >
                <CommonHeaderComponent {...warrantProps} />
                <CommonUtilComponent {...warrantProps} />
                <CommonListComponent {...warrantProps} />
            </WholeWrapperDiv>
            <CommonModalComponent {...warrantProps} />

        </WholeWrapperDiv>
    )
}

export default React.memo(MobileWarrantPresenter);