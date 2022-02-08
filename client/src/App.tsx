import User from "./components/user/User";
import UserSearch from "./components/user/UserSearch";
import UserCreate from "./components/user/UserCreate";
import Grid from "@mui/material/Grid";
import Sidebar from "./components/common/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Router>
          <Route exact path="/user/detail/:user_id" component={User} />
          <Route path="/user/search" component={UserSearch} />
          <Route path="/user/create" component={UserCreate} />
        </Router>
      </Grid>
    </Grid>
  );
}

export default App;
