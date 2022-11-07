import React from "react";
import { axiosReadListHandler } from "../../../../modules/axios/axiosCRUD";
import { Select } from "../../../styles/common/UtillComponents"

const PostNumberComponent = ({
    commonState,
    commonDispatch,
}: any) => {

    const changePostNumberHandler = (e: any) => {
        commonDispatch({ name: "postNumber", value: e.target.value });
        axiosReadListHandler(
            { ...commonState, postNumber: parseInt(e.target.value) },
            commonDispatch,
        )
    }
    return (
        <Select
            textAlign={`center`}
            onChange={changePostNumberHandler}
        >
            <option value={`10`}>10</option>
            <option value={`20`}>20</option>
            <option value={`30`}>30</option>
            <option value={`50`} selected>50</option>
        </Select>
    )
}

export default React.memo(PostNumberComponent);