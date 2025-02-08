import { NgModule } from '@angular/core';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCreateComponent } from './create/create.component';
import { UsuarioListComponent } from './list/list.component';
import { UsuarioUpdateComponent } from './update/update.component';

@NgModule({
  imports: [
    UsuarioRoutingModule,
    UsuarioCreateComponent,
    UsuarioListComponent,
    UsuarioUpdateComponent,
  ]
})
export class UsuarioModule { }
