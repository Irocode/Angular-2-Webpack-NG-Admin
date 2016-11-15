import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';


import { NgaModule } from '../../theme/nga.module';

import { Kendoui } from './kendoui.component';
import { routing }       from './kendoui.routing';

//Kendo UI
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { SortableModule } from '@progress/kendo-angular-sortable';



@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,    
    ButtonsModule,  
    LayoutModule,
    GridModule,
    ChartsModule,
    DialogModule,
    DropDownsModule,
    InputsModule,
    PopupModule,
    ScrollViewModule,
    SortableModule

  ],
  declarations: [
    Kendoui
  ],
  providers: [

  ]
})
export default class KendouiModule {



}
