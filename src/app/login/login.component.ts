import { Component } from '@angular/core';
import { UserAuthServiceService } from '../services/user-auth-service.service';
import { SignInRequest } from '../Models/SignInRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signInRequest: SignInRequest = new SignInRequest('','');

  constructor(private userAuthService:UserAuthServiceService){}

  login(): void{
    this.userAuthService.authenticate(this.signInRequest).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  
}
