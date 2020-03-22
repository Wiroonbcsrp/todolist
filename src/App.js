import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";

import Login from "./screen/login/form";
import ToDoList from "./screen/toDolList/list";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/to-do-list" component={ToDoList}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
