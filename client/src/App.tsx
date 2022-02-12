import UserDetail from "./components/user/UserDetail";
import UserSearch from "./components/user/UserSearch";
import UserCreate from "./components/user/UserCreate";
import SignIn from "./components/common/SignIn";
import Grid from "@mui/material/Grid";
import Sidebar from "./components/common/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute, ProvideAuth } from "./common/context/AuthContext";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          {/* TODO: loginはxsを12にする必要ある。 */}
          <Grid item xs={10}>
            <Route exact path="/signin" component={SignIn} />
            <PrivateRoute
              exact
              path="/user/detail/:user_id"
              component={UserDetail}
            />
            <PrivateRoute path="/user/search" component={UserSearch} />
            <PrivateRoute path="/user/create" component={UserCreate} />
          </Grid>
        </Grid>
      </Router>
    </ProvideAuth>
  );
}

export default App;
