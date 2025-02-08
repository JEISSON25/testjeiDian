import { Libro } from './libro.model';

export interface Usuario {
    id: number;
    name: string;
    phone: string;
    libros?: Libro[];
}
  