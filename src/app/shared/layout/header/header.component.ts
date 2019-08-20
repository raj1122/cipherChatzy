import { Component, OnInit } from '@angular/core';
import {CssLinkService} from '../../../services/css-link.service';
import {ScriptService} from '../../../services/script.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private headerCss: string[] = [ 'MasterCss1', 'MasterCss2', 'MasterCss3', 'MasterCss4', 'MasterCss5' , 'MasterCss6'];

  private headerScript: string[] = [  'masterHelerJS2', 'masterHelerJS3', 'masterHelerJS4', 'masterHelerJS5'  ];


  constructor(private cssService: CssLinkService,
              private scriptService: ScriptService,
              private authService: AuthService ) {
    console.log('Header constructor called');

    this.cssService.load(...this.headerCss);

    this.scriptService.load(...this.headerScript);




  }

  ngOnInit() {
  }

  logOut() {

    // console.log('klog');
    this.authService.logout();



  }
}
