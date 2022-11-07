import type { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from "next/dist/client/router";
import React from 'react';
import SignInPresent from './SignInPresenter'
import { axiosLoginHandler } from '../../../modules/axios/axiosAuth';



const SignIn: NextPage = () => {
    const router = useRouter();

    let [id, setId] = useState("");
    let [pw, setPw] = useState("");

    const [buttonLoading, setButtonLoading] = useState(false);

    const loginSubmit = async (e: any) => {
        e.preventDefault();
        setButtonLoading(true);
        await axiosLoginHandler(
            "/java/auth/web/login",
            "post",
            { id, password: pw }
        ).then((result) => {
            if (result) {
                router.push('/view/customer')
            }
            else {
                alert("존재하지 않은 사용자입니다.")
            }
        })
        setButtonLoading(false);

    };

    const homeClickHandler = () => {
        router.push('/')
    }

    return (
        <SignInPresent
            Id={id}
            setId={setId}
            Pw={pw}
            setPw={setPw}
            loginSubmit={loginSubmit}
            homeClickHandler={homeClickHandler}
            buttonLoading={buttonLoading}
        />
    )
}

export default SignIn;