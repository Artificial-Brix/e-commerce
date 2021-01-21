import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Cards from "./components/cards/Cards";
import Card from "./components/cards/card/Card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../src/pages/Cart";

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <main className="mainContainer">
          <Switch>
            <Route exact path="/">
              <Cards />
            </Route>
            <Route path="/cart" component={Cart} />
            <Route exact path="/cards/:cardId" component={Card} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
