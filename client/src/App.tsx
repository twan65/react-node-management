import UserDetail from "./components/user/UserDetail";
import UserSearch from "./components/user/UserSearch";
import UserCreate from "./components/user/UserCreate";
import SignIn from "./components/common/SignIn";
import Grid from "@mui/material/Grid";
import Sidebar from "./components/common/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/user/detail/:user_id" component={UserDetail} />
          <Route path="/user/search" component={UserSearch} />
          <Route path="/user/create" component={UserCreate} />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
