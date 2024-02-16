import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../slices/usersSlice";
const Register = () => {
  const dispatch = useDispatch();
  return (
    <div className="register">
      <Button variant="contained" onClick={() => dispatch(login(null))}>
        Login
      </Button>
    </div>
  );
};

export default Register;
