import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Api from "../../common/api/Api";
import { GetUsers } from "../../common/api/ApiOptions";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const UserSearch = () => {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await Api.request(new GetUsers());
    setUsers(res.data);
    return res.data;
  };

  return (
    <Container fixed>
      <Typography variant="h6" gutterBottom>
        ユーザー検索
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>メールアドレス</TableCell>
            <TableCell>プロフィール画像</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>生年月日</TableCell>
            <TableCell>性別</TableCell>
            <TableCell>ポジション</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length
            ? users.map((e) => (
                <TableRow key={e.id}>
                  <TableCell>
                    <Link to={`/user/detail/${e.id}`}>{e.email}</Link>
                  </TableCell>
                  <TableCell>
                    <img src={e.image} alt="profile"></img>
                  </TableCell>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.birthday}</TableCell>
                  <TableCell>{e.gender}</TableCell>
                  <TableCell>{e.position}</TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </Container>
  );
};

export default UserSearch;
