import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ScriptService} from '../services/script.service';
import {CssLinkService} from '../services/css-link.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private homeCss: string[] = [  'HomeCss1' ];

  private firstName: string = '';

  constructor( private authService: AuthService ,
               private cssService: CssLinkService) {
    this.cssService.load(...this.homeCss);
  }


  getLogged() {
    return this.authService.isLoggedIn();
  }
  getName() {
    return this.authService.currentUser.name;

  }

  getLoggedOut() {
    this.authService.logout();
  }

}
