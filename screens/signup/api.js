import axios from "axios";
import { globalApi } from "../../globalApi";

export function signupApi(signupData) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${globalApi}/signup`, signupData)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
