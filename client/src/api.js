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
    console.log("step 3 user login", user, ":AAA:", password);
    const res = await axios.post(
      `${baseURL}/v1/user/login`,
      {
        email: user,
        password: password,
      }
      //   resetHead()
    );

    // console.log(res.data, 'what is the response??1');
    return res.data;
  },

  registerUser: async (name, email, password) => {
    console.log("step 3 user login", name, "::", email, "::", password);
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

    // console.log(res.data, 'what is the response??1');
    return res.data;
  },

  getDestinations: async () => {
    const res = await axios.get(`${baseURL}/v1/vacantions`);

    console.log(res.data.data.destinations, "are destination fetched?");
    return res.data.data.destinations;
  },

  // http://localhost:5000/api/v1/vacantions
};

export default apiActions;
