import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import MyPageTitle from "../../components/mypage/MyPageTitle/MyPageTitle";
import MyPageNav from "../../components/mypage/MyPageNav/MyPageNav";
import UserInfoUpdateMain from "components/mypage/UserInfoUpdateMain/UserInfoUpdateMain";
import { NavAndMain } from "./UserInfoUpdatePage.style";

function UserInfoUpdate() {
  return (
    <div>
      <Header />
      <Nav />
      <MyPageTitle />
      <NavAndMain>
        <MyPageNav />
        <UserInfoUpdateMain />
      </NavAndMain>
    </div>
  );
}

export default UserInfoUpdate;