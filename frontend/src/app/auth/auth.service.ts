import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs'
import { environment } from 'src/environments/environment';
import { getSession, logoutSession } from '../shared/api';
import { IUser } from '../shared/interfaces/user';

const apiURL = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: IUser | null
  isLogged: boolean = false
  errorString: string | null = null

  constructor(private http: HttpClient, private router: Router) { }

  getUser() {
    return this.http.get<IUser>(`${apiURL}/auth/user`).pipe(tap((userData) => {
      console.log(userData + 'getUser');

    }))
  }

  register(userData: {}) {
    return this.http.post<IUser>(`${apiURL}/auth/register`, userData).pipe(tap((response) => {
      if (!response._id) { return }
    }))
  }

  login(userData: {}) {
    return this.http.post<IUser>(`${apiURL}/auth/login`, userData).pipe(tap((response) => {
      if (!response._id) { return }

    }))
  }

  logout() {
    if (!getSession()) { return }
    logoutSession()
    this.setLogin(null, false)
    this.router.navigate(['/'])
  }

  setLogin(user: IUser | null, status: boolean) {
    return (
      this.user = user,
      this.isLogged = status
    )
  }

}
