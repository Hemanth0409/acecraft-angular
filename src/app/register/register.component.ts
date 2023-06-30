import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  react_formRes!: FormGroup;
  Fname: FormControl | any;
  Lname: FormControl | any
  Email: FormControl | any;
  Password: FormControl | any;
  cPassword: FormControl | any;
  Radiobtn: FormControl | any;
  Dealership: FormControl | any;
  DealershipNum: FormControl | any;
  City: FormControl | any;
  State: FormControl | any;
  GSTNum: FormControl | any;

  ngOnInit(): void {
    this.Fname = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16)
    ]);
    this.Lname = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(16)]);
    this.Email = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);

    this.Password = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')

    ]); this.cPassword = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    ])
    this.Radiobtn = new FormControl('', [
      Validators.required
    ]);
    this.Dealership = new FormControl('', [
      Validators.required,
    ]);
    this.DealershipNum = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.pattern('/^-?(0|[1-9]\d*)?$/')
    ]);
    this.City = new FormControl('', [
      Validators.required
    ]);
    this.State = new FormControl('', [
      Validators.required
    ]);
    this.GSTNum = new FormControl('', [
      Validators.required,
    ]);


    this.react_formRes = new FormGroup({
      Fname: this.Fname,
      Lname:this.Lname,
      Email:this.Email,
      Password: this.Password,
      cpassword:this.cPassword,
      Radiobtn:this.Radiobtn,
      Dealership:this.Dealership,
      DealershipNum:this.DealershipNum,
      State:this.State,
      GSTNum:this.GSTNum
    });
  }
  onSubmit(form: any) {
    console.log(form.value)
  }
}
