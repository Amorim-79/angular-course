import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrls: ['./pipe-examples.component.css']
})
export class PipeExamplesComponent implements OnInit {

  livro: any = {
    name: 'livro de exemplo',
    rating: 4.5456,
    price: 44.50,
    date: new Date(2020, 10, 14),
  };

  asyncPipe = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ValorAsync 1'), 2000);
  });

  asyncPipe2 = interval(2000).pipe(map(x => 'ValorAsync 2'));

  constructor() { }

  ngOnInit(): void {
  }

}
