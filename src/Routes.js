import React from "react";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import FeedBack from "./pages/FeedBack";
import Logging from "./pages/Logging";
import Events from "./pages/Events";
import Users from "./pages/Users";
import DetailLogging from "./pages/DetailLogging"

import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

const Routes = props => (
    <Switch>
        <Route path="/home/" component={Login} />
        <ProtectedRoute exact path="/dashboard/" component={DashBoard} />
        <ProtectedRoute path="/feedback/" component={FeedBack} />
        <Route path="/logging/" component={Logging} />
        <Route path="/events/" component={Events} />
        <Route path="/users/" component={Users} />
        <Route path="/detaillogging/:data" component={DetailLogging} />
        <Route path="/" component={Login} />
        
    </Switch>


);

export default Routes;