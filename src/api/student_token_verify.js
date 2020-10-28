import axios from "axios";

export const tokenVerifyStudent = async (token) => {
  try {
    const response = await axios.post(
      "https://smit-slms-api.herokuapp.com/verify/student",
      {
        token: token,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
