import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  userUrl='https://acecraft-json.onrender.com/user_details'
  
  constructor() { }

public authSubject =new Subject<boolean>();
validateAuth(data:boolean){
  this.authSubject.next(data)
  
}
value?:boolean;
getAuthStatus(){
this.authSubject.subscribe(
  data => 
  {
    this.value= data;
  }
);
return this.value;
}
}
