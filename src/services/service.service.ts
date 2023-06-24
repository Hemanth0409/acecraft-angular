import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, acecraft_main1, acecraft_main2, school_logo } from 'src/models/model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit {

  Notesurl:string='http://localhost:3000/notes'
schoollogo:string='http://localhost:3000/school_logo'
acecraft_main1:string='http://localhost:3000/acecraft_main1'
acecraft_main2:string='http://localhost:3000/acecraft_main2'
  constructor(private http:HttpClient) { }

  getNotes(){
    return this.http.get<Model[]>(this.Notesurl)
  }
  getSchool_logo(){
    return this.http.get<school_logo[]>(this.schoollogo)
  }
  
  getAcecraft_main1(){
    return this.http.get<acecraft_main1[]>(this.acecraft_main1)
  }
  getAcecraft_main2(){
    return this.http.get<acecraft_main2[]>(this.acecraft_main2)
  }
  ngOnInit(): void {
    
  
  }
}
