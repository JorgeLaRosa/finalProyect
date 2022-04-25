import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHeadersSize]'
})
export class HeadersSizeDirective {
  @Input('appHeadersSize') estilos !: any;

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.elemento.nativeElement.style.fontSize = this.estilos.tamano;
  }


}
