import type { GetServerSideProps, NextPage } from 'next'
import React from 'react';
import SignIn from '../src/components/page/SignIn';


const Home: NextPage = (props: any) => {
  // 나중에 메인화면 생기면 들어갈 곳
  return (
    <SignIn {...props} />
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isLogined = context.req.cookies.isLogined ? true : false;

  // 토큰이 존재할 경우
  if (isLogined) {
    // const tokenValue = parseJwt(context.req.cookies.isLogined);
    return {
      redirect: {
        permanent: false,
        destination: "/view/customer",
      },
    };

  }

  // 토큰이 존재하지 않을 경우
  else {
    return {
      props: {
      },
    };
  }
}