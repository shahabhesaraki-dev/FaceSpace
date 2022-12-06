import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./HomePage";
import ProfilPage from "./ProfilePage";
import SignIn from "./SignIn";

const App = () => {
  const onlinedUser = localStorage.getItem("onlinedUser");

  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/users/:profileId">
            <ProfilPage />
          </Route>
          <Route path="/signin">
            {onlinedUser && JSON.parse(onlinedUser).logedIn === true ? (
              <Redirect to="/" />
            ) : (
              <SignIn />
            )}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
