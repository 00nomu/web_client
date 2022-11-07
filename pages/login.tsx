import type { GetServerSideProps, NextPage } from 'next'
import React from 'react';
import SignIn from '../src/components/page/SignIn';


const Login: NextPage = (props: any) => {
  return (
    <SignIn {...props} />
  )
}

export default Login;

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