import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductsservicesService } from 'src/app/services/productsservices.service';
import { UserService } from 'src/app/services/user.service';
import { CreateUserComponent } from '../create-user/create-user.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private productsService: ProductsservicesService, private productService: ProductsservicesService,private toastr: ToastrService, private userService: UserService, private modalService: NgbModal,) { }

  price: any;
  description: any;
  imageurl: any;
  ProductForm!: FormGroup;
  userForm!: FormGroup;
  level: any;
  allUsers: any = [];
  allProducts: any = [];
  result: any = [];
  allProductsNoChange: any = [];
  showHideValue: any;
  showAllUsers: boolean = false;
  showCreateUserForm: boolean = false;
  showCreateProduct: boolean = false;
  showAllProducts: boolean = false;
  productSearch!: string;
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
        this.userForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl('',Validators.required),
            level: new FormControl('',Validators.required),
        });
        this.productsService.getAllProducts().subscribe((res)=>{
      console.log(res);
      this.allProducts = res;
      this.allProductsNoChange = res;
    });
  }

showAllUsersDiv(){
  this.showAllUsers = !this.showAllUsers;
  if(this.showCreateUserForm){this.showCreateUserForm = !this.showCreateUserForm;}
}
showCreateUser(){
    this.showCreateUserForm = !this.showCreateUserForm;
    if(this.showAllUsers){this.showAllUsers = !this.showAllUsers;}
  }
showAllProductsDiv(){
  this.showAllProducts = !this.showAllProducts;
  if(this.showCreateProduct){this.showCreateProduct = !this.showCreateProduct;}
}
showCreateProductDiv(){
  this.showCreateProduct = !this.showCreateProduct;
  if(this.showAllProducts){this.showAllProducts = !this.showAllProducts;}
}
  editUser(username: any){
    const modalRef = this.modalService.open(
      EditUserComponent,
      { centered: true }
    );
    modalRef.componentInstance.username = username;
  }

  editProduct(productID: any){
    console.log(productID)
  const modalRef = this.modalService.open(
      EditProductComponent,
      { centered: true }
    );
    modalRef.componentInstance.productID = productID;
  }

  submitProductForm(){
    if(this.ProductForm.invalid){
      return;
    }
    let newProduct = {...this.ProductForm.value}
    this.productService.createNewProduct(newProduct).subscribe((res)=>{
      console.log(res);
      this.toastr.success("Product Inserted Successfully")
    })
  }
  
  submitUserForm(){
    if(this.userForm.invalid){
      console.log("invalid form")
      return;
    }
    let newUser = {...this.userForm.value};
    this.userService.createNewUser(newUser).subscribe({next:(res)=>{
      console.log(res);
      this.toastr.success("User Created Successfully!");
    },error: (e) => {
          console.log(e);
          this.toastr.warning("Couldn't Create User, Please try Again");
        },complete: () => {
          console.log('User Created successfully!');
        },
      })
  }

  searchProduct(event: any){
    this.productSearch = event.target.value;
    this.searchProductResult(this.productSearch);
  }

  searchProductResult(search: string) {
    this.productsService.searchProduct(search).subscribe({next:(res)=>{
      if(res){
        this.allProducts = res;
      }
      else{
        this.allProducts = this.allProductsNoChange;
      }
    },error:(e)=>{
      console.log(e);
    },complete:()=>{
      console.log("Search Completed");
    }})
  }

}
