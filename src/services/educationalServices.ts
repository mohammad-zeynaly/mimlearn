import axios from "axios";

// main api project
const baseUrl = "http://localhost:3000";

export const getAllCourses = () => {
  return axios.get(`${baseUrl}/allCourses`);
};

export const getPodcasts = () => {
  return axios.get(`${baseUrl}/podcasts`);
};

export const getArticles = () => {
  return axios.get(`${baseUrl}/articles`);
};

export const getComments = () => {
  return axios.get(`${baseUrl}/comments`);
};

export const getTeachers = () => {
  return axios.get(`${baseUrl}/teachers`);
};
