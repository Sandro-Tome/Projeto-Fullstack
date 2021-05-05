import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToPicturesPage } from "../routes/coordinator";

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}user/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      clear();
      goToPicturesPage(history);
    })
    .catch((error) => alert("Erro no login"));
};

export const signUp = (body, clear, history) => {
  axios
    .post(`${BASE_URL}user/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      clear();
      goToPicturesPage(history);
    })
    .catch((error) => alert("Erro no login"));
};
