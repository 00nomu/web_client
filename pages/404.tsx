import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import {
    WholeWrapper,
    Wrapper
} from "../src/components/styles/CommonComponents3";
import { useState } from "react"
import router from "next/router";

interface ViewProps {
    cate: any;
    tokenValue: any
}


const Error: NextPage<ViewProps> = (props) => {
    const [barOpen, setBarOpen] = useState(false);

    const childProps = {
        ...props, barOpen, setBarOpen
    }

    return (
        <Wrapper
            width={`370px`}
            height={`70vh`}
            margin={`0 auto`}
            padding={`0 16px`}
            al={`start`}
        >
            <svg id="Capa_1" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m494.247 512-146.494-244.155v-169.058l-98.786-98.787h-231.214v452h195.759l-34 60zm-263.252-30 102.129-180.228 108.136 180.228zm26.758-430.787 38.787 38.787h-38.787zm-210 370.787v-392h180v90h90v148.045l-87.24 153.955z" /><path d="m317.753 437h30v30h-30z" /><path d="m317.753 347h30v60h-30z" /><path d="m92.753 182h180v30h-180z" /><path d="m92.753 242h180v30h-180z" /><path d="m92.753 302h120v30h-120z" /></g></svg>
            <br />

            {/* 500error */}
            {/* <h1 style={{fontSize:"2em", marginBottom:"30px"}}><span style={{fontSize:"1.7em"}}>500</span><br/><br/>Internet Server Error</h1>
            <span>서비스 이용에 불편을 드려 죄송합니다.<br/>시스템 에러가 발생하여 페이지를 표시할 수 없습니다.<br />관리자에게 문의하거나 잠시 후 다시 확인해주세요.</span> */}

            {/* 404error */}
            <h1 style={{ fontSize: "2em", marginBottom: "30px" }}><span style={{ fontSize: "1.7em" }}>404</span><br /><br />Page Not Found</h1>
            <span>페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.<br />입력하신 주소가 정확한지 다시 한번 확인해주세요.</span>

            <br />
            <br />
            <br />

            {/* 홈 버튼 */}
            <button
                style={{ cursor: "pointer", padding: "10px 30px", border: "1px solid #0071f4", backgroundColor: "white", color: "#0071f4", borderRadius: "30px" }}
                onClick={(e: any) => { router.push('/') }}
            >홈으로</button>
        </Wrapper>
    );
};

export default Error;