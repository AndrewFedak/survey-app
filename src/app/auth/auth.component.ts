import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  });
  
  correctEmail = 'katerynka1998@gmail.com';
  correctPass = '07121998'

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitForm(){
    const {email, pass} = this.form.value
    if(this.validateForm(email, pass)) {
      window.localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['admin-panel'])
    } else {
      alert('Wrong email or password!')
    }
  }

  validateForm(email, pass){
    return email === this.correctEmail && pass === this.correctPass
  }
}
