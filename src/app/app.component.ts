import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _tokenService: Angular2TokenService) {
    let backendServerPath = 'http://localhost:3000/auth';
    this._tokenService.init({
      registerAccountPath: backendServerPath,
      signInPath: backendServerPath,
      signOutPath: backendServerPath,
      validateTokenPath: backendServerPath + '/validate_token',
    });
  }
}
