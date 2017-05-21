import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Angular2TokenService, RegisterData } from 'angular2-token';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerData: RegisterData = <RegisterData>{};
  error: any;

  constructor(
    private _tokenService: Angular2TokenService,
    private location: Location,
    private router: Router) {}

  ngOnInit() {
    if (this._tokenService.userSignedIn()) {
      this.router.navigate(["/home"]);
    }
  }

  // Submit Data to Backend
  onSubmit() {
    this.error = null;

    this._tokenService.registerAccount(this.registerData).subscribe(
      res => {
        console.log(res);
        this.location.back();
      }, error => {
        console.log(error);
        this.error = error;
      }
    );
  }
}
