import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Rating from "@mui/material/Rating";
import { GetUser } from "../../common/api/ApiOptions";
import Api from "../../common/api/Api";
import { UserResponseDTO } from "../../models/User";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../common/Loading";
import UserProfile from "./UserProfile";
import UserInfo from "./UserInfo";
import Grid from "@mui/material/Grid";

export default function UserDetail() {
  let { user_id }: any = useParams();
  let history = useHistory();

  const [user, setUser] = useState<UserResponseDTO>();
  useEffect(() => {
    getUser();
  }, []);

  // ユーザーIDで該当ユーザーの情報を取得する。
  const getUser = async () => {
    const res = await Api.request(new GetUser().setId(user_id));
    if (res.error) {
      alert(res.error.response.data.message);
      history.push("/user/search");
    }

    const data = res.data as UserResponseDTO;
    setUser(data);
    return data;
  };

  if (!user || !user_id) {
    return <Loading />;
  }

  return (
    <Container fixed>
      <Typography variant="h6" gutterBottom>
        ユーザー詳細
      </Typography>
      <Typography variant="h3" gutterBottom>
        <UserProfile data={user} />
      </Typography>
      <Grid container spacing={3}>
        <UserInfo data={user} />
        <Grid item xs={12}>
          スキル
        </Grid>
        {user.skills &&
          user.skills.map((skill) => {
            return (
              <Grid item xs={12} sm={6} key={skill.id}>
                <Typography component="legend">{skill.name}</Typography>
                <Rating name="read-only" value={skill.rating} readOnly />
              </Grid>
            );
          })}
        <Grid item xs={12}>
          資格
        </Grid>
        {user.licenses &&
          user.licenses.map((license) => {
            return (
              <Grid item xs={12} sm={6} key={license.id}>
                <Typography component="legend">{license.name}</Typography>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
