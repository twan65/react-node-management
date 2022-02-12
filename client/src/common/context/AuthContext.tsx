import { useContext, createContext } from "react";
import { UserAuthState, UserAuthAction } from "./UserAuthReducer";
import { Redirect, Route } from "react-router-dom";

export const UserAuthContext = createContext(
  {} as {
    state: UserAuthState;
    dispatch: React.Dispatch<UserAuthAction>;
  }
);

// export const ProvideAuth = (props: { children: any }) => {
//   const [state, dispatch] = useReducer(userAuthReducer, initialState);
//   return (
//     <UserAuthContext.Provider value={{ state, dispatch }}>
//       {props.children}
//     </UserAuthContext.Provider>
//   );
// };

export function useAuth() {
  return useContext(UserAuthContext);
}

export function PrivateRoute(props: any) {
  return (
    <Route
      path={props.path}
      exact={props.exact || false}
      render={() =>
        props.username ? <props.component /> : <Redirect to={"/signin"} />
      }
    />
  );
}
