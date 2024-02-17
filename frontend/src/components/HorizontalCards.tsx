import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Avatar } from "@mui/material";
import person1 from "../images/person1.jpeg";
import person2 from "../images/person2.jpeg";
import person3 from "../images/person3.jpeg";
import person4 from "../images/person4.avif";

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
                <Typography variant="body1">Paragraph 1 by Person 1</Typography>
              </div>
              <div className={classes.avatarContainer}>
                <Avatar
                  alt="Person 2"
                  src={person2}
                  className={classes.avatar}
                />
                <Typography variant="body1">Paragraph 2 by Person 2</Typography>
              </div>
              <div className={classes.avatarContainer}>
                <Avatar
                  alt="Person 3"
                  src={person3}
                  className={classes.avatar}
                />
                <Typography variant="body1">Paragraph 3 by Person 3</Typography>
              </div>
              <div className={classes.avatarContainer}>
                <Avatar
                  alt="Person 4"
                  src={person4}
                  className={classes.avatar}
                />
                <Typography variant="body1">Paragraph 4 by Person 4</Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={classes.verticalCard}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              <b>What's due</b>
            </Typography>
            <Typography variant="body1">Vertical Card Content</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HorizontalCards;
