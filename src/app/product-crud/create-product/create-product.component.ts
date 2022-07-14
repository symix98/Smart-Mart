import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductsservicesService } from 'src/app/services/productsservices.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductsservicesService,private toastr: ToastrService) { }
  price: any;
  description: any;
  imageurl: any;
  ShowHide: any;

  ProductForm!: FormGroup;
  ngOnInit(): void {
    this.ProductForm = new FormGroup({
            description: new FormControl('',Validators.required),
            price: new FormControl('',Validators.required),
            imageurl: new FormControl('',Validators.required),
            ShowHide: new FormControl('',Validators.required),
        });
  }
  submitProduct(){
    if(this.ProductForm.invalid){
      return;
    }
    let newProduct = {...this.ProductForm.value}
    this.productService.createNewProduct(newProduct).subscribe((res)=>{
      console.log(res);
      this.toastr.success("Product Inserted Successfully")
    })
  }

}
