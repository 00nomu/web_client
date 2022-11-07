import React from "react";
import { DotLoader } from "react-spinners";
import ThemeColor from "../../../../../styles/Theme";
import { WrapperDiv } from "../../../styles/common/UtillComponents";

const LoadingDataComponent = ({
}: any) => {
    return (
        <WrapperDiv
            height={`100%`}
            bgColor={ThemeColor.basic_white}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <DotLoader
                loading={true}
                color={ThemeColor.light_blue}
                size={50} />
        </WrapperDiv>
    )
}

export default React.memo(LoadingDataComponent);