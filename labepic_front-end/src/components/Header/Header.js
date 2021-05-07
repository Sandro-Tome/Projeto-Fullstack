import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { goToPicturesPage, goToLoginPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom"

const Header = ({rightButton, setRightButton}) => {
  const history = useHistory();

  
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButton("Login")
      goToLoginPage(history)
    } else {
      goToLoginPage(history)
    }
  }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToPicturesPage(history)} color="inherit">
          LABEPIC
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
