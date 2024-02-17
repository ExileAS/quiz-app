import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import cardBackground from "../images/card-background.webp";
import HorizontalCards from "./HorizontalCards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAnnouncments } from "../slices/announcmentsSlice";
import { fetchQuizes } from "../slices/quizesSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "20px",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    background: `url(${cardBackground}) right center`,
    backgroundSize: "cover",
    color: "#fff",
    width: "83%",
    marginLeft: "16%",
  },
  content: {
    padding: "20px",
    gridColumn: "1 / span 1",
    alignSelf: "center",
  },
  button: {
    gridColumn: "1 / span 1",
    marginTop: "20px",
  },
}));

const DashboardCard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnnouncments() as any);
    dispatch(fetchQuizes() as any);
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography variant="h5" gutterBottom style={{ color: "#6eb69e" }}>
              Exams Time
            </Typography>
            <Typography variant="body1" style={{ color: "grey" }}>
              Here we are, Are you ready to fight? Don't worry, we prepared some
              tips to be ready for your exams
              <p className="quote">
                "nothing happens until something moves"-Albert Einstein
              </p>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              View Exams Tips
            </Button>
          </CardContent>
        </Card>
      </div>
      <HorizontalCards />
    </>
  );
};

export default DashboardCard;
