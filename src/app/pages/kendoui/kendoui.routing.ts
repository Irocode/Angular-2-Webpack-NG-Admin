import { Routes, RouterModule }  from '@angular/router';

import { Kendoui } from './kendoui.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Kendoui,
    children: [
     
    ]
  }
];

export const routing = RouterModule.forChild(routes);
