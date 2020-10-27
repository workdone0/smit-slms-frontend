import axios from "axios";

export const teacherGuardianList = async () => {
  try {
    const response = await axios.get(
      "https://smit-slms-api.herokuapp.com/teacher/list"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
