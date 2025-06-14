export interface IProduct {
  nombre: string;
  descripcion: string;
  precio: number;
  urlImg: string;
  id: number;
  fechaCreacion: Date;
  fechaActualizacion: Date;
  activo: boolean;
}
export interface ICreateProduct {
  nombre: string;
  descripcion: string;
  precio: number;
  urlImg: string;
}
