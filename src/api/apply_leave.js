import axios from "axios";

export const applyLeaveApi = async (data) => {
  try {
    const response = await axios.post(
      "https://smit-slms-api.herokuapp.com/leave/apply",
      {
        to: `${data.to[2]}/${data.to[1]}/${data.to[0]}`,
        from: `${data.from[2]}/${data.from[1]}/${data.from[0]}`,
        purpose: data.purpose,
        place: data.place,
        alternate_phone: data.alt_phone,
        student: data.id,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
