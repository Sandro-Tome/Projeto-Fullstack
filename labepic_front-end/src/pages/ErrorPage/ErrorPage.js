import React from 'react'
import errorImage from "../../assets/error.png"
import Typography from "@material-ui/core/Typography"
import { ErrorImage, ErrorPageContainer } from './styled'

export const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={errorImage}/>
            <Typography
                color="secondary"
                variant="h4"
                align="center"
            >
                ⚠ Erro: essa página não existe ⚠.
            </Typography>
        </ErrorPageContainer>
    )
}
