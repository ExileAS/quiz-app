import { Card, makeStyles } from "@material-ui/core";
import { CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  quizCard: {
    flexBasis: "30%",
    marginLeft: "1%",
    marginRight: "0.5%",
    textAlign: "left",
  },
});

export default function QuizCard() {
  const classes = useStyles();
  const quizes = useSelector((state: any) => state.quiz.quizes);
  const { t } = useTranslation();
  return (
    <Card className={classes.quizCard}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          <b>{t("What's due")}</b>
        </Typography>
        <Typography variant="body1">{quizes[0].topic}</Typography>
        <Typography variant="body2">{quizes[1].topic}</Typography>
      </CardContent>
    </Card>
  );
}
