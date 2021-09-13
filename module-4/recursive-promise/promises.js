/* eslint-disable */

const promise1 = new Promise((resolve, reject) => {
  resolve("user data-1");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("user data-2");
});
const promise3 = new Promise((resolve, reject) => {
  resolve("user data-3");
});
const promise4 = new Promise((resolve, reject) => {
  // resolve("user data-4");
  reject(new Error("user data-4"));
});
const promise5 = new Promise((resolve, reject) => {
  resolve("user data-5");
});
const promise6 = new Promise((resolve, reject) => {
  resolve("user data-6");
});
const promise7 = new Promise((resolve, reject) => {
  resolve("user data-7");
});

const promises = [promise1, promise2, promise3, promise4, promise5, promise6, promise7];

export default promises;
