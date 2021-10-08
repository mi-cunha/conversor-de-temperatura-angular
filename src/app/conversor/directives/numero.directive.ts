import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numero]'
})
export class NumeroDirective implements ControlValueAccessor {

  OnTouched: any;
  OnChange: any;

  constructor(private el:ElementRef) { }

  @HostListener('keyup', ['$event']) onKeyUp($event: any){
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, ''); //sempre que digitar um caracter que nao seja numero ele vai trocar pra vazio

    if(posDecimais > 0){
      valor = valor.substr(0, posDecimais)+'.'+valor.substr(posDecimais);
    }
    $event.target.value = valor;
    this.OnChange(valor);
  }


  /**
   * Registar função a ser chamada parta atualizar valor do modal.
   * @param fn
   */

   registerOnChange(fn:any): void {
    this.OnChange = fn;
  }

  /**
   * Registar função a ser chamada parta atualizar valor do modal em touched.
   * @param fn 
   */

  registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }

  /**
   * Obtem o valor contido no model.
   * 
   */

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
