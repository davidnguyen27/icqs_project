export const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.data.accessToken;
};
