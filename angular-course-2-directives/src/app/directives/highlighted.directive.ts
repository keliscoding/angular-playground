import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: "[highlighted]",
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  constructor() {}

  // host binding decorator is a convenient way for allowing our directive typescript class to directly interfact with the host element onto which the highlighted directive is applied
  /*   @HostBinding('className')
  get cssClasses() {
    return "highlighted";
  } */

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighlighted;
  }

  // we can only use binding to write a value to a property that is already known

  @HostBinding("style.border")
  get cssStyles() {
    return "3px solid blue";
  }

  //we can use the host binding to play with inline-style aswell
}
