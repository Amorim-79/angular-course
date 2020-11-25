import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    name: 'admin',
    password: '123'
  };

  authorization = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor() { }

  authUser(user: any): void {
    if (user.name === this.user.name && user.password === this.user.password) {
      this.authorization = true;
      this.showMenuEmitter.emit(true);
    } else {
      this.authorization = false;
      this.showMenuEmitter.emit(false);
    }
  }
}
