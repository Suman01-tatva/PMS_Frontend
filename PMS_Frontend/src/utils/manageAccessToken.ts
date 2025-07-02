export const getAccessToken = () => {
    return localStorage.getItem('access_token');
  };
  
  export const storeAccessToken = (accessToken: string) => {
    localStorage.setItem('access_token', accessToken);
  };
  
  export const removeAccessToken = () => {
    localStorage.removeItem('access_token');
  };
  
  export default {
    getAccessToken,
    storeAccessToken,
    removeAccessToken
  };