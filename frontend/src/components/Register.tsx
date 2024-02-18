import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../slices/usersSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="register" data-testid="login-button">
      <Button
        variant="contained"
        onClick={() => {
          dispatch(login(null));
          navigate("/dashboard");
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Register;
