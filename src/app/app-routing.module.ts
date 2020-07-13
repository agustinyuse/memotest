import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './userAuth/user-auth/user-auth.component';
import { LoginRouteActivator } from './login-route-activator.service';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: 'login', component: UserAuthComponent },
  { path: 'memotest', component: BoardComponent, canActivate: [ LoginRouteActivator ] },
  { path: '', redirectTo: 'memotest', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
