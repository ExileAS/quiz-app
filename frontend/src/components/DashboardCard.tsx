import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnnouncments } from "../slices/announcmentsSlice";
import { fetchQuizes } from "../slices/quizesSlice";
import DashboardContent from "./DashboardContent";
import Loader from "./Loader";

const DashboardCard = () => {
  const dispatch = useDispatch();
  const announcmentStatus = useSelector(
    (state: any) => state.announcment.fetchStatus
  );
  const quizStatus = useSelector((state: any) => state.quiz.fetchStatus);

  useEffect(() => {
    dispatch(fetchAnnouncments() as any);
    dispatch(fetchQuizes() as any);
  }, [dispatch]);

  let content;

  if (announcmentStatus === "success" && quizStatus === "success") {
    content = <DashboardContent />;
  }
  if (announcmentStatus === "loading" || quizStatus === "loading") {
    content = <Loader />;
  }

  return <>{content}</>;
};

export default DashboardCard;
