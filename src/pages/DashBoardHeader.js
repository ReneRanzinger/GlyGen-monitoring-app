import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown, Navbar, Nav, Row, Col } from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import TwitterIcon from "@material-ui/icons/Twitter";
import Container from "@material-ui/core/Container";
import { logDOM } from "@testing-library/react";
// import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
// import GlobalSearchControl from "../search/GlobalSearchControl";

// import {
// 	GLYGEN_API,
// 	GLYGEN_BETA,
// 	GLYGEN_DATA,
// 	GLYGEN_SPARQL,
// 	GLYGEN_ENV
// } from "../../envVariables";
// import routeConstants from "../../data/json/routeConstants.json";

const useStyles = makeStyles((theme) => ({
	navbarText: {
		color: "#2f78b7 !important",
		fontWeight: "600",
		"&:hover": {
			color: "#57affa !important",
		},
	},
}));

export default function DashBoardHeader() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<Navbar className="gg-top-header" expand="xl">
				<Container maxWidth="xl">
					<Row className="justify-content-end">
						<div className="mr-4">
							<Navbar.Text
								as={Link}
								// to={routeConstants.privacySettings}
								className={classes.navbarText}>
								<span>
									<PersonIcon />
								</span>{" "}
								MY GLYGEN
							</Navbar.Text>
						</div>
						
						<div>
							<Navbar.Text>
								<a
									href="https://twitter.com/gly_gen"
									target="_blank"
									rel="noopener noreferrer"
									className={classes.navbarText}>
									{/* <TwitterIcon className="mr-3" /> */}
								</a>
								<a
									href="https://www.youtube.com/channel/UCqfvlu86I7n71iqCG5yx8bg/"
									target="_blank"
									rel="noopener noreferrer"
									className={classes.navbarText}>
									{/* <YouTubeIcon className="mr-3" /> */}
								</a>
								<a
									href="https://github.com/glygener"
									target="_blank"
									rel="noopener noreferrer"
									className={classes.navbarText}>
									{/* <GitHubIcon className="mr-3" /> */}
								</a>
							</Navbar.Text>
						</div>
					</Row>
				</Container>
			</Navbar>

			<Navbar className="gg-blue" expand="xl">
				<Col xs={"auto"}>
					<Navbar.Brand as={Link} >
						{/* <img src={../../logo.svg} alt="Glygen" /> */}
					</Navbar.Brand>
				</Col>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="navbar-dark"
				/>
				<Navbar.Collapse className="gg-blue" id="basic-navbar-nav">
					<Col>
						<Nav>
							<Nav.Link
								className="gg-nav-link"
								as={NavLink}
								>
								HOME
							</Nav.Link>
							<NavDropdown
								className="gg-dropdown-navbar"
								title="EXPLORE"
								id="basic-nav-dropdown">
								<NavDropdown.Item as={NavLink} >
									Glycan Search
								</NavDropdown.Item>
								<NavDropdown.Item
									as={NavLink}
									>
									Protein Search
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link
								className="gg-nav-link"
								as={NavLink}
								>
								QUICK&nbsp;SEARCH
							</Nav.Link>
							<Nav.Link
								className="gg-nav-link"
								as={NavLink}
								
								// href='#try-me'
							>
								TRY&nbsp;ME
							</Nav.Link>
							<NavDropdown
								className="gg-dropdown-navbar"
								title="DATA"
								id="basic-nav-dropdown">
								<NavDropdown.Item
									
									target="_blank"
									rel="noopener noreferrer">
									Data
								</NavDropdown.Item>
								<NavDropdown.Item
									
									target="_blank"
									rel="noopener noreferrer">
									API
								</NavDropdown.Item>
								<NavDropdown.Item
									
									target="_blank"
									rel="noopener noreferrer">
									SPARQL
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								className="gg-dropdown-navbar"
								title="HELP"
								id="basic-nav-dropdown">
								<NavDropdown.Item as={NavLink} >
									About
								</NavDropdown.Item>
								<NavDropdown.Item as={NavLink} >
									Contact Us
								</NavDropdown.Item>
								<NavDropdown.Item as={NavLink} >
									Feedback
								</NavDropdown.Item>
								<NavDropdown.Item as={NavLink} >
									How to Cite
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								className="gg-dropdown-navbar"
								title="MORE"
								id="basic-nav-dropdown">
								<NavDropdown.Item as={NavLink} >
									Media
								</NavDropdown.Item>
								<NavDropdown.Item as={NavLink} >
									Resources
								</NavDropdown.Item>
								<NavDropdown.Item as={NavLink} >
									Frameworks
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Col>
					<Col md={3}>
						
					</Col>
				</Navbar.Collapse>
			</Navbar>
		</React.Fragment>
	);
}
