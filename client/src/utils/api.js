import axios from "axios";
import { getWithExpiry } from "./setStorage";

const baseURL = process.env.NODE_ENV === "production" ?
  "https://prod-app-travel-v1-acd8e432771b.herokuapp.com":
  "http://localhost:5000";

// const API = axios.create({
//   baseURL,
//   headers: { Authorization: `Bearer ${token}` },
// });

const utoken = getWithExpiry("userToken")
  ? getWithExpiry("userToken")
  : null;

let resetHead = () => {
  return {
    headers: {
      Authorization: `Bearer ${utoken}`,
    },
  };
};

const apiActions = {
  loginUser: async (user, password) => {
    const res = await axios.post(
      `${baseURL}/api/v1/user/login`,
      {
        email: user,
        password: password,
      },
      resetHead()
    );

    return res.data;
  },

  registerUser: async (name, email, password) => {
    const res = await axios.post(
      `${baseURL}/api/v1/user/signup`,
      {
        name: name,
        email: email,
        password: password,
        passwordConfirm: password,
      },
      resetHead()
    );

    return res.data;
  },

  addProdToUserFav: async (user_id, prod_id) => {
    const res = await axios.post(
      `${baseURL}/api/v1/user/addFavorite`,
      {
        userId: user_id,
        prodId: prod_id,
      },
      resetHead()
    );

    return res.data.data.user.favorites;
  },

  removeProdFromUserFav: async (user_id, prod_id) => {
    const res = await axios.post(
      `${baseURL}/api/v1/user/removeFavorite`,
      {
        userId: user_id,
        prodId: prod_id,
      },
      resetHead()
    );

    return res.data.data.user.favorites;
  },

  getDestinations: async () => {
    console.log("getting prod3", `${baseURL}/api/v1/vacantions`);
    const res = await axios.get(
      `${baseURL}/api/v1/vacantions`,
      resetHead()
    );
    return res.data.data.destinations;
  },

  getUserCart: async (user_id) => {
    const res = await axios.post(
      `${baseURL}/api/v1/cart/cart`,
      {
        userId: user_id,
      },
      resetHead()
    );

    return res.data;

    // http://localhost:5000/api/v1/vacantions
  },
};

export default apiActions;
