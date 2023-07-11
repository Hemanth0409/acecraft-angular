import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, acecraft_main1, acecraft_main2, school_logo, airen_mask, enterpriseimages, collegeCarousel } from 'src/models/model';
import { environment } from 'src/Environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //Notes page URl 
  Notesurl=environment.Notesurl;
  //School logo page URl 
  schoollogo = environment.schoollogo;
  //acecraft  page URl 
  acecraft_main1=environment.acecraft_main1;
  //acecraft URl 
  acecraft_main2=environment.acecraft_main2
  //airen_mask URl 
  airen_mask=environment.airen_mask
  //Enterprise URl 
  enterprises_card=environment.enterprises_card
  //College URl 
  collegeCarousel=environment.collegeCarousel

  constructor(private http: HttpClient) { }
  getCarousel() {
    return this.http.get<collegeCarousel[]>(this.collegeCarousel)
  }
  getNotes() {
    return this.http.get<Model[]>(this.Notesurl)
  }
  getSchool_logo() {
    return this.http.get<school_logo[]>(this.schoollogo)
  }

  getAcecraft_main1() {
    return this.http.get<acecraft_main1[]>(this.acecraft_main1)
  }
  getAcecraft_main2() {
    return this.http.get<acecraft_main2[]>(this.acecraft_main2)
  }
  getAiren_mask() {
    return this.http.get<airen_mask[]>(this.airen_mask)
  }
  getEnterprices_card() {
    return this.http.get<enterpriseimages[]>(this.enterprises_card)
  }
}
