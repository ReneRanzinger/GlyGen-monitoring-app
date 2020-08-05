import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Route, Switch } from "react-router-dom";

const Routes = props => (
    <Switch>
        <Route path="/home/" component={Login} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/" component={Login} />
    </Switch>


);

export default Routes;