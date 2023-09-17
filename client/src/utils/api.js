import axios from "axios";

const baseURL = "http://localhost:5000/api";

let resetHead = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        "userToken"
      )}`,
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

  addProdToUserFav: async (user_id, prod_id) => {
    console.log(
      "do we have the data for fav",
      user_id,
      prod_id
    );
    const res = await axios.post(
      `${baseURL}/v1/user/addFavorite`,
      {
        userId: user_id,
        prodId: prod_id,
      }
      //   resetHead()
    );

    console.log(
      res.data.data.user.favorites,
      "is data coming add fav?"
    );
    return res.data.data.user.favorites;
  },

  removeProdFromUserFav: async (user_id, prod_id) => {
    console.log(
      "do we have the data for rem fav",
      user_id,
      prod_id
    );
    const res = await axios.post(
      `${baseURL}/v1/user/removeFavorite`,
      {
        userId: user_id,
        prodId: prod_id,
      }
      //   resetHead()
    );

    console.log(
      res.data.data.user.favorites,
      "is data coming- remove fav?"
    );
    return res.data.data.user.favorites;
  },

  getDestinations: async () => {
    const res = await axios.get(`${baseURL}/v1/vacantions`);

    return res.data.data.destinations;
  },

  getDestinations2: async () => {
    const dataY = [
      {
        vipDestinations: false,
        _id: "64d7c935e4ff661b0d0f109z",
        name: "ClearWater, FL",
        price: 500,
        durationInDays: 4,
        image_url:
          "https://img1.10bestmedia.com/Images/Photos/343768/SHOR-Terrace--1-_55_660x440.jpg",
        description: "Hello for Jamaica",
        slug: "ClearWater, FL",
        __v: 0,
      },
      {
        vipDestinations: false,
        _id: "64d7c6f5bb810ad92d8ce7ae",
        name: "Tampa, FL",
        price: 1000,
        durationInDays: 4,
        image_url:
          "https://tampabaydatenightguide.com/wp-content/uploads/sites/2/2021/05/sandpearl-1024x768.jpg",
        description: "Hello for Jamaica",
        __v: 0,
      },
      {
        vipDestinations: false,
        _id: "64d7c6f5bb810ad92d8ce77e",
        name: "Tampa, FL",
        price: 1500,
        durationInDays: 4,
        image_url:
          "https://tampabaydatenightguide.com/wp-content/uploads/sites/2/2021/05/sandpearl-1024x768.jpg",
        description: "Hello for Jamaica",
        __v: 0,
      },
      {
        vipDestinations: false,
        _id: "64d7c6f5bb810ad92dghj77e",
        name: "Tampa, FL",
        price: 1200,
        durationInDays: 4,
        image_url:
          "https://tampabaydatenightguide.com/wp-content/uploads/sites/2/2021/05/sandpearl-1024x768.jpg",
        description: "Hello for Jamaica",
        __v: 0,
      },
    ];
    return dataY;
  },

  // http://localhost:5000/api/v1/vacantions
};

export default apiActions;
