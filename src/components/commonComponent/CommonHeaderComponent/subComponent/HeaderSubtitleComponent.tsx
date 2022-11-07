import { TabMenuA, TabMenuBarDiv, TabMenuWrapperDiv, WholeWrapperDiv, WrapperDiv } from "../../../styles/common/UtillComponents";
import ThemeColor from '../../../../../styles/Theme'
import React from "react";

const HeaderSubtitleComponent = ({
    commonState,
    commonDispatch
}: any) => {
    const { bodyNumber } = commonState;
    switch (commonState.componentTitle) {
        case "warrant":
            return (
                <WholeWrapperDiv
                    kindOf={`utill`}
                >
                    <WrapperDiv
                        marginTop={`15px`}
                    >
                        <TabMenuWrapperDiv>
                            <TabMenuA
                                style={{
                                    color: ((bodyNumber === 0) ? ThemeColor.basic_black : ThemeColor.grey_v3),
                                }}
                                id={'조회전'}
                                onClick={(e: any) => { commonDispatch({ name: "bodyNumber", value: 0 }); }}
                            >
                                조회전
                            </TabMenuA>
                            <TabMenuBarDiv
                                style={{
                                    backgroundColor: ((bodyNumber === 0) ? ThemeColor.basic_black : ThemeColor.grey_v3),
                                    opacity: ((bodyNumber === 0) ? "1" : "0"),
                                }}
                            >
                            </TabMenuBarDiv>
                        </TabMenuWrapperDiv>
                        <TabMenuWrapperDiv>
                            <TabMenuA
                                style={{
                                    color: ((bodyNumber === 1) ? ThemeColor.basic_black : ThemeColor.grey_v3),
                                }}
                                id={'조회완료'}
                                onClick={(e: any) => { commonDispatch({ name: "bodyNumber", value: 1 }); }}
                            >
                                조회완료
                            </TabMenuA>
                            <TabMenuBarDiv
                                style={{
                                    backgroundColor: ((bodyNumber === 1) ? ThemeColor.basic_black : ThemeColor.grey_v3),
                                    opacity: ((bodyNumber === 1) ? "1" : "0"),
                                }}
                            >
                            </TabMenuBarDiv>
                        </TabMenuWrapperDiv>
                    </WrapperDiv>
                </WholeWrapperDiv>
            )
        case "customer":
            return (
                <WrapperDiv
                    margin={`10px 0 15px 0`}
                >
                    <TabMenuWrapperDiv
                        kindOf={`headerTabMenu`}
                    >
                        <TabMenuA
                            style={{
                                color: ((bodyNumber === 0) ? ThemeColor.light_blue : ThemeColor.grey_v3),
                            }}
                            id={'관리중'}
                            onClick={(e: any) => { commonDispatch({ name: "bodyNumber", value: 0 }); }}
                        >
                            관리중
                        </TabMenuA>
                        <TabMenuBarDiv
                            style={{
                                backgroundColor: ((bodyNumber === 0) ? ThemeColor.light_blue : "black"),
                                opacity: ((bodyNumber === 0) ? "1" : "0"),
                            }}
                        >
                        </TabMenuBarDiv>
                    </TabMenuWrapperDiv>

                    {/* 거래처 관리종료 */}
                    <TabMenuWrapperDiv
                        kindOf={`headerTabMenu`}
                    >
                        <TabMenuA
                            style={{
                                color: ((bodyNumber === 1) ? ThemeColor.light_blue : ThemeColor.grey_v3),
                            }}
                            id={'관리종료'}
                            onClick={(e: any) => { commonDispatch({ name: "bodyNumber", value: 1 }); }}
                        >
                            관리종료
                        </TabMenuA>
                        <TabMenuBarDiv
                            style={{
                                backgroundColor: ((bodyNumber === 1) ? ThemeColor.light_blue : "black"),
                                opacity: ((bodyNumber === 1) ? "1" : "0"),
                            }}
                        >
                        </TabMenuBarDiv>
                    </TabMenuWrapperDiv>
                </WrapperDiv>
            )
        default:
            return <></>

    }

}

export default React.memo(HeaderSubtitleComponent);