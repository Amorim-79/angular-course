import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  constructor() { }

  user: any = {
    firstName: 'Pedro',
    lastName: 'Henrique',
    age: 20,
  };

  ngOnInit(): void {
  }

}
