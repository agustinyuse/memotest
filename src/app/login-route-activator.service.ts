import { CanActivate, Router } from '@angular/router';
import { Injectable  } from '@angular/core';
import { UserService } from '../app/user.service';

@Injectable({
    providedIn: 'root'
  })
export class LoginRouteActivator implements CanActivate{
    constructor(private userService: UserService,
               private router: Router){
    
    }

    async canActivate(){
        const isLogged = await this.userService.isLoggedIn();

        if(!isLogged){
           this.router.navigate(['/login']);
        }

        return isLogged;
    }
}