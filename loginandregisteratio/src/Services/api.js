import axios from 'axios';


class UserService {
      baseUrl= "http://localhost:8085/registration";
  
  addUser(data) {
    return axios.post(`${this.baseUrl}/new`, data);
  }

  login(data){
    return axios.post(`${this.baseUrl}/logindta`, data)
  }
}
export default new UserService();