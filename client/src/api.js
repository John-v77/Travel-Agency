import axios from "axios";

const baseURL = "http://localhost:5000/api";

let resetHead = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  };
};

const apiActions = {
  loginUser: async (user, password) => {
    const res = await axios.post(
      `${baseURL}/v1/user/login`,
      {
        email: user,
        password: password,
      }
      //   resetHead()
    );

    return res.data;
  },

  registerUser: async (name, email, password) => {
    const res = await axios.post(
      `${baseURL}/v1/user/signup`,
      {
        name: name,
        email: email,
        password: password,
        passwordConfirm: password,
      }
      //   resetHead()
    );

    return res.data;
  },

  getDestinations: async () => {
    const res = await axios.get(`${baseURL}/v1/vacantions`);
    return res.data.data.destinations;
  },

  // http://localhost:5000/api/v1/vacantions
};

export default apiActions;
