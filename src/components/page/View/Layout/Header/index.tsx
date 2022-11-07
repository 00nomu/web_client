import type { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import axios from "axios";
import router from "next/router";

import HeaderPresenter from "./HeaderPresenter";
import { axiosLogoutHandler } from "../../../../../modules/axios/axiosAuth";

// interface headerProps {
//     cate: any;
//     setBarProps: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Header: NextPage = (props: any) => {

    const barOpen = props.barOpen;
    const setBarOpen = props.setBarOpen;

    const barClickHandler = () => {
        setBarOpen(!barOpen)
    }

    const [headerOpen, setHeaderOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const LogoutHandler = async () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            await axiosLogoutHandler();
        }
    }

    const modalProps = {
        ...props,
        setModalOpen
    }

    return (
        <HeaderPresenter
            barClickHandler={barClickHandler}
            LogoutHandler={LogoutHandler}
            headerOpen={headerOpen}
            setHeaderOpen={setHeaderOpen}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            modalProps={modalProps}
        />
    )
}

export default Header;