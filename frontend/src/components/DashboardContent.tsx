import { Button, Card, CardContent, Typography } from "@mui/material";
import HorizontalCards from "./HorizontalCards";
import cardBackground from "../images/card-background.webp";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

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

export default function DashboardContent() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography variant="h5" gutterBottom style={{ color: "#6eb69e" }}>
              {t("ExamsTime")}
            </Typography>
            <Typography variant="body1" style={{ color: "grey" }}>
              {t("MainParagraph")}
              <p className="quote">"{t("AlbertQuote")}"-Albert Einstein</p>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {t("ViewTips")}
            </Button>
          </CardContent>
        </Card>
      </div>
      <HorizontalCards />
    </>
  );
}
