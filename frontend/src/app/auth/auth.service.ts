import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs'
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';

const apiURL = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null

  constructor(private http: HttpClient, private router: Router) { }

  getUser() {
    return this.http.get<IUser>(`${apiURL}/auth/user`).pipe(tap((user) => {
      this.user = user
    }))
  }

  register(userData: {}) {
    return this.http.post<IUser>(`${apiURL}/auth/register`, userData).pipe(tap((user) => {
      this.user = user
      localStorage.setItem('token', this.user.accessToken)
    }))
  }

  login(userData: {}) {
    return this.http.post<IUser>(`${apiURL}/auth/login`, userData).pipe(tap((userData) => {
      this.user = userData
      localStorage.setItem('token', this.user.accessToken)
    }))
  }

  logout() {
    this.user = null
    return localStorage.removeItem('token')
  }

  get isLoggedId(): boolean {
    return this.user !== null
  }

}
