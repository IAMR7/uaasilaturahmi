import axios from "axios";

var baseurl = "http://127.0.0.1:8000/api";
// var baseurl = "https://dummyjson.com";

export const api = {
  postApi: axios.create({
    baseURL: baseurl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: "Basic " + token,
    },
    method: "post",
  }),
  postFileApi: axios.create({
    baseURL: baseurl,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      // Authorization: "Basic " + token,
    },
    method: "post",
  }),
  putFileApi: axios.create({
    baseURL: baseurl,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      // Authorization: "Basic " + token,
    },
    method: "post",
  }),
  getApi: axios.create({
    baseURL: baseurl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "get",
  }),
  putApi: axios.create({
    baseURL: baseurl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //   Authorization: "Basic " + token,
    },
    method: "put",
  }),
  delApi: axios.create({
    baseURL: baseurl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //   Authorization: "Basic " + token,
    },
    method: "delete",
  }),
  patchApi: axios.create({
    baseURL: baseurl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //   Authorization: "Basic " + token,
    },
    method: "patch",
  }),
};
