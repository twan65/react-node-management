import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Cloud from "@mui/icons-material/Cloud";
import { Link, useHistory } from "react-router-dom";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Api from "../../common/api/Api";
import { useAuth } from "../../common/context/AuthContext";
import { Box, Button } from "@mui/material";

export default function Sidebar() {
  const { dispatch } = useAuth();
  let history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("loggedUser");
    dispatch({
      type: "removeId",
    });
    history.push("/signin");
  };

  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <PersonSearchIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to={"/user/search"}>ユーザー照会</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to={"/user/create"}>ユーザー登録</Link>
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to={"/user/create"}>休み照会</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to={"/user/create"}>休み申請</Link>
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Button type="submit" color="secondary">
                ログアウト
              </Button>
            </Box>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
