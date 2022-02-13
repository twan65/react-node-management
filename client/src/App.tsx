import UserDetail from "./components/user/UserDetail";
import UserSearch from "./components/user/UserSearch";
import UserCreate from "./components/user/UserCreate";
import SignIn from "./components/common/SignIn";
import Grid from "@mui/material/Grid";
import Sidebar from "./components/common/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute, UserAuthContext } from "./common/context/AuthContext";
import {
  userAuthReducer,
  initialState,
} from "./common/context/UserAuthReducer";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(userAuthReducer, initialState);

  (function () {
    const loggedUserStr = localStorage.getItem("loggedUser");
    if (!loggedUserStr || state.name) {
      return;
    }

    const loggedUser = JSON.parse(loggedUserStr);
    dispatch({
      type: "setId",
      payload: loggedUser.name,
    });
  })();

  return (
    <UserAuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <Grid container spacing={2}>
          {state.name && (
            <Grid item xs={2}>
              <Sidebar />
            </Grid>
          )}
          {/* TODO: loginはxsを12にする必要ある。 */}
          <Grid item xs={state.name ? 10 : 12}>
            <Route
              exact
              path="/signin"
              component={!state.name ? SignIn : UserSearch}
            />
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
    </UserAuthContext.Provider>
  );
}

export default App;
