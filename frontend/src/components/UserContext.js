import React, { useEffect, useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((users) => {
        return users.json();
      })
      .then((result) => {
        setAllUsers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        allUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
