import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsservicesService {

  constructor(private _httpclient: HttpClient) { }

  //connect frontend to backend
  apiUrl = 'http://localhost:3000/products';

  // get all products

  getAllProducts(){
    return this._httpclient.get(`${this.apiUrl}`);
  }
}
