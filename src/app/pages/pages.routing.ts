import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./bootstrap4/login/login.module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => System.import('./home/home.module') },
     
      { path: 'bootstrap4', loadChildren: () => System.import('./bootstrap4/ui/ui.module') },
      { path: 'forms', loadChildren: () => System.import('././bootstrap4/forms/forms.module') },
      { path: 'tables', loadChildren: () => System.import('./bootstrap4/tables/tables.module') }, 
      { path: 'editors', loadChildren: () => System.import('./bootstrap4/editors/editors.module') },  
      { path: 'kendoui', loadChildren: () => System.import('./kendoui/kendoui.module') },       
      { path: 'demo', loadChildren: () => System.import('./demo/demo.module') }  

    ]
  }
];

export const routing = RouterModule.forChild(routes);
