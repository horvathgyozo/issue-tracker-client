import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;
  user: User;
  token: string;

  private authUrl = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient
  ) { }

  async login(username: string, password: string): Promise<User> {
    try {
      const token = btoa(`${username}:${password}`);
      httpOptions.headers = httpOptions.headers.set('Authorization', `Basic ${token}`);
      const user = await this.http.post<User>(`${this.authUrl}/login`, {}, httpOptions).toPromise();
      this.isLoggedIn = true;
      this.user = user;
      this.token = token;
      return Promise.resolve(this.user);
    }
    catch (e) {
      console.log(e);
      return Promise.reject();
    }
  }

  logout() {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.isLoggedIn = false;
    this.user = null;
    this.token = null;
  }

}
