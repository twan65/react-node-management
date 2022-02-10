import { UserResponseDTO } from "../../models/User";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
const UserInfo = ({ data }: { data: UserResponseDTO }) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          id="email"
          name="email"
          label="メールアドレス"
          fullWidth
          variant="standard"
          value={data.email}
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
          value={data.name}
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
          value={data.gender}
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
          value={data.birthday}
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
          value={data.address1}
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
          value={data.address2}
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
          value={data.address3}
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
          value={data.position}
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
          value={data.role}
        />
      </Grid>
    </>
  );
};

export default UserInfo;
