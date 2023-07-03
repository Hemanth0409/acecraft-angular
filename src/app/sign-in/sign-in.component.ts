import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/services/user-details.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userdetails:UserDetailsService,private router:Router,private alert:MessageService){}
  user_profile:any;
  react_form!:FormGroup;
  Email:FormControl|any;
  password:FormControl|any
  
  onSubmit(form:any){
    console.log(form.value)
    // this.userdetails.getUser().subscribe((res)=>{this.user_profile=res;
    this.userdetails.getUser().subscribe((res)=>{this.user_profile=res;
      console.log(this.user_profile)
      const user = this.user_profile.find((a: any) => {
        if (
          a.Email === this.react_form.value.Email &&
          a.Password === this.react_form.value.password
        ) {
          this.userdetails.isLogged(a, a.id);
          return true;
        }
        return false;
      });
      if (user) {
        console.log(this.user_profile.id);
        this.react_form.reset();
        this.router.navigate(['/']);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'success',
          title: 'Logged successfully'
        }).then(() => {
          this.router.navigate(['/']);
        })
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 5000, 
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'error',
          title: 'Went wrong'
        })
        this.react_form.reset();
      }
    });
  }
  ngOnInit(): void {
    this.Email = new FormControl('', [
      Validators.required,  
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    
  ])
    this.react_form = new FormGroup({
      Email: this.Email,
      password:this.password,
      
    });
  }

}