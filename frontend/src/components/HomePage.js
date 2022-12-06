import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { UserContext } from "./UserContext";

const HomePage = () => {
  const { allUsers } = useContext(UserContext);

  const onlinedUser = localStorage.getItem("onlinedUser");

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>All Facespace members</Title>
          <Section>
            {allUsers.map((user, index) => {
              return (
                <div key={index}>
                  <Link to={`/users/${user.id}`}>
                    {onlinedUser &&
                    JSON.parse(onlinedUser).friends.includes(user.id) ? (
                      <FriendImage key={index} src={user.avatarUrl} />
                    ) : (
                      <Image key={index} src={user.avatarUrl} />
                    )}
                  </Link>
                </div>
              );
            })}
          </Section>
          {onlinedUser && JSON.parse(onlinedUser).logedIn === true ? (
            <DivFriends>
              <NoteFriends>Your friends:</NoteFriends>
              <Square />
            </DivFriends>
          ) : null}
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: var(--page-horizontal-padding);
  max-width: var(--max-content-width);
`;

const Title = styled.p`
  font-family: var(--heading-font-family);
  font-size: 30px;
  color: var(--primary-color);
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 110px;
  height: 110px;
  margin-left: 10px;
  margin-top: 10px;
  border: 1px solid var(--primary-color);
  &:hover {
    border: 5px solid var(--primary-color);
  }
`;

const FriendImage = styled.img`
  width: 110px;
  height: 110px;
  margin-left: 10px;
  margin-top: 10px;
  border: 5px solid #0b704e;
  &:hover {
    border: 8px solid #0b704e;
  }
`;

const DivFriends = styled.div`
  display: flex;
`;

const NoteFriends = styled.h2`
  font-family: var(--heading-font-family);
  color: black;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 20px;
`;

const Square = styled.div`
  width: 18px;
  height: 18px;
  border: 4px solid #0b704e;
  margin-top: 20px;
  margin-left: 8px;
`;

export default HomePage;
