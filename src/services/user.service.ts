import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserDetails } from 'src/models/user-details';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl='http://localhost:3000/user_details'
  
  constructor(private http:HttpClient) { }

public authSubject =new Subject<boolean>();
validateAuth(data:boolean){
  this.authSubject.next(data)
}
value?:boolean;
getAuthStatus(){
this.authSubject.subscribe(
  data => 
  {
    console.log('inside user service: ' + data);
    this.value= data;
    console.log('inside user service 11: ' + this.value);
  }
);
return this.value;
}
}
