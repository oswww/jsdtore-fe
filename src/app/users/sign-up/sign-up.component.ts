import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
    private location: Location) {}

  ngOnInit() {
    if (this._tokenService.userSignedIn()) {
      this.location.back();
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
