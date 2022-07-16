import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  username: any;
  userForm!: FormGroup;
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl('',Validators.required),
            level: new FormControl('',Validators.required),
        });
  }

  submitUserForm(){
    if(this.userForm.invalid){
      console.log("invalid form")
      return;
    }
    this.userForm.addControl(this.username, new FormControl())
    this.userForm.controls['username'].setValue(this.username);
    let userUpdates = {...this.userForm.value};
    console.log(userUpdates)
    this.userService.editUser(userUpdates).subscribe({next:(res)=>{
      console.log(res);
      this.toastr.success("User Updated Successfully!");
    },error: (e) => {
          console.log(e);
          this.toastr.warning("Couldn't Update User, Please try Again");
        },complete: () => {
          console.log('User Update is Done!');
        },
      })
  }

}
