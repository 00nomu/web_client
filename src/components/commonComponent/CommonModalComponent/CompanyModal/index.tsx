import React from "react";
import ModalPresenter from "./ModalPresenter";

const CompanyModal = (props: any) => {
    return (
        <ModalPresenter
            props={props}
        />
    )
}
export default React.memo(CompanyModal);