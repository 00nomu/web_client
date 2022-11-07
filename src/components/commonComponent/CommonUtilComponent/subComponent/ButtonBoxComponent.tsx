import { plusIcon, trashCanIcon } from "../../../../Lib/svg"
import { Button, WrapperDiv } from "../../../styles/common/UtillComponents"

import CheckIcon from '@mui/icons-material/Check';
import PrintIcon from '@mui/icons-material/Print';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ReactToPrint from "react-to-print";

import { useRef, useState } from "react";
import WarrantPrint from "../../CommonModalComponent/WarrantModal/WarrantPrint";
import xlsxDownloadHandler from "../modules/xlsxDownloadHandler";
import { warrantInitState } from "../../../../modules/state/initstate";
import utilButtonClickHandler from "../../../../modules/utilButtonClickHandler";
import React from "react";
import { SCREEN_SIZE } from "../../../../Lib/consts";

const ButtonBoxComponent = ({
    windowWidth,
    commonState,
    commonDispatch,

    dispatch,

    fileDispatch,

}: any) => {

    const {
        componentTitle,
        bodyNumber,
        dataList,
        totalListCount
    } = commonState;

    const [printData, setPrintData] = useState({});
    const printRef = useRef<HTMLDivElement>(null);

    switch (componentTitle) {
        case 'customer':

            return (
                <WrapperDiv
                    kindOf={`utillButtonBox`}
                    margin={windowWidth < SCREEN_SIZE.MOBILE ? `10px 0px 10px 0px` : null}
                >
                    <Button
                        kindOf={'lightBlue'}
                        hover={true}
                        marginLeft={`0`}
                        onClick={(e: any) => {
                            utilButtonClickHandler(
                                bodyNumber === 0 ? 'create' : 'restore',

                                commonState,
                                commonDispatch,

                                dispatch,

                                fileDispatch
                            )
                        }}
                    >
                        {bodyNumber === 0 ?
                            <>
                                {plusIcon()}
                                거래처 추가
                            </>

                            : '관리 재개'}
                    </Button>
                    <Button
                        kindOf={'redButton'}
                        hoverDel={true}
                        onClick={(e: any) => {
                            utilButtonClickHandler(
                                bodyNumber === 0 ? 'delete' : 'deleteComplete',

                                commonState,
                                commonDispatch,

                                dispatch,

                                fileDispatch
                            )
                        }}
                    >
                        {
                            <>
                                {trashCanIcon()}
                                {bodyNumber === 0 ? '관리종료' : '삭제'}
                            </>
                        }
                    </Button>
                    <Button
                        marginRight={`0`}
                        kindOf={`greyButton`}
                        hoverGrey={true}
                        onClick={(e: any) => { xlsxDownloadHandler(componentTitle, dataList) }}
                    >
                        <svg id="svg" data-name="01 align center" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <path id="패스_140" data-name="패스 140" d="M9.515,11.083a1.745,1.745,0,0,0,1.238-.512l2.286-2.288-.825-.823L10.1,9.581,10.08,0H8.913l.015,9.571L6.817,7.46l-.825.824,2.286,2.286A1.745,1.745,0,0,0,9.515,11.083Z" transform="translate(-2.497)" fill="#1a1a1a" />
                            <path id="패스_141" data-name="패스 141" d="M12.833,16v2.917a.583.583,0,0,1-.583.583H1.75a.583.583,0,0,1-.583-.583V16H0v2.917a1.75,1.75,0,0,0,1.75,1.75h10.5A1.75,1.75,0,0,0,14,18.917V16Z" transform="translate(0 -6.667)" fill="#1a1a1a" />
                        </svg>
                        엑셀 저장
                    </Button>

                    <span style={{ fontWeight: 'bold', marginLeft: 15 }}>
                        총 개수 :&nbsp;{totalListCount}
                    </span>
                </WrapperDiv>
            )
        case 'company':
            return (
                <WrapperDiv
                    kindOf={`utillButtonBox`}
                >
                    <Button
                        kindOf={'lightBlue'}
                        hover={true}
                        marginLeft={`0`}
                        onClick={(e: any) => {
                            utilButtonClickHandler(
                                "create",

                                commonState,
                                commonDispatch,

                                dispatch,

                                fileDispatch
                            )
                        }}
                    >
                        {plusIcon()}
                        추가
                    </Button>
                    <Button
                        kindOf={'redButton'}
                        hoverDel={true}
                        onClick={(e: any) => {
                            utilButtonClickHandler(
                                'delete',

                                commonState,
                                commonDispatch,

                                dispatch,

                                fileDispatch
                            )
                        }}
                    >
                        {trashCanIcon}
                        삭제
                    </Button>
                    <span style={{ fontWeight: 'bold', marginLeft: 15 }}>
                        총 개수 :&nbsp;{totalListCount}
                    </span>
                </WrapperDiv>
            )
        /**
         * 사용자, 모바일 사용자
         */
        case 'webUser': case 'mobileUser': return (
            <WrapperDiv
                kindOf={`utillButtonBox`}
            >
                <Button
                    kindOf={'lightBlue'}
                    hover={true}
                    marginLeft={`0`}
                    onClick={(e: any) => {
                        utilButtonClickHandler(
                            "create",

                            commonState,
                            commonDispatch,

                            dispatch,

                            fileDispatch
                        );
                    }}
                >
                    {plusIcon()}
                    추가
                </Button>
                <Button
                    kindOf={'redButton'}
                    hoverDel={true}
                    onClick={(e: any) => {
                        utilButtonClickHandler(
                            "delete",

                            commonState,
                            commonDispatch,

                            dispatch,

                            fileDispatch
                        );
                    }}
                >
                    {trashCanIcon}
                    삭제
                </Button>
            </WrapperDiv>
        )
        /**
         * 경정청구
         */
        case 'warrant':

            return (
                <WrapperDiv
                    kindOf={`utillButtonBox`}
                    dr={windowWidth < SCREEN_SIZE.MOBILE ? `column` : null}
                >
                    <WrapperDiv
                        kindOf={`utillButtonBox`}
                        margin={windowWidth < SCREEN_SIZE.MOBILE ? `10px 0px 10px 0px` : null}
                    >
                        {bodyNumber === 0 &&
                            <Button
                                kindOf={'lightBlue'}
                                hover={true}
                                marginLeft={`0`}
                                onClick={(e: any) => {
                                    utilButtonClickHandler(
                                        "lookupcomplete",

                                        commonState,
                                        commonDispatch,

                                        dispatch,

                                        fileDispatch
                                    );
                                }}
                            >
                                <CheckIcon sx={{ marginRight: "5px" }} fontSize={`small`}></CheckIcon>
                                <span>조회완료</span>
                            </Button>
                        }
                        <Button
                            kindOf={'redButton'}
                            hoverDel={true}
                            onClick={(e: any) => {
                                utilButtonClickHandler(
                                    "delete",

                                    commonState,
                                    commonDispatch,

                                    dispatch,

                                    fileDispatch
                                );
                            }}
                        >
                            <DeleteForeverIcon sx={{ marginRight: "5px" }} fontSize={`small`}></DeleteForeverIcon>
                            삭제
                        </Button>
                    </WrapperDiv>
                    <WrapperDiv
                        kindOf={`utillButtonBox`}
                        margin={windowWidth < SCREEN_SIZE.MOBILE ? `10px 0px 10px 0px` : null}
                    >
                        <ReactToPrint
                            onBeforeGetContent={async () => {
                                setPrintData(warrantInitState());
                            }}
                            onBeforePrint={async () => {
                                setPrintData(warrantInitState());
                            }}
                            trigger={() =>
                                <Button
                                    marginRight={`0`}
                                    kindOf={`greyButton`}
                                    hoverGrey={true}
                                >
                                    <PrintIcon sx={{ marginRight: "5px" }} fontSize={`small`}></PrintIcon>
                                    <span>빈 양식 출력</span>
                                </Button>
                            }
                            content={() => printRef.current}
                        />
                        {printData &&
                            <WarrantPrint data={printData} printRef={printRef} />
                        }
                        <Button
                            marginRight={`0`}
                            kindOf={`greyButton`}
                            hoverGrey={true}
                            onClick={(e: any) => { xlsxDownloadHandler(componentTitle, dataList) }}
                        >
                            <svg id="svg" data-name="01 align center" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <path id="패스_140" data-name="패스 140" d="M9.515,11.083a1.745,1.745,0,0,0,1.238-.512l2.286-2.288-.825-.823L10.1,9.581,10.08,0H8.913l.015,9.571L6.817,7.46l-.825.824,2.286,2.286A1.745,1.745,0,0,0,9.515,11.083Z" transform="translate(-2.497)" fill="#1a1a1a" />
                                <path id="패스_141" data-name="패스 141" d="M12.833,16v2.917a.583.583,0,0,1-.583.583H1.75a.583.583,0,0,1-.583-.583V16H0v2.917a1.75,1.75,0,0,0,1.75,1.75h10.5A1.75,1.75,0,0,0,14,18.917V16Z" transform="translate(0 -6.667)" fill="#1a1a1a" />
                            </svg>
                            엑셀 저장
                        </Button>
                        <span style={{ fontWeight: 'bold', marginLeft: 15 }}>
                            총 개수 :&nbsp;{totalListCount}
                        </span>
                    </WrapperDiv>

                </WrapperDiv>
            )

        default:
            return (
                <></>
            )
    }

}

export default React.memo(ButtonBoxComponent);