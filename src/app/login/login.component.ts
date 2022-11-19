import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  error = 0;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {}

  onLoggedIn() {
    console.log(this.user);
    let isValidUser : Boolean = this.authService.signIn (this.user);

    if (isValidUser)
      this.router.navigate(['/']);
    else
      this.error = 1;
  }
}
