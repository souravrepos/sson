import axios from "axios";
import { setAlert } from "./alertAction";
import { GET_PROFILE, PROFILE_ERROR } from "../Constants_Ui";

// get current user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log("Sgf", err.response);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// create or upadate profile
export const createProfile = (formData, history, edit) => async (dispatch) => {
  console.log("edited", formData);
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await axios.post("api/profile", formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    console.log("found", res);
    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log("caught errors", err.response);
    if (errors) {
      console.log("hello");
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
