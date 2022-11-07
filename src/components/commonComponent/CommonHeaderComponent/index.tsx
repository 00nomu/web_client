import React from "react";
import CHCPresenter from "./CHCPresenter";

const CommonHeaderComponent = (props: any) => {
    // props로 전달받을 값들
    const {
        commonState,
        commonDispatch
    } = props;

    return (
        <CHCPresenter
            commonState={commonState}
            commonDispatch={commonDispatch}
        />
    )
}
export default React.memo(CommonHeaderComponent);