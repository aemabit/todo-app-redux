// SETUP CONFIG/HEADERS && TOKEN
export const tokenConfig = (getState) => {
  //   GET TOKEN FROM LOCALSTORAGE
  const token = getState().auth.token;

  //   HEADERS
  const config = {
    headers: {
      withCredentials: true,
    },
  };

  if (token) {
    config.headers["authorization"] = token;
  }

  return config;
};
