import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { getSession } from '../shared/api';

const apiURL = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class PcsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  loadPcs() {
    return this.http.get(`${apiURL}/pcs`)
  }

  // loadPcs() {
  //   return this.http.get(`${apiURL}/pcs`)
  // }

  // loadPcs() {
  //   return this.http.get(`${apiURL}/pcs`)
  // }

  createPc(pc: {}) {
    return this.http.post(`${apiURL}/pcs`, pc, { headers: { 'x-authorization': getSession().accessToken } })
  }

  // loadPcs() {
  //   return this.http.get(`${apiURL}/pcs`)
  // }


}
