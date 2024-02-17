import { useSelector } from "react-redux";
import Register from "./Register";
import DashboardCard from "./DashboardCard";

const RequireAuth = () => {
  const isLogged = useSelector((state: any) => state.user.isLogged);
  return <div>{isLogged ? <DashboardCard /> : <Register />}</div>;
};

export default RequireAuth;
