import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'background-color', 'yellow');
   }

}
