import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader'
import { Profile } from "./profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default hot(module)(App);
