import axios from "axios";
export const delUser = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
      dispatch({
        type: "DEL_USER",
        payload: "res.data.id",
      });
    });
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:3000/users/", data).then((res) => {
      dispatch({
        type: "ADD_USER",
        payload: "res.data",
      });
    });
  };
};

export const editUser = (data) => {
  return (dispatch) => {
    axios.put(`http://localhost:3000/users/${data.id}`, data).then((res) => {
      dispatch({
        type: "EDIT_USER",
        payload: "res.data",
      });
    });
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:3000/users/${id}`).then(() => {
      dispatch({
        type: "GET_USER",
        payload: "id",
      });
    });
  };
};

export const getUserList = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/users").then((res) => {
      dispatch({
        type: "GET_USER_LISTS",
        payload: "res.data",
      });
    });
  };
};
