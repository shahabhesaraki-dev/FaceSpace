import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import imageBanner from "../Image/banner.jpg";
import { UserContext } from "./UserContext";

const ProfilPage = () => {
  const { allUsers } = useContext(UserContext);
  const onlinedUser = localStorage.getItem("onlinedUser");
  const [userById, setUserById] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    fetch(`https://myfacespaceapp.herokuapp.com/api/users/${profileId}`)
      .then((user) => user.json())
      .then((result) => {
        setUserById(result.data);
      });
  }, [profileId]);

  const userFriendsId = userById.friends;

  const friends = [];

  allUsers.forEach((user) => {
    if (userFriendsId) {
      if (userFriendsId.indexOf(user.id) !== -1) {
        friends.push(user);
      }
    }
  });

  return (
    <>
      <Header />
      <Banner src={imageBanner} />
      <Container>
        <Wrapper>
          <FirstDiv>
            {onlinedUser &&
            JSON.parse(onlinedUser).friends.includes(userById.id) ? (
              <FriendProfileImg src={userById.avatarUrl} />
            ) : (
              <ProfileImg src={userById.avatarUrl} />
            )}
            <Name>{userById.name}</Name>
          </FirstDiv>
          <SecondDiv>
            <SmallTitle>{`${userById.name}'s Friends`}</SmallTitle>
            <Line />
          </SecondDiv>
          <ImageDiv>
            {friends.map((firend, index) => {
              return (
                <ImageBox>
                  <Image key={index} src={firend.avatarUrl} />
                  <ImageName>{firend.name}</ImageName>
                </ImageBox>
              );
            })}
          </ImageDiv>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin: 0 260px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--page-horizontal-padding);
  width: 100%;
  max-width: var(--max-content-width);
`;

const Banner = styled.img`
  width: 100%;
`;

const ProfileImg = styled.img`
  width: 290px;
  height: 290px;
  position: relative;
  bottom: 150px;
  border: 5px solid var(--primary-color);
`;

const FriendProfileImg = styled.img`
  width: 290px;
  height: 290px;
  position: relative;
  bottom: 150px;
  border: 5px solid #0b704e;
`;

const FirstDiv = styled.div`
  display: flex;
`;

const Name = styled.h1`
  color: var(--primary-color);
  font-size: 30px;
  margin-left: 10px;
`;

const SmallTitle = styled.h3`
  color: var(--primary-color);
  font-size: 18px;
`;

const Line = styled.hr`
  background-color: var(--primary-color);
  color: var(--primary-color);
  width: 100%;
`;

const SecondDiv = styled.div`
  position: relative;
  bottom: 90px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 10px;
  margin-top: 10px;
`;

const ImageDiv = styled.div`
  position: relative;
  bottom: 90px;
  display: flex;
  flex-direction: row;
`;

const ImageName = styled.h3`
  font-family: var(--heading-font-family);
  color: black;
  font-size: 17px;
  margin-left: 40%;
  margin-top: 5px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProfilPage;
