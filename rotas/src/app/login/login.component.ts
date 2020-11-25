import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    name: '',
    password: ''
  };

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.authUser(this.user);
    if (this.authService.authorization) {
      this.route.navigate(['home']);
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }

}
