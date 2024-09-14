import http from "../Interceptors";

const login = (email, password) => {
  return http.post('https://academics.newtonschool.co/api/v1/user/login', {
    email: email,
    password: password,
    appType: "linkedin"
  });
};


const signUp = (name, email, password) => {
  return http.post('https://academics.newtonschool.co/api/v1/user/signUp', {
    name: name,
    email: email,
    password: password,
    appType: "linkedin"
  });
};

const AuthService = {
  login,
  signUp
};

export default AuthService;
