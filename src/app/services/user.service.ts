import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpclient: HttpClient) { }


  //connect frontend to backend
  apiUrl = 'http://localhost:3000/api/users/user';
  UserLoginApiUrl = 'http://localhost:3000/api/users/user/login';
  editUserApiUrl = 'http://localhost:3000/api/users/user/edit';
  getSingleUserApiUrl = 'http://localhost:3000/api/users/user/username';
  createNewUserApiUrl = 'http://localhost:3000/api/users/user/createuser';
  // get all products

  getAllUsers(){
    return this._httpclient.get(`${this.apiUrl}`);
  }
  getSingleUserByUsername(data: any){
    return this._httpclient.get(`${this.getSingleUserApiUrl}/`+data);
  }
  login(data: any){
    return this._httpclient.post(`${this.UserLoginApiUrl}`, data);
  }
  editUser(data: any){
    return this._httpclient.put(`${this.editUserApiUrl}`, data);
  }
  createNewUser(data: any){
    return this._httpclient.post(`${this.createNewUserApiUrl}`, data);
  }
}
