import axios from "axios";

export const studentLogin = async (email, password) => {
  try {
    const response = await axios.post(
      "https://smit-slms-api.herokuapp.com/student/login",
      {
        email: email,
        password: password,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
