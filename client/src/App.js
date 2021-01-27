import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/profile/:userId" component={ProfilePage} exact></Route>
        <Route path="/auth/l" component={LoginPage} exact></Route>
        <Route path="/auth/r" component={RegisterPage} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
