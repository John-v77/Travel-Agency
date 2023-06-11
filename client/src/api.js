import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

let resetHead = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  };
};

const actions = {
  loginUser: async (user, password) => {
    console.log('step 3 user login', user, '::', password);
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
};

export default actions;
