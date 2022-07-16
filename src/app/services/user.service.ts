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

  // get all products

  getAllUsers(){
    return this._httpclient.get(`${this.apiUrl}`);
  }
  getSingleUserById(id: any){
    return this._httpclient.get(`${this.apiUrl}/`+ id);
  }
  login(data: any){
    return this._httpclient.post(`${this.UserLoginApiUrl}`,data);
  }
  editUser(data: any){
    return this._httpclient.put(`${this.editUserApiUrl}`,data);
  }
}
