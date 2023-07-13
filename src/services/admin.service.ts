import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/models/user-details';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin='  http://localhost:3000/admin'
  constructor(private http:HttpClient,private router:Router) { }

getAdminDetails(){
  return this.http.get<Admin[]>(this.admin);
}

}
