import { useState, useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

const SignIn = () => {
  const { allUsers } = useContext(UserContext);

  const history = useHistory();
  const [userName, setUserName] = useState("");

  const changeValue = (event) => {
    setUserName(event.target.value);
  };

  const LogeinClick = () => {
    allUsers.forEach((user) => {
      if (user.name.toLowerCase() === userName.toLowerCase()) {
        const onlinedUser = {
          friends: user.friends,
          onlineUser: user,
          logedIn: true,
        };
        localStorage.setItem("onlinedUser", JSON.stringify(onlinedUser));
        history.replace("/");
      }
    });
  };

  return (
    <>
      <Header />
      <Container>
        <LoginBox>
          <Input
            value={userName}
            onChange={changeValue}
            placeholder="Your first name"
          />
          <Button onClick={LogeinClick}>Submit</Button>
        </LoginBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-image: url("/bgImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 93.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 300px;
  height: 150px;
  background-color: #e3e3e3;
  z-index: 0;
`;

const Input = styled.input`
  padding: 15px 10px;
  margin-left: 31px;
  margin-top: 25px;
  font-size: 17px;
  border: none;
`;

const Button = styled.button`
  padding: 5px 90px;
  margin-left: 32px;
  margin-top: 5px;
  font-family: var(--heading-font-family);
  background-color: var(--primary-color);
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
`;

export default SignIn;
