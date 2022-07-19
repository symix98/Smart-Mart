import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsservicesService {

  constructor(private _httpclient: HttpClient) { }

  //connect frontend to backend
  apiUrl = 'http://localhost:3000/api/products/product';
  createProductApiUrl = 'http://localhost:3000/api/products/product/create';
  updateProductApiUrl = 'http://localhost:3000/api/products/product/update';
  searchProductApiUrl = 'http://localhost:3000/api/products/product/search';
  // get all products

  getAllProducts(){
    return this._httpclient.get(`${this.apiUrl}`);
  }
  getProductById(id: any){
    return this._httpclient.get(`${this.apiUrl}/`+ id);
  }
  createNewProduct(data: any){
    return this._httpclient.post(`${this.createProductApiUrl}`,data);
  }
  updateProductById(productUpdate: any,id: any){
    return this._httpclient.put(`${this.updateProductApiUrl}/`+ id,productUpdate);
  }
  searchProduct(data: string){
    return this._httpclient.post(`${this.searchProductApiUrl}`,{search:data});
  }
}
