import "./App.css";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./component/About";
import Pokedox from "./component/Pokedox";

import PokeStateContext from "./context/PokeState";

function App() {
    return (
        <PokeStateContext>
            <Router>
                <main className="wrapper">
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/">
                                <div className="flex content-center">
                                    <Pokedox />
                                </div>
                            </Route>

                            <Route exact path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </div>
                </main>
            </Router>
        </PokeStateContext>
    );
}

export default App;
