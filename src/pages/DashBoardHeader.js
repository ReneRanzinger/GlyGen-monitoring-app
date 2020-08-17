import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "../images/glygen-logoW.svg";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown, Navbar, Nav, Row, Col } from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import Container from "@material-ui/core/Container";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";

import {
    GLYGEN_API,
    GLYGEN_BETA,
    GLYGEN_DATA,
    GLYGEN_SPARQL,
    GLYGEN_ENV
} from "../envVariables";
import routeConstants from "../data/json/routeConstants.json";

const useStyles = makeStyles((theme) => ({
    navbarText: {
        color: "#f5f5f5 !important",
        fontWeight: "600",
        "&:hover": {
            color: "#57affa !important",
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <ul>
                <li><Navbar.Brand as={Link} to={routeConstants.home}>
                    <img src={logo} alt="Glygen" />
                </Navbar.Brand></li>
                <li><a className="text-center" style={{ fontWeight: "bold", color: "#2f78b7" }} variant="outline-secondary" class="active" href="#home"> Home</a></li>
                <li><a className="text-center" style={{ fontWeight: "bold", color: "#2f78b7" }} variant="outline-secondary" href="#news">News</a></li>
                <li><a className="text-center" style={{ fontWeight: "bold", color: "#2f78b7" }} variant="outline-secondary" href="#contact">Contact</a></li>
                <li style={{ float: "right" }}><div className="mr-4">
                    <Navbar.Text
                        as={Link}
                        to={routeConstants.privacySettings}
                        className="text-center">
                        <span>
                            <PersonIcon />
                        </span>
								
							</Navbar.Text>
                </div></li>
            </ul>
        </React.Fragment>
    );
}
