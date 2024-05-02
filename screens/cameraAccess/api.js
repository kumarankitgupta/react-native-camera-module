import axios from "axios";
import { globalApi } from "../../globalApi";
export function cameraApi(imageDataURL) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${globalApi}/capture`, { image_data: imageDataURL })
      .then((data) => {
        resolve(data.data.sentence);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
