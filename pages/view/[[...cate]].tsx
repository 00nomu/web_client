import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react"

//Components
import Header from "../../src/components/page/View/Layout/Header";
import NavBar from "../../src/components/page/View/Layout/Navbar/Navbar";


import Customer from "../../src/components/page/View/Customer";
import User from "../../src/components/page/View/User";
import Company from "../../src/components/page/View/Company";
import MobileUser from "../../src/components/page/View/MobileUser";

//jwt module
import { parseJwt } from "../../src/modules/parseJwt"
import Warrant from "../../src/components/page/View/Warrant";

interface ViewProps {
  cate: any;
  tokenValue: any
}

const Componentitem: NextPage<ViewProps> = (props) => {
  // props 재정의
  const cate = props.cate.cate;
  const loginData = { loginData: props.tokenValue.isLogined };

  // url(query) 구분
  const main = cate[0];
  const sub = cate[1] ? cate[1] : "";

  switch (main) {
    case 'customer':
      return <Customer {...loginData} />;
    case 'warrant':
      return <Warrant {...loginData} />;
    case 'user':
      return <User {...loginData} />;
    case 'mobileuser':
      return <MobileUser {...loginData} />;
    case 'company':
      return <Company {...loginData} />;
    default:
      return <div></div>;
  }
};



const View: NextPage<ViewProps> = (props) => {

  const [barOpen, setBarOpen] = useState(false);

  const barRef = useRef<HTMLDivElement>(null);

  const navBarProps = {
    ...props, barOpen, setBarOpen, barRef
  }


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (barRef.current && !barRef.current.contains(event.target as Node)) {
        setBarOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [barRef])

  return (
    <div>
      <Head>
        <title>나노 | 관리자 웹 </title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/nano.png" />
      </Head>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "#F4F4F4", overflow: "auto" }}>
        <NavBar {...navBarProps} />
        <Header {...navBarProps} />
        <Componentitem {...props} />
      </div>
    </div>
  );
};

export default View;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cate = context.query;
  const isLogined = context.req.cookies.isLogined ? true : false;

  // 토큰이 존재할 경우
  if (isLogined) {
    const tokenValue = { isLogined: parseJwt(context.req.cookies.isLogined) };

    if (context.query.cate?.indexOf('customer') !== -1) {
      if (tokenValue.isLogined.auth_menu_user_customer === 0) {
        return {
          redirect: {
            permanent: false,
            destination: "/view/warrant",
          },
        };
      }
      else {
        return {
          props: {
            cate,
            tokenValue
          },
        };
      }
    }
    if ((context.query.cate?.indexOf('mobileuser') !== -1)) {
      if (tokenValue.isLogined.auth_menu_muser_info === 0) {
        return {
          redirect: {
            permanent: false,
            destination: "/view/customer",
          },
        };
      }
      else {
        return {
          props: {
            cate,
            tokenValue
          },
        };
      }
    }
    if ((context.query.cate?.indexOf('user') !== -1)) {
      if (tokenValue.isLogined.auth_menu_user_info === 0) {

        return {
          redirect: {
            permanent: false,
            destination: "/view/customer",
          },
        };
      }
      else {
        return {
          props: {
            cate,
            tokenValue
          },
        };
      }
    }
    else if (context.query.cate?.indexOf('company') !== -1) {
      if (tokenValue.isLogined.user_auth !== 0) {
        return {
          redirect: {
            permanent: false,
            destination: "/view/customer",
          },
        };
      }
      else {
        return {
          props: {
            cate,
            tokenValue
          },
        };
      }
    }
    else {
      return {
        props: {
          cate,
          tokenValue
        },
      };

    }
  }

  // 토큰이 존재하지 않을 경우
  else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};