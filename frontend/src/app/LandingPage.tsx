import Register from "../components/Register";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/usersSlice";
import { useNavigate } from "react-router-dom";
import useRunOnce from "../hooks/useRunOnce";

const LandingPage = () => {
  const isLogged = useSelector((state: any) => state.user.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useRunOnce({
    fn: () => {
      if (isLogged) {
        navigate("/dashboard");
      }
    },
    sessionKey: "1",
  });

  return (
    <div className="register">
      {!isLogged ? (
        <Register />
      ) : (
        <Button variant="outlined" onClick={() => dispatch(logout(null))}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default LandingPage;
