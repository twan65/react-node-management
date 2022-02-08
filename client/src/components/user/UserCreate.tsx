import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useState } from "react";
import { CreateUser } from "../../common/api/ApiOptions";
import Api from "../../common/api/Api";
import CommonDialog from "../common/CommonDialog";
import { useHistory } from "react-router-dom";

export default function UserCreate() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [role, setRole] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCreateUser = async () => {
    const param = {
      email: email,
      name: name,
      birthday: birthday,
      address1: address1,
      address2: address2,
      address3: address3,
      gender: gender,
      position: position,
      role: role,
    };

    await Api.request(new CreateUser(), param);
    setIsModalOpen(true);
  };

  return (
    <Container fixed>
      <CommonDialog
        open={isModalOpen}
        handleClose={() => history.push("/user/search")}
      />
      <Typography variant="h6" gutterBottom>
        ユーザー登録
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="メールアドレス"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="氏名"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="gender"
            name="gender"
            label="gender"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="birthday"
            name="birthday"
            label="birthday"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="都道府県"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address2"
            name="address2"
            label="市区町村"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address3"
            name="address3"
            label="アパート、マンション、部屋番号など"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="position"
            name="position"
            label="ポジション"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="role"
            name="role"
            label="権限"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          onClick={onCreateUser}
          sx={{ mt: 3, ml: 1 }}
        >
          登録
        </Button>
      </Box>
    </Container>
  );
}
