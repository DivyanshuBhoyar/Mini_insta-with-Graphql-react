import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/Profilepage";
import LoginPage from "./pages/Loginpage";
import NavBar from "./components/NavBar";

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
