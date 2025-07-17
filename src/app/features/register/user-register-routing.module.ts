import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastrar-usuarios',
     pathMatch: 'full'
  },
  {
    path: 'cadastrar-usuarios',
    component: UserRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegisterRoutingModule { }
