import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
// import Contact from "./pages/Contact";
import TheGame from './pages/games/TheGame';
import Game from './pages/games/Game';
import LevelTwo from './pages/games/levels/Level2';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/thegame" component={TheGame} />
          <Route path="/level2" component={LevelTwo} />
          <Route path="/game" component={Game} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
