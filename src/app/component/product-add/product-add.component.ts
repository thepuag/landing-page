import { CommonModule } from '@angular/common';
import { TEXTS } from './../../resources/texts';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ICreateProduct, IProduct } from '../../models/product.model';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent implements OnInit {
  formularioReactivo: FormGroup;
  hasError: boolean = false;
  TEXTS = TEXTS;

  constructor(
    private form: FormBuilder,
    private _apiService: ApiService,
    private _toastService: ToastService
  ) {
    this.formularioReactivo = this.form.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      urlImg: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //
  }

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  hasErrors(text: string, errorType: string) {
    return (
      this.formularioReactivo.get(text)?.hasError(errorType) &&
      this.formularioReactivo.get(text)?.touched
    );
  }

  enviarFormularioReactivo() {
    if (this.formularioReactivo.valid) {
      this.hasError = false;
      const formValue = this.formularioReactivo.value;
      const newProduct: ICreateProduct = {
        nombre: formValue.nombre,
        descripcion: formValue.descripcion,
        precio: formValue.precio,
        urlImg: formValue.urlImg,
      };

      this._apiService.createProduct(newProduct).subscribe({
        next: (response) => {
          this._toastService.show('Producto creado exitosamente', 3000);
        },
        error: (error) => {
          this.hasError = true;
          console.error('Error al crear el producto:', error);
        },
      });
    } else {
      this.hasError = true;
      console.log('Formulario inválido');
    }
  }
}
