import React from "react";
import Theme from "../../../../../styles/Theme";
import { ListCell, ListCellInner } from "../../../styles/common/ListComponents";
import { WholeWrapperDiv } from "../../../styles/common/UtillComponents"

const NodataComponent = ({
}: any) => {
    return (
        <WholeWrapperDiv
            display={`block`}
            height={`70vh`}
            bgColor={Theme.basic_white}
        >
            <ListCell
                kindOf={`null`}
            >
                <ListCellInner
                    kindOf={`null`}
                >
                    {`데이터가 존재하지 않습니다.`}
                </ListCellInner>
            </ListCell>
        </WholeWrapperDiv>
    )
}

export default React.memo(NodataComponent);