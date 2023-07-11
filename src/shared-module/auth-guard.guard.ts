// import { Injectable } from '@angular/core';
// import { CanActivate, Router, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { UserService } from 'src/services/user.service';
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   isAuthenticated: boolean = false;
//   //constructor of userservice
//   constructor(private authService: UserService, private router: Router) {}

//   canActivate(): 

//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     var isAuth = this.authService.authSubject.subscribe((data) => {
//       this.isAuthenticated = data;
//     });

//     if (this.isAuthenticated == false) {
//       this.router.navigate(['/sign_in']);
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';


export const AuthGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');
  const router = inject(Router)

  if (token) {
    return true
  }
  else {
    router.navigate(['/sign_in'])
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
    Toast.fire({
      icon: 'warning',
      title: 'Log in to View Cart!!'
    })
    return false
  }



};