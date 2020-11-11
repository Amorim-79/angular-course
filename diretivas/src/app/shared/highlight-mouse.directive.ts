import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective implements OnInit {

  backgroundColor: string;

  @Input() highlightColor = 'blue';
  @Input() defaultColor = 'yellow';

  @HostListener('mouseenter') mouseOuver(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseout') mouseLeave(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor(): string { return this.backgroundColor; }

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
