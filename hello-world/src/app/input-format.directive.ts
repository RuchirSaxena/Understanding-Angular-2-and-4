import { element } from 'protractor';
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el:ElementRef) {

  }

  @Input('format') format;
  @Input('appInputFormat') format_OtherWay;
  @HostListener('focus') onfocus(){
    console.log("onFocus");
    
  }
 //Created directive to make text value to lowercase
  @HostListener('blur') onblur(){
    console.log("onblur");
    let value:string =this.el.nativeElement.value;
    if(this.format=="lowercase")
    this.el.nativeElement.value=value.toLocaleLowerCase();
    else
    this.el.nativeElement.value=value.toUpperCase();

    if(this.format_OtherWay=="lowercase")
    this.el.nativeElement.value=value.toLocaleLowerCase();
    else
    this.el.nativeElement.value=value.toUpperCase();
    
  }
}
