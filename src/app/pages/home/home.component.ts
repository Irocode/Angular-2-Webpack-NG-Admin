import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class Home {

  constructor() {
  }

}
