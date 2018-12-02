import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;
  user: User;

  constructor() { }

  login(username: string, password: string): Promise<User> {
    this.isLoggedIn = true;
    this.user = new User();
    this.user.username = 'Fake User';
    return Promise.resolve(this.user);
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
  }
}
