import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from 'src/models/user-details';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  user_details: string = 'http://localhost:3000/user_details'

  constructor(private http: HttpClient,private router:Router) { }

  getUserDetails(form:any) {
    return this.http.post<UserDetails[]>(this.user_details, form).subscribe(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
      })

      Toast.fire({
        icon: 'success',
        title: 'Registered successfully'
      }).then(() => { 

        this.router.navigate (['/sign_in']);
    })
    })
  }
}
