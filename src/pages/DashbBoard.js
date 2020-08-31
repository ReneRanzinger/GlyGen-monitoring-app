import React from  "react";
import DashBoardCard from "../components/cards/DashBoardCard"
import Grid from "@material-ui/core/Grid";
import { Row } from "react-bootstrap";
import Container from "@material-ui/core/Container";
import ProtectedBootstrapNavbar from "./ProtectedBootstrapNavbar"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const dashBoardCards = [
  {
    title: "Feedback",
		description:
			"Feedback",
		// image: glycanImg,
		// imageText: "Glycan",
		to: "./feedback",
  },
  {
    title: "Logging",
		description:
			"Logging",
		// image: glycanImg,
		// imageText: "Glycan",
		to: "./logging",
  },
  {
    title: "Events",
		description:
			"Events",
		// image: glycanImg,
		// imageText: "Glycan",
		to: "./events",
  },
  {
    title: "Users",
		description:
			"Users",
		// image: glycanImg,
		// imageText: "Glycan",
		to: "./users",
  },
];

// const test = 
// 	{
// 		title: "Feedback",
// 			description:
// 				"Feedback",
// 			// image: glycanImg,
// 			// imageText: "Glycan",
// 			to: "./feedback",
// 	  };


const theme = createMuiTheme({
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			"Oxygen",
			"Ubuntu",
			"Cantarell",
			'"Fira Sans"',
			'"Droid Sans"',
			'"Helvetica Neue"',
			"sans-serif",
		].join(","),
	},
});
export default function DashBoard() {
    return (
      <ThemeProvider theme={theme}>
        <div className="base-container">

		<div className="header">  <ProtectedBootstrapNavbar/> </div>
        <Container
				maxWidth="xl"
				className="gg-container"
				style={{ width: "98%" }}>
          <Row className="show-grid">
            <Grid container spacing={8}>
              <Grid item xs={12} md={8} lg={9}>
                <Grid
								  container
								  spacing={4}
								  style={{
									justifyContent: "SPACE-EVENLY",
								  }}>
								  {dashBoardCards.map((post) => (
									  <DashBoardCard key={post.title} post={post} />
								  ))}
								  
							  </Grid>
              </Grid>
            </Grid>
          </Row>
        </Container>
        </div>
        </ThemeProvider>
      )
}    
