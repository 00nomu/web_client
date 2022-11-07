import React from "react";
import { CheckBoxInput } from "../../../styles/AllStyles";
import { ListCell, ListCellInner, ListGrid } from "../../../styles/common/ListComponents";

const ListMobileHeaderComponent = ({
    commonState,
    commonDispatch
}: any) => {

    const {
        componentTitle,

        checkboxArray,

        allCheck
    } = commonState;

    const allcheckClickHandler = (e: any) => {
        const emptyArray = checkboxArray;
        if (allCheck) {
            emptyArray.map((item: any, index: any) => {
                item.checked = false;
            })
            commonDispatch({ name: "allCheck", value: false });

        }
        else {
            emptyArray.map((item: any, index: any) => {
                item.checked = true;
            })
            commonDispatch({ name: "allCheck", value: true });

        }

        commonDispatch({ name: "checkboxArray", value: emptyArray });
    }

    let headerList;

    switch (componentTitle) {

        case 'customer':
            headerList = [
                <CheckBoxInput
                    key={0}
                    type={`checkbox`}
                    checked={allCheck}
                    onChange={allcheckClickHandler}
                />,
                '', '상호', '대표자 성명', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`repeat(2, 40px) 1fr 1fr 15px`}

                >
                    {headerList.map((item: any, index: any) => (
                        <ListCell
                            key={index}
                            kindOf={`header`}
                            borderRight={(index === 0 || index === headerList.length - 2) ? `none` : null}
                        >
                            <ListCellInner>
                                {item}
                            </ListCellInner>
                        </ListCell>
                    ))}
                </ListGrid>
            )

        case 'company':
            headerList = [
                <CheckBoxInput
                    key={0}
                    type={`checkbox`}
                    checked={allCheck}
                    onChange={allcheckClickHandler}
                />,
                '', '상호', '대표자', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`repeat(2, 40px) 1fr 1fr 15px`}

                >
                    {headerList.map((item: any, index: any) => (
                        <ListCell
                            key={index}
                            kindOf={`header`}
                            borderRight={(index === 0 || index === headerList.length - 2) ? `none` : null}
                        >
                            <ListCellInner>
                                {item}
                            </ListCellInner>
                        </ListCell>
                    ))}
                </ListGrid>
            )
        case 'mobileUser':
            headerList = [
                <CheckBoxInput
                    key={0}
                    type={`checkbox`}
                    checked={allCheck}
                    onChange={allcheckClickHandler}
                />,
                '', '아이디', '사용자 성명', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`repeat(2, 40px) 1fr 1fr 15px`}

                >
                    {headerList.map((item: any, index: any) => (
                        <ListCell
                            key={index}
                            kindOf={`header`}
                            borderRight={(index === 0 || index === headerList.length - 2) ? `none` : null}
                        >
                            <ListCellInner>
                                {item}
                            </ListCellInner>
                        </ListCell>
                    ))}
                </ListGrid>
            )
        case 'webUser':
            headerList = [
                <CheckBoxInput
                    key={0}
                    type={`checkbox`}
                    checked={allCheck}
                    onChange={allcheckClickHandler}
                />,
                '', '사업자 상호', '아이디', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`repeat(2, 40px) 1fr 1fr 15px`}

                >
                    {headerList.map((item: any, index: any) => (
                        <ListCell
                            key={index}
                            kindOf={`header`}
                            borderRight={(index === 0 || index === headerList.length - 2) ? `none` : null}
                        >
                            <ListCellInner>
                                {item}
                            </ListCellInner>
                        </ListCell>
                    ))}
                </ListGrid>
            )
        case 'warrant':
            headerList = [
                <CheckBoxInput
                    key={0}
                    type={`checkbox`}
                    checked={allCheck}
                    onChange={allcheckClickHandler}
                />,
                '', '상호', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`repeat(2, 40px) 2fr 15px`}

                >
                    {headerList.map((item: any, index: any) => (
                        <ListCell
                            key={index}
                            kindOf={`header`}
                            borderRight={(index === 0 || index === headerList.length - 2) ? `none` : null}
                        >
                            <ListCellInner>
                                {item}
                            </ListCellInner>
                        </ListCell>
                    ))}
                </ListGrid>
            )

        default:
            return (
                <></>
            )

    }
}

export default React.memo(ListMobileHeaderComponent);