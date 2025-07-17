import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'cadastro',
      pathMatch: 'full'
  },
  {
      path: 'cadastro',
      loadChildren: () => import('./features/register/user-register.module').then(m => m.UserRegisterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
