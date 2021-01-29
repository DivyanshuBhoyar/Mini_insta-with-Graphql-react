import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./contexts/AuthContext";
import AuthRoute from "./utils/AuthRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/profile/:name" component={ProfilePage} exact></Route>
          <AuthRoute path="/auth/l" component={LoginPage} exact></AuthRoute>
          <AuthRoute path="/auth/r" component={RegisterPage} exact></AuthRoute>
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
