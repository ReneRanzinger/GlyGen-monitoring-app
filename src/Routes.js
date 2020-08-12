import React from "react";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import FeedBack from "./pages/FeedBack";
import Logging from "./pages/Logging";
import Events from "./pages/Events";
import Users from "./pages/Users";
import { Route, Switch } from "react-router-dom";

const Routes = props => (
    <Switch>
        <Route path="/home/" component={Login} />
        <Route path="/dashboard/" component={DashBoard} />
        <Route path="/feedback/" component={FeedBack} />
        <Route path="/logging/" component={Logging} />
        <Route path="/events/" component={Events} />
        <Route path="/users/" component={Users} />
        <Route path="/" component={Login} />
        
    </Switch>


);

export default Routes;