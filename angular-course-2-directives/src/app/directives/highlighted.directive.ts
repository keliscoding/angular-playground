import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

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
  //we can use the host binding to play with inline-style aswell
  @HostBinding("style.border")
  get cssStyles() {
    return "3px solid blue";
  }

  //Host listener is a very convenient way to interact with with native dom events of the host elemment
  @HostListener("mouseover", ["$event"])
  mouseOver($event) {
    //console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
