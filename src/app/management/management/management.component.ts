import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductsservicesService } from 'src/app/services/productsservices.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private productService: ProductsservicesService,private toastr: ToastrService, private userService: UserService) { }

  price: any;
  description: any;
  imageurl: any;
  ShowHide: any;
  ProductForm!: FormGroup;
  level: any;
  allUsers: any = [];
  ngOnInit(): void {
    this.level = localStorage.getItem('level');
    this.userService.getAllUsers().subscribe((res)=>{
      console.log(res);
      this.allUsers = res;
    });
    console.log(this.level)
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
