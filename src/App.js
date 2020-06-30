import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Home } from "./components/Home"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        );
    }
}

export default App;
