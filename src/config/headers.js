export const header = () => {
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
  return {'x-auth-token' : token};
}
