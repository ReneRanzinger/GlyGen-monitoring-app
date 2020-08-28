import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import CardActionArea from "@material-ui/core/CardActionArea";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });
const useStyles = makeStyles((theme) => ({
	cardAction: {
		display: "inline-flex",
		cursor: "pointer !important",
	},
	card: {
		 display: 'flex',
		 maxWidth: 345
	},
	cardDetails: {
		flex: 1,
	},
	cardMedia: {
		// width: 160
		// height: 275,
		height: 255,
		// width: '70%',
		margin: "0 auto",
	},
	divider: {
		margin: theme.spacing(1, 1),
	},
}));

export default function DashBoardCard(props) {
  const classes = useStyles();
  const { post } = props;

    return (
      <Card className="card" variant="outlined">
        <div className={classes.cardDetails} justify="space-around">
        <CardContent>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
        </CardContent>
        </div>
        <Divider className={classes.divider} />
        <CardActions>
          <Button href = {post.to} className="text-center" size="small" style={{ fontWeight: "bold", color: "#2f78b7" }} 
          variant="outline-secondary">{post.description}</Button>
        </CardActions>
      </Card>
    );
  
}

