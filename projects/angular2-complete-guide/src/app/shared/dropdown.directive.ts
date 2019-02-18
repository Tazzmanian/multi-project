import { Directive, HostListener, HostBinding, ViewChild, ElementRef, Renderer2, ContentChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show')
  isOpen = false;

  @ContentChild('dropdownList') dropdownList: ElementRef;

  constructor(private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.toggleList();
  }

  toggleList() {
    if (this.isOpen) {
      this.renderer.addClass(this.dropdownList.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.dropdownList.nativeElement, 'show');
    }
  }

}
