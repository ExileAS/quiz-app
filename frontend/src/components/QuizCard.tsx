import { Card, makeStyles } from "@material-ui/core";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  quizCard: {
    flexBasis: "30%",
    marginLeft: "1%",
    marginRight: "0.5%",
    textAlign: "left",
    borderRadius: "9px",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  boxContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  boxTitle: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  boxIcon: {
    marginRight: theme.spacing(1),
    marginLeft: "10px",
  },
  textField: {
    marginBottom: theme.spacing(1),
  },
  cardActions: {
    marginTop: "auto",
  },
  centeredButton: {
    margin: "auto",
  },
}));

export default function QuizCard() {
  const classes = useStyles();
  const quizes = useSelector((state: any) => state.quiz.quizes);

  const { t } = useTranslation();
  return (
    <Card className={classes.quizCard}>
      <h2 className="quiz-title">What's due</h2>
      <div className={classes.boxContainer}>
        <div className={classes.boxContent}>
          <div className={classes.boxTitle}>
            <AccessAlarmIcon className={classes.boxIcon} />
            <Typography variant="h6">unit 2 quiz</Typography>
          </div>
        </div>
        <Divider />
        <CardContent>
          <Typography variant="body1" className={classes.textField}>
            {t(quizes[0].course)}
          </Typography>
          <Typography variant="body1" className={classes.textField}>
            {t(quizes[0].topic)}
          </Typography>
          <Typography variant="body1" className={classes.textField}>
            {t(quizes[0].dueTo)}
          </Typography>
          <CardActions className={classes.cardActions}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.centeredButton}
            >
              Button 2
            </Button>
          </CardActions>
        </CardContent>
      </div>

      <div className={classes.boxContainer}>
        <div className={classes.boxTitle}>
          <EventAvailableIcon className={classes.boxIcon} />
          <Typography variant="h6">12-12 Assignment</Typography>
        </div>
        <Divider />
        <CardContent>
          <Typography variant="body1" className={classes.textField}>
            {t(quizes[1].course)}
          </Typography>
          <Typography variant="body1" className={classes.textField}>
            {t(quizes[1].topic)}
          </Typography>
          <Typography variant="body1" className={classes.textField}>
            {t(quizes[1].dueTo)}
          </Typography>
          <CardActions className={classes.cardActions}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.centeredButton}
            >
              Button 2
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}
