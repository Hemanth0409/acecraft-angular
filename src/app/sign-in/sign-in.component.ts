import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  react_form!:FormGroup;
  username:FormControl|any;
  password:FormControl|any
  
  ngOnInit(): void {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(16)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    
  ])
    this.react_form = new FormGroup({
      username: this.username,
      password:this.password,
      
    });
  }
  onSubmit(form:any){
    console.log(form.value)
  }
}
