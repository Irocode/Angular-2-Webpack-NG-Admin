import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { NgaModule } from '../../theme/nga.module';

import { Demo } from './demo.component';
import { routing }       from './demo.routing';



@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    Demo
  ],
  providers: [

  ]
})
export default class DemoModule {}
