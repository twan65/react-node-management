import UserInfo from "./UserInfo";
import UserProfile from "./UserProfile";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Api from "../../common/api/Api";
import { GetUser } from "../../common/api/ApiOptions";
import { UserResponseDTO } from "../../models/User";

import { Container } from "@mui/material";

const User = () => {
  let { user_id }: any = useParams();

  // let history = useHistory();

  const [user, setUser] = useState<UserResponseDTO>();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await Api.request(new GetUser().setId(user_id));
    const data = res.data as UserResponseDTO;
    setUser(data);
    return data;
  };

  if (!user || !user_id) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <Container fixed>
      <UserProfile data={user} />
      <UserInfo data={user} />
    </Container>
  );
};

export default User;
