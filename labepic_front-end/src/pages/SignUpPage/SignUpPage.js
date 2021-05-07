import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToLoginPage } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/user";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "875px",
    position: "absolute",
    backgroundImage: "url(https://picsum.photos/1920/1080)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
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

export const SignUpPage = ({setRightButton}) => {
  useUnprotectedPage()
  const classes = useStyles();
  const history = useHistory();
  const [body, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
    nickname: "",
  });
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(body, clear, history, setRightButton)
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <form className={classes.form} onSubmit={onSubmitForm}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name={"name"}
                  value={body.name}
                  onChange={onChange}
                  color="secondary"
                  autoComplete="fname"
                  variant="outlined"
                  required
                  fullWidth
                  label="Nome e Sobrenome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name={"nickname"}
                  value={body.nickname}
                  onChange={onChange}
                  color="secondary"
                  variant="outlined"
                  required
                  fullWidth
                  label="Apelido"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name={"email"}
                  value={body.email}
                  onChange={onChange}
                  color="secondary"
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name={"password"}
                  value={body.password}
                  onChange={onChange}
                  color="secondary"
                  variant="outlined"
                  required
                  fullWidth
                  label="Senha"
                  type="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Cadastre-se
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Button
                  onClick={() => goToLoginPage(history)}
                  variant="text"
                  color="secondary"
                >
                  Já possui uma conta? Entre por aqui.
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};
