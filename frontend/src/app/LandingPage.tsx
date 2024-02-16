import { useState } from "react";
import Register from "../components/Register";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/usersSlice";

const LandingPage = () => {
  const isLogged = useSelector((state: any) => state.user.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
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
