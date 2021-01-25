import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/Profilepage";
import LoginPage from "./pages/Loginpage";
import NavBar from "./components/NavBar";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/profile/:userId" component={ProfilePage} exact></Route>
        <Route path="/auth" component={LoginPage} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
