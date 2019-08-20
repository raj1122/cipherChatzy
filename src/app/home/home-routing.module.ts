import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuardService} from '../services/auth-guard.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent ,   canActivate: [ AuthGuardService ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
