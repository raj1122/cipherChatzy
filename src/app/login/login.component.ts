import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ScriptService} from '../services/script.service';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService} from '../services/auth.service';




declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  invalidLogin: boolean;


  constructor( private scriptService: ScriptService,
               private router: Router,
               private route: ActivatedRoute,
               private authService: AuthService
  ) {

    scriptService.load('loginHelerJS').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));

  }

  ngOnInit() {



  }

  signIn(formValue) {

    console.log('form' , formValue);
    this.authService.login(formValue)
      .subscribe(result => {
        if (result) {


          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

          // console.log('return url',returnUrl,',,result in login' , this.authService.currentUser.name);

          this.router.navigate([ '/home']);

        }
        else
          this.invalidLogin = true;
      });



  }
}
