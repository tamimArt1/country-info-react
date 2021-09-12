import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:countryName">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
