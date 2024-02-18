import { Card, makeStyles } from "@material-ui/core";
import { Avatar, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import person1 from "../images/person1.jpeg";
import person2 from "../images/person2.jpeg";
import person3 from "../images/person3.jpeg";
import person4 from "../images/person4.avif";

const useStyles = makeStyles({
  announcmentCard: {
    flexBasis: "70%",
    marginLeft: "12%",
    textAlign: "left",
  },
  avatar: {
    marginRight: "8px",
  },
  announcmentCardContent: {
    marginTop: "20px",
  },
  cardTitle: {
    textAlign: "left",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  },
});

export default function AnnouncmentCard() {
  const classes = useStyles();
  const announcements = useSelector(
    (state: any) => state.announcment.announcments
  );
  const { t } = useTranslation();

  return (
    <Card className={classes.announcmentCard}>
      <CardContent>
        <Typography variant="h5" gutterBottom className={classes.cardTitle}>
          {t("announcment")}
        </Typography>
        <div className={classes.announcmentCardContent}>
          <div className={classes.avatarContainer}>
            <Avatar alt="Person 1" src={person1} className={classes.avatar} />
            <Typography variant="body1">{announcements[0].content}</Typography>
          </div>
          <div className={classes.avatarContainer}>
            <Avatar alt="Person 2" src={person2} className={classes.avatar} />
            <Typography variant="body1">{announcements[1].content}</Typography>
          </div>
          <div className={classes.avatarContainer}>
            <Avatar alt="Person 3" src={person3} className={classes.avatar} />
            <Typography variant="body1">{announcements[2].content}</Typography>
          </div>
          <div className={classes.avatarContainer}>
            <Avatar alt="Person 4" src={person4} className={classes.avatar} />
            <Typography variant="body1">{announcements[3].content}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
