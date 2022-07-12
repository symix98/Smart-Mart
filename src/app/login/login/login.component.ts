import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormBuilder],
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;

  constructor(private formBilder:FormBuilder, 
                 private authService: AuthService, 
                 private router: Router,
                 private userService: UserService) { }

  ngOnInit(): void {
     this.LoginForm = this.formBilder.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });

    // Get the modal
    let modal = document.getElementById('id01') as HTMLElement;

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

this.userService.getSingleUserById(2).subscribe((res)=>{
  console.log(res);
});
  }
}

