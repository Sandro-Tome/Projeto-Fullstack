import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from '../components/Header/Header'
import { AddPicturesPage } from '../pages/AddPicturesPage/AddPicturesPage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { PicturesDetailPage } from '../pages/PicturesDetailPage/PicturesDetailPage'
import { PicturesPage } from '../pages/PicturesPage/PicturesPage'
import { SignUpPage } from '../pages/SignUpPage/SignUpPage'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/cadastro">
                        <SignUpPage/>
                    </Route>
                    <Route exact path="/">
                        <PicturesPage/>
                    </Route>
                    <Route exact path="/imagem/:id">
                        <PicturesDetailPage/>
                    </Route>
                    <Route exact path="/adicionar-imagem">
                        <AddPicturesPage/>
                    </Route>
                    <Route>
                        <ErrorPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router