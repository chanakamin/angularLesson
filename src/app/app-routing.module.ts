import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'sign-in',
  loadChildren: () => import('./user-module/user-module.module').then(u => u.UserModuleModule),
}, {
  path: 'signin',
  redirectTo: 'sign-in',
  pathMatch: 'full',
}, {
  path: '',
  loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
