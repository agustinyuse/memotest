import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AngularFireAuth  } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private auth: AngularFireAuth) {    
    
  }
  
   logIn(email: string, password: string) {        
    return this.auth.auth.signInWithEmailAndPassword(email, password);    
  }
  
  
  async isLoggedIn() {
    const user = await this.auth.authState.pipe(first()).toPromise();
    if (!user) {
        return false;
    }
     
    return true;
  }

    logOut() {
      return this.auth.auth.signOut();      
    }
  }

