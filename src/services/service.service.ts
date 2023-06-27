import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, acecraft_main1, acecraft_main2, school_logo,airen_mask, enterpriseimages } from 'src/models/model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService  {

  Notesurl:string='http://localhost:3000/notes'
schoollogo:string='http://localhost:3000/school_logo'
acecraft_main1:string='http://localhost:3000/acecraft_main1'
acecraft_main2:string='http://localhost:3000/acecraft_main2'
airen_mask:string='http://localhost:3000/airen_mask'
enterprises_card:string='  http://localhost:3000/enterpriseimages'

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
  getAiren_mask(){
    return this.http.get<airen_mask[]>(this.airen_mask)
  }
  getEnterprices_card(){
    return this.http.get<enterpriseimages[]>(this.enterprises_card)
  }
 }
