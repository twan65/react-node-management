import { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  //   Switch,
  Route,
  //   Link,
  Redirect,
  //   useHistory,
  //   useLocation,
} from "react-router-dom";

const authContext = createContext({ isLoggedIn: false });

export const ProvideAuth = (props: { children: any }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>{props.children}</authContext.Provider>
  );
};

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");
  const isLoggedIn = token !== null;
  return {
    isLoggedIn,
  };
}

export function PrivateRoute(props: any) {
  const auth = useAuth();

  return (
    <Route
      path={props.path}
      exact={props.exact || false}
      render={() =>
        auth.isLoggedIn ? props.component : <Redirect to={"/signin"} />
      }
    />
  );
}
