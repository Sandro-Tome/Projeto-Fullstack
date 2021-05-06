import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useForm from '../../hooks/useForm'
import { useHistory } from "react-router-dom"
import { goToSignUpPage } from "../../routes/coordinator"
import { login } from "../../services/user";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '875px',
    position: 'absolute',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    marginTop: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
    backgroundColor: theme.palette.primary.main,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 5),
  },
}));

export const LoginPage = ({setRightButton}) => {
  useUnprotectedPage()
  const classes = useStyles();
  const history = useHistory()
  const [body, onChange, clear] = useForm({email:"", password:""})
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    login(body, clear, history, setRightButton)
  }
  
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={onSubmitForm}>
            <TextField
              name={"email"}
              value={body.email}
              onChange={onChange}
              color="secondary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              name={"password"}
              value={body.password}
              onChange={onChange}
              color="secondary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Button onClick={() => goToSignUpPage(history)} variant="text" color="secondary">
                  Ainda não tem uma conta? Cadastre-se
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};
