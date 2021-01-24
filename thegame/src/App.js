import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
// import Contact from "./pages/Contact";
import TheGame from './pages/games/TheGame';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/thegame" component={TheGame} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
