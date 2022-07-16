import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormBuilder, AuthService],
})
export class LoginComponent implements OnInit {

  loginCred: any;
  constructor( private authService: AuthService, private router: Router, private userService: UserService, private toastr: ToastrService) { }

  LoginForm!: FormGroup;

  ngOnInit(): void {
     this.LoginForm = new FormGroup({
            username: new FormControl('',Validators.required),
            password: new FormControl('',Validators.required),
        });
  }

  submitUserLogin(){
    if(this.LoginForm.invalid){
      console.log("invalid form")
      return;
    }
    let newUser = {...this.LoginForm.value};
    this.userService.login(newUser).subscribe({next:(res)=>{
      this.toastr.success("User Logged In Successfully!");
      this.loginCred = res;
      localStorage.setItem('level',this.loginCred.data);
      this.router.navigate(['/management']);
    },error: (e) => {
          console.log(e);
          this.toastr.warning("Wrong Credentials, Please try Again :(");
        },complete: () => {
          console.log('Login Process was Successfully Completed!');
        },
      })
  }
}

