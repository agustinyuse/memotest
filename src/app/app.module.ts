import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { BoardService } from './board.service';
import { HttpClientModule } from  '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { UserAuthComponent } from './userAuth/user-auth/user-auth.component';
import { LoginRouteActivator } from './login-route-activator.service';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    UserAuthComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    [
      AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
      AngularFireDatabaseModule,
      AngularFireAuthModule
    ]    
  ],
  providers: [BoardService, LoginRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
