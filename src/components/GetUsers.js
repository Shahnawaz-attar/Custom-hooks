import React from "react";
import useFetch from "../hooks/useFetch";

const GetUsers = () => {
  const [userData, loading, error] = useFetch("https://dummyjson.com/users");
  let content;

  if (loading) {
    content = <div>Loading....</div>;
  } else if (error !== null) {
    content = <div>error</div>;
  } else {
    content = userData.map(user => {
      return (
        <div key={user.id} style={{ padding: "10px" }}>
          {user.username}
        </div>
      );
    });
  }

  return <div>{content}</div>;
};

export default GetUsers;
