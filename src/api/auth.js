import { instance } from './index';

// login API
function loginUser(userData) {
  return instance.post('/users/login', userData);
}

export { loginUser };