import axios from "axios";

export const studentSignUp = async (user) => {
  try {
    const response = await axios.post(
      "https://smit-slms-api.herokuapp.com/student/register",
      {
        name: user.name,
        phone: user.phone,
        email: user.email,
        reg_no: user.reg_no,
        password: user.password,
        floor_warden_id: user.floor_warden_id,
        hostel: user.hostel,
        block: user.block,
        room: user.room,
        level: user.level,
        parents_phone: user.parents_phone,
        department: user.department,
        year: user.year,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
