import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular = true;
  value = ['RxJs', 'Angular', 'ReactJS'];
  urlImage = 'https://images.unsplash.com/photo-1603614989939-43d9c327c2eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80';
  valorAtual: string;
  valorSalvo: string;
  isMouseOver = false;

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoClicado(): void {
    alert('Botão acionado!');
  }

  onKeyUp(evento: KeyboardEvent): void {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    console.log(this.valorAtual);
  }

  salvaValor(valor: string): void {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
