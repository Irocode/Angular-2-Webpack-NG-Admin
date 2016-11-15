import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'demo',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./demo.scss')],
  template: require('./demo.html')
})
export class Demo {

  constructor() {
  }

}
