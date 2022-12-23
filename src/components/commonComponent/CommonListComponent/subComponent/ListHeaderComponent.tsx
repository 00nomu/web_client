import React from "react";
import { CheckBoxInput } from "../../../styles/AllStyles";
import { ListCell, ListCellInner, ListGrid } from "../../../styles/common/ListComponents";

const ListHeaderComponent = ({
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
                '', '등록일', '등록자', '상호', '대표자 성명', '사업자등록번호', '연락처', '지역', '4대보험', '생성경로', '모바일 ID', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`40px 40px repeat(2, 0.5fr) 1fr  repeat(7, 0.5fr) 15px`}

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
                '', '생성일', '상호', '대표자', '연락처', '사업자등록번호', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`40px 0.3fr repeat(5, 1fr) 15px`}

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
                '', '생성일', '아이디', '비밀번호', '사용자 성명', '연락처', '사업장 수', '유입경로', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`repeat(2, 40px) 0.5fr repeat(6, 1fr) 15px`}

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
                '', '사업자 번호', '사업자 상호', '생성일', '생성자', '사용자 성명', '직급', '아이디', '비밀번호', '연락처', '사원번호', '비고', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`repeat(2, 40px) 0.5fr repeat(10, 1fr) 15px`}

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
                '', '등록일', '상호', '개인/법인', '대표자 성명', '업태', '주민등록번호', '주민등록증(첨부)', '사업자등록번호', '사업자등록증(첨부)', '인감도장(첨부)','인감증명서(첨부)','특수관계인 여부', '특수관계인 파악필요 인원', '특수관계인 파악 결과', '환급여부', '최종환급금액', '업체명', ''
            ];
            return (
                <ListGrid
                    kindOf={`header`}
                    gtc={`repeat(2, 40px) 0.6fr 2fr 0.5fr repeat(2, 0.6fr) repeat(12, 0.9fr) 15px`}

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

export default React.memo(ListHeaderComponent);