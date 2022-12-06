import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const onlinedUser = localStorage.getItem("onlinedUser");

  const logout = () => {
    localStorage.removeItem("onlinedUser");
    window.location.reload(false);
  };

  return (
    <Wrapper>
      <H1>Facespace</H1>
      {onlinedUser && JSON.parse(onlinedUser).logedIn === true ? (
        <>
          <UserName>Hello,{JSON.parse(onlinedUser).onlineUser.name}</UserName>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </>
      ) : (
        <LogIn to="/signin">Login</LogIn>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--primary-color);
  height: var(--header-height);
  color: white;
  position: relative;
`;
const H1 = styled.h1`
  color: white;
  font-family: var(--heading-font-family);
  font-size: 35px;
  margin-left: 20px;
`;

const LogIn = styled(Link)`
  color: white;
  font-family: var(--heading-font-family);
  font-size: 22px;
  margin-right: 20px;
  text-decoration: none;
  position: absolute;
  right: 0;
`;

const UserName = styled.h2`
  color: white;
  font-family: var(--heading-font-family);
  font-size: 22px;
  margin-right: 110px;
  text-decoration: none;
  position: absolute;
  right: 0;
`;

const LogoutButton = styled.button`
  padding: 6px 12px;
  background-color: white;
  color: var(--primary-color);
  font-family: var(--heading-font-family);
  border-radius: 10px;
  border: none;
  font-size: 20px;
  position: absolute;
  right: 0;
  margin-right: 20px;
`;

export default Header;
