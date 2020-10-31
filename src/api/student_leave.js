import axios from "axios";

export const studentLeave = async (id) => {
  try {
    const response = await axios.post(
      "https://smit-slms-api.herokuapp.com/leave/student",
      {
        studentId: id,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
