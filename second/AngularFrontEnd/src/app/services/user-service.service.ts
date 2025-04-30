import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private http = inject(HttpClient);
  private baseURL = 'http://localhost:8080';

  constructor() { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/Users`);

  }

  getUserById(id:number):Observable<User>{
return this.http.get<User>(`${this.baseURL}/User/${id}`);
  }

}
