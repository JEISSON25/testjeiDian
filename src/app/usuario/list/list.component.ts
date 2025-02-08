import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuarioService.get().subscribe({
      next: (data) => this.usuarios = data,
      error: (err) => console.error(err)
    });
  }

  delete(id: number): void {
    if (confirm("¿Seguro desea eliminar éste usuario?")) {
      this.usuarioService.delete(id).subscribe({
        next: () => this.loadUsuarios(),
        error: (err) => console.error(err)
      });
    }
  }

  update(usuario: Usuario): void {
    this.router.navigate(['/usuarios/update', usuario.id]);
  }
}
