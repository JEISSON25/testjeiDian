import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './list/list.component';
import { UsuarioCreateComponent } from './create/create.component';
import { UsuarioUpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: UsuarioListComponent },
  { path: 'create', component: UsuarioCreateComponent },
  { path: 'update/:id', component: UsuarioUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
