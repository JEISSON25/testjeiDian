import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-update',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  usuarioForm: FormGroup;
  usuarioId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.usuarioForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getById(this.usuarioId).subscribe({
      next: (usuario) => {
        this.usuarioForm.patchValue({
          id: usuario.id,
          name: usuario.name,
          phone: usuario.phone
        });
      },
      error: (err) => console.error(err)
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      const updatedUsuario: Usuario = {
        id: this.usuarioId,
        name: this.usuarioForm.value.name,
        phone: this.usuarioForm.value.phone
      };

      this.usuarioService.update(updatedUsuario).subscribe({
        next: () => this.router.navigate(['/usuarios']),
        error: (err) => console.error(err)
      });
    }
  }
}
