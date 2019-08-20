import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });



import { ScriptService } from 'src/app/services/script.service';

import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';



import { NoAccessComponent } from './no-access/no-access.component';

import { HttpClientModule} from '@angular/common/http';
import { HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './services/auth.service';
import { HomeComponent } from './home/home.component';
import {fakeBackendProvider} from './helper/fake-backend';
import {ErrorInterceptor} from './helper/error.interceptor';
import {JwtInterceptor} from './helper/jwt.interceptor';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {LayoutModule} from './shared/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule,
    HomeModule,
    LayoutModule,
    RouterModule.forRoot([])
  ],
  providers: [
    ScriptService,
    AuthService,
    AuthGuardService,



    // // For creating a mock back-end. You don't need these in a real app.
    // fakeBackendProvider,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
