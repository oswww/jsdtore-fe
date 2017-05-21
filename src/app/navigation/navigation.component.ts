import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) {}

  ngOnInit() {}

  signedIn() {
    return this._tokenService.userSignedIn();
  }

  signOut() {
    this._tokenService.signOut().subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }

  validate() {
    this._tokenService.validateToken().subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }
}
