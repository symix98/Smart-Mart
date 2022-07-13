import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpclient: HttpClient) { }


  //connect frontend to backend
  apiUrl = 'http://localhost:3000/api/users/user';
  registerUserApiUrl = 'http://localhost:3000/api/users/user/register';

  // get all products

  getAllUsers(){
    return this._httpclient.get(`${this.apiUrl}`);
  }
  getSingleUserById(id: any){
    return this._httpclient.get(`${this.apiUrl}/`+ id);
  }
  registerNewUser(data: any){
    return this._httpclient.post(`${this.registerUserApiUrl}`,data);
  }
}
