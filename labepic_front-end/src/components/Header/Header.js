import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { goToPicturesPage, goToLoginPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory();
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToPicturesPage(history)} color="inherit">
          LABEPIC
        </Button>
        <Button onClick={() => goToLoginPage(history)} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
