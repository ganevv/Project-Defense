import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getSession } from '../shared/api';
import { IPc } from '../shared/interfaces/pc';

const apiURL = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class PcsService {

  constructor(private http: HttpClient) { }

  loadPcs() {
    return this.http.get<IPc[]>(`${apiURL}/pc`)
  }

  createPc(pc: {}) {
    console.log(getSession().accessToken);
    return this.http.post(`${apiURL}/pc`, pc, { headers: { 'x-authorization': getSession().accessToken } })
  }

  loadOnePc(id: string) {
    return this.http.get<IPc>(`${apiURL}/pc/${id}`)
  }

  updatePc(pc: {}, id: string) {
    return this.http.put(`${apiURL}/pc/${id}`, pc, { headers: { 'x-authorization': getSession().accessToken } })
  }

  deletePc(id: string) {
    return this.http.delete<IPc>(`${apiURL}/pc/${id}`, { headers: { 'x-authorization': getSession().accessToken } })
  }

  addPcToCart(id: string) {
    return this.http.get<IPc>(`${apiURL}/pc/${id}`, { headers: { 'x-authorization': getSession().accessToken } })
    //todo maybe must change route
  }

  loadAllFavPcs() {
    return this.http.get<IPc[]>(`${apiURL}/auth/profile`, { headers: { 'x-authorization': getSession().accessToken } })
  }
}