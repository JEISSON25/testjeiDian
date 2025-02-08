import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class UsuarioCreateComponent {
  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.usuarioForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      this.usuarioService.generateId().subscribe({
        next: (newId: number) => {
          const nuevoUsuario: Usuario = {
            id: newId,
            name: this.usuarioForm.value.name,
            phone: this.usuarioForm.value.phone
          };
          this.usuarioService.add(nuevoUsuario).subscribe({
            next: () => this.router.navigate(['/usuarios']),
            error: (err) => console.error(err)
          });
        },
        error: (err) => console.error('Error obteniendo ID:', err)
      });
    }
  }
}
