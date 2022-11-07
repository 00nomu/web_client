import React from "react";
import Theme from "../../../../../styles/Theme";
import { PageBox, PageWrap } from "../../../styles/common/PaginationComponents";

const PageBoxComponent = ({
    commonState,
    commonDispatch,


}: any) => {

    const {
        pageNumber,
        postPageNumber,
        pageArray,
        totalPage,

    } = commonState;

    const pageUpClickHandler = (e: any) => {
        if ((pageNumber + 1) < totalPage) {
            commonDispatch({ name: "pageNumber", value: pageNumber + 1 });
        }
    }

    const pageDoubleUpClickHandler = (e: any) => {
        if ((pageNumber + postPageNumber) < totalPage) {
            commonDispatch({ name: "pageNumber", value: pageNumber + postPageNumber });
        }
        else if ((totalPage - 1) < 0) {

        }
        else {
            commonDispatch({ name: "pageNumber", value: totalPage - 1 });
        }
    }

    const pageDownClickHandler = (e: any) => {
        if ((pageNumber - 1) >= 0) {
            commonDispatch({ name: "pageNumber", value: pageNumber - 1 });
        }
    }

    const pageDoubleDouwnClickHandler = (e: any) => {
        if ((pageNumber - postPageNumber) >= 0) {
            commonDispatch({ name: "pageNumber", value: pageNumber - postPageNumber });
        }
        else {
            commonDispatch({ name: "pageNumber", value: 0 });
        }
    }

    const pageClickHandler = (e: any) => {
        commonDispatch({ name: "pageNumber", value: e.target.innerHTML - 1 });
    }

    return (
        <PageWrap>
            <PageBox
                onClick={pageDoubleDouwnClickHandler}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="8.09" height="8.766" viewBox="0 0 8.09 8.766">
                    <g id="그룹_2347" data-name="그룹 2347" transform="translate(0.707 0.354)">
                        <path id="패스_539" data-name="패스 539" d="M-14856.059-19345.014l-4.029,4.029,1.679,1.68,2.351,2.35" transform="translate(14863.088 19345.014)" fill="none" stroke="#707070" />
                        <path id="패스_540" data-name="패스 540" d="M-14856.059-19345.014l-4.029,4.029,1.679,1.68,2.351,2.35" transform="translate(14860.088 19345.014)" fill="none" stroke="#707070" />
                    </g>
                </svg>
            </PageBox>
            <PageBox
                onClick={pageDownClickHandler}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="5.889" height="9.271" viewBox="0 0 5.889 9.271">
                    <path id="패스_495" data-name="패스 495" d="M-15432.914-18560.455l-4.8,4.262,4.8,4.264" transform="translate(15438.471 18560.828)" fill="none" stroke="#7b7b7b" />
                </svg>
            </PageBox>
            {(pageArray.length !== 0) ? pageArray.map((item: any, index: any) => (
                (item === pageNumber + 1) ? (
                    <PageBox
                        kindOf={`focus`}
                        key={index}
                        onClick={pageClickHandler}
                    >
                        {item}
                    </PageBox>
                ) : (
                    <PageBox
                        key={index}
                        onClick={pageClickHandler}
                    >
                        {item}
                    </PageBox>)
            ))
                : null
            }
            <PageBox
                onClick={pageUpClickHandler}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="5.889" height="9.271" viewBox="0 0 5.889 9.271">
                    <path id="패스_493" data-name="패스 493" d="M-15437.719-18560.455l4.8,4.262-4.8,4.264" transform="translate(15438.051 18560.828)" fill="none" stroke="#7b7b7b" />
                </svg>
            </PageBox>
            <PageBox
                onClick={pageDoubleUpClickHandler}
                borderRight={`1xp solid ${Theme.grey_v2}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="8.09" height="8.766" viewBox="0 0 8.09 8.766">
                    <g id="그룹_2346" data-name="그룹 2346" transform="translate(-1065.559 -1034.633)">
                        <path id="패스_539" data-name="패스 539" d="M-14860.088-19345.014l4.029,4.029-1.679,1.68-2.351,2.35" transform="translate(15926 20380)" fill="none" stroke="#707070" />
                        <path id="패스_540" data-name="패스 540" d="M-14860.088-19345.014l4.029,4.029-1.679,1.68-2.351,2.35" transform="translate(15929 20380)" fill="none" stroke="#707070" />
                    </g>
                </svg>
            </PageBox>
        </PageWrap>
    )
}

export default React.memo(PageBoxComponent);