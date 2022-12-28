import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef , OnChanges} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  // @Input() set appDropdown (ele : any) {

  // }
  // constructor(private tempRef : TemplateRef<any>, private vcRef : ViewContainerRef) { }
  constructor(private ElRef : ElementRef, private renderer : Renderer2) {}
  
  // @Input('appDropdown') openListener : boolean; 
  
  isOpen : boolean = false;

  @HostListener('click') onClick() {
    const dropdown = this.ElRef.nativeElement;
    if(!this.isOpen){
    this.renderer.addClass(dropdown, 'open')
  }
    else{
    this.renderer.removeClass(dropdown, 'open')}
    this.isOpen = !this.isOpen;
    // this.isOpen = !this.isOpen;
  }

  // ngOnChanges() {
  //   this.isOpen = this.openListener;
  // }
}
