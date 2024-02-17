import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Avatar } from "@mui/material";
import person1 from "../images/person1.jpeg";
import person2 from "../images/person2.jpeg";
import person3 from "../images/person3.jpeg";
import person4 from "../images/person4.avif";
import { useSelector } from "react-redux";

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
  wideCard: {
    flexBasis: "70%",
    marginLeft: "12%",
    textAlign: "left",
  },
  verticalCard: {
    flexBasis: "30%",
    marginLeft: "1%",
    marginRight: "0.5%",
    textAlign: "left",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  },
  avatar: {
    marginRight: "8px",
  },
  wideCardContent: {
    marginTop: "20px",
  },
  cardTitle: {
    textAlign: "left",
  },
}));

const HorizontalCards = () => {
  const classes = useStyles();
  const announcements = useSelector(
    (state: any) => state.announcment.announcments
  );
  const quizes = useSelector((state: any) => state.quiz.quizes);

  return (
    <div className={classes.root}>
      <div className={classes.horizontalCards}>
        <Card className={classes.wideCard}>
          <CardContent>
            <Typography variant="h5" gutterBottom className={classes.cardTitle}>
              Announcements
            </Typography>
            <div className={classes.wideCardContent}>
              <div className={classes.avatarContainer}>
                <Avatar
                  alt="Person 1"
                  src={person1}
                  className={classes.avatar}
                />
                <Typography variant="body1">
                  {announcements[0].content}
                </Typography>
              </div>
              <div className={classes.avatarContainer}>
                <Avatar
                  alt="Person 2"
                  src={person2}
                  className={classes.avatar}
                />
                <Typography variant="body1">
                  {announcements[1].content}
                </Typography>
              </div>
              <div className={classes.avatarContainer}>
                <Avatar
                  alt="Person 3"
                  src={person3}
                  className={classes.avatar}
                />
                <Typography variant="body1">
                  {announcements[2].content}
                </Typography>
              </div>
              <div className={classes.avatarContainer}>
                <Avatar
                  alt="Person 4"
                  src={person4}
                  className={classes.avatar}
                />
                <Typography variant="body1">
                  {announcements[3].content}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={classes.verticalCard}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              <b>What's due</b>
            </Typography>
            <Typography variant="body1">{quizes[0].topic}</Typography>
            <Typography variant="body2">{quizes[1].topic}</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HorizontalCards;
