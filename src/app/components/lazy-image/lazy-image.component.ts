import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StateChange } from 'ng-lazyload-image';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss'],
})
export class LazyImageComponent {

  @Input() img: string;
  @Input() alt = '';
  @ViewChild('lazyImg', { read: ElementRef, static: true }) lazyImg: ElementRef;
  offset = 100;

  constructor() { }

  imageStateChanged(event: StateChange) {
    switch (event.reason) {
      case 'loading-succeeded':
        // The image has successfully been loaded and placed into the DOM
        this.lazyImg.nativeElement.style.opacity = 1;
        break;
      default:
        break;
    }
  }

}
