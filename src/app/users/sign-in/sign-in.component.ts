import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Angular2TokenService, SignInData } from 'angular2-token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInData: SignInData = <SignInData>{};
  error: any;

  constructor(
    private _tokenService: Angular2TokenService,
    private location: Location) {}

  ngOnInit() {
    if (this._tokenService.userSignedIn()) {
      this.location.go("/home");
    }
  }

  // Submit Data to Backend
  onSubmit() {

    this.error = null;

    this._tokenService.signIn(this.signInData).subscribe(
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
