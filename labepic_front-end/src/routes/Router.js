import React from "react";
import { Switch, Route } from "react-router-dom";
import { AddPicturesPage } from "../pages/AddPicturesPage/AddPicturesPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PicturesDetailPage } from "../pages/PicturesDetailPage/PicturesDetailPage";
import { PicturesPage } from "../pages/PicturesPage/PicturesPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";

const Router = ({setRightButton}) => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage setRightButton={setRightButton}/>
      </Route>
      <Route exact path="/cadastro">
        <SignUpPage setRightButton={setRightButton}/>
      </Route>
      <Route exact path="/">
        <PicturesPage />
      </Route>
      <Route exact path="/imagem/:id">
        <PicturesDetailPage />
      </Route>
      <Route exact path="/adicionar-imagem">
        <AddPicturesPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
