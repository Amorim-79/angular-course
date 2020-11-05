import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() value: number;

  @Output() changeValue = new EventEmitter();

  @ViewChild('campoInput') variavelCampoInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.variavelCampoInput.nativeElement.value++;
    this.changeValue.emit({ newValue: this.variavelCampoInput.nativeElement.value });
  }

  decrement(): void {
    this.variavelCampoInput.nativeElement.value--;
    this.changeValue.emit({ newValue: this.variavelCampoInput.nativeElement.value });
  }

}
