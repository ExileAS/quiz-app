import { makeStyles } from "@material-ui/core/styles";
import AnnouncmentCard from "./AnnouncmentCard";
import QuizCard from "./QuizCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    alignItems: "center",
  },
  horizontalCards: {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
    marginBottom: "20px",
    marginLeft: "4%",
  },
}));

const HorizontalCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.horizontalCards}>
        <AnnouncmentCard />
        <QuizCard />
      </div>
    </div>
  );
};

export default HorizontalCards;
