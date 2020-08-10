import React from  "react";
import DashBoardCard from "../components/cards/DashBoardCard"
import Grid from "@material-ui/core/Grid";
import { Row } from "react-bootstrap";
import Container from "@material-ui/core/Container";
import DashBoardHeader from "./DashBoardHeader";


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
export default function DashBoard() {
    
     
    // return (
    //     <div>
    //       <p>Hello World!</p>
    //     </div>
    //   );

    return (
        <div className="base-container">
          {/* <DashBoardHeader/> */}
        <Container
				maxWidth="xl"
				className="gg-container"
				style={{ width: "98%" }}>
          <Row className="show-grid">
            <Grid container spacing={4}>
              <Grid item xs={12} md={8} lg={9}>
                <Grid
								  container
								  spacing={4}
								  style={{
									justifyContent: "center",
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
      )
}    