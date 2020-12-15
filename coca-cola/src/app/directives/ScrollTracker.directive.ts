import {
  Directive, HostListener, Output, EventEmitter
}
from '@angular/core';

@Directive({
  selector: '[scrollTracker]',
})
export class ScrollTracker {
  @Output() scrolled = new EventEmitter<any>();

  @HostListener('scroll', ['$event'])
  onScroll(event:any) {
    let tracker = event.target;
    let endReached = false;
    let limit = tracker.scrollHeight - tracker.clientHeight;

    //console.log(event.target.scrollTop, limit);
    if (event.target.scrollTop === limit) {
      console.log('end reached');
      endReached = true;
    }

    this.scrolled.emit({
      pos: event.target.scrollTop,
      endReached
    })
  }
}
