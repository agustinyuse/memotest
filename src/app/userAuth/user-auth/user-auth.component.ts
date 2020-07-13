import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { UserValidationResult } from 'src/app/models/user-validation-result';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  email;
  password;
  userValidationResult: UserValidationResult;
  
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async login(formValues){
    this.userValidationResult = new UserValidationResult();    
    await this.userService.logIn(formValues.email, formValues.password)
    .catch((err) => {
       this.userValidationResult.Messages.push(err.code + err.message);
    });
    
    if(this.userValidationResult.IsValid){
      this.router.navigate(['/memotest']);
    }    
  }
}
