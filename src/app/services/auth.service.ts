import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users : User[] = [{"username": "Admin", "password": "admin", "roles": ["ADMIN"]},
                    {"username": "Ahmed", "password": "123", "roles": ["USER"]}];

  public loggedUser : string | undefined;
  public isLoggedIn : boolean = false;
  public roles : string[] | undefined;

  constructor( private router : Router) { }

  Logout() {
    this.isLoggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
    this.router.navigate(['/login']);
  }

  signIn (user : User) : Boolean {
    let validUser : Boolean = false;
    this.users.forEach ( curUser => {
      if ( user.username === curUser.username && user.password === curUser.password ) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isLoggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
      }
    });
    return validUser;
  }

  isAdmin() : Boolean {
    if (!this.roles) {
      return false;
    }
    return this.roles.indexOf('ADMIN') >= -1;
  }
  
}
