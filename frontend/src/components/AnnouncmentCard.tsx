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
    borderRadius: "9px",
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
  paragraph: {
    paddingLeft: "8px",
    borderLeft: "1px solid #ccc",
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
            <Typography variant="body1" className={classes.paragraph}>
              {t(announcements[0].content)} Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
            </Typography>
          </div>
          <div className={classes.avatarContainer}>
            <Avatar alt="Person 2" src={person2} className={classes.avatar} />
            <Typography variant="body1" className={classes.paragraph}>
              {t(announcements[1].content)} parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim. Donec pede
              justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
            </Typography>
          </div>
          <div className={classes.avatarContainer}>
            <Avatar alt="Person 3" src={person3} className={classes.avatar} />
            <Typography variant="body1" className={classes.paragraph}>
              {t(announcements[2].content)} enim justo, rhoncus ut, imperdiet a,
              venenatis vitae, justo. Nullam dictum felis eu pede mollis
              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
              nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim
            </Typography>
          </div>
          <div className={classes.avatarContainer}>
            <Avatar alt="Person 4" src={person4} className={classes.avatar} />
            <Typography variant="body1" className={classes.paragraph}>
              {t(announcements[3].content)} Aliquam lorem ante, dapibus in,
              viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
              varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
              nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
