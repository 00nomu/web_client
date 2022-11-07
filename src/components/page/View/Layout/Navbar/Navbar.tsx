import type { NextPage } from "next";
import router from "next/router";
import NavbarPresenter from "./NavbarPresenter";

const managerItemList = [
  "업체관리",
]


const NavBar: NextPage = (props: any) => {

  const {
    barOpen,
    setBarOpen,
    barRef,
  } = props;

  const isLogined = props.tokenValue.isLogined;

  const NaviClickHandler = (e: any) => {
    setBarOpen(false);
    switch (e.target.id) {
      case '거래처관리':
        return router.push(`/view/customer`);
      case '사용자관리':
        return router.push(`/view/user`);
      case '모바일사용자관리':
        return router.push(`/view/mobileuser`);
      case '경정청구':
        return router.push(`/view/warrant`);
      case '업체관리':
        return router.push(`/view/company`)
    }
    router.push(`/view/${e.target.id}`);
  }
  return (
    <NavbarPresenter
      barOpen={barOpen}
      setBarOpen={setBarOpen}
      managerItemList={managerItemList}
      NaviClickHandler={NaviClickHandler}
      isLogined={isLogined}
      barRef={barRef}
    />

  )
}

export default NavBar;
