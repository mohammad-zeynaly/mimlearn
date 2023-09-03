import axios from "axios";

// main api project
const baseUrl = "http://localhost:3000";

export const getAllCourses = () => {
  return axios.get(`${baseUrl}/allCourses`);
};

export const getPodcasts = () => {
  axios
    .get(`${baseUrl}/podcasts`)
    .then((response) => response.data)
    .catch((error) =>
      console.error("Failed To Get Request podcasts=> ", error)
    );
};

export const getArticles = () => {
  axios
    .get(`${baseUrl}/articles`)
    .then((response) => response.data())
    .catch((error) =>
      console.error("Failed To Get Request Articles=> ", error)
    );
};

export const getComments = () => {
  axios
    .get(`${baseUrl}/comments`)
    .then((response) => response.data)
    .catch((error) =>
      console.error("Failed To Get Request Comments=> ", error)
    );
};

export const getTeachers = () => {
  axios
    .get(`${baseUrl}/teachers`)
    .then((response) => response.data)
    .catch((error) =>
      console.error("Failed To Get Request Teachers=> ", error)
    );
};
