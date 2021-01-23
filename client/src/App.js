import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact></Route>
        <Route path="/profile/:userId" component={Profilepage} exact></Route>
        <Route path="/auth" component={Loginpage} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
