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
import { DniComponent } from './dni/dni.component';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule, //Formularios de tipo plantilla
    ReactiveFormsModule,
    CommonModule,
    DniComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  formularioReactivo: FormGroup;
  hasError: boolean = false;
  TEXTS = TEXTS;
  mostrarDni: boolean = false;
  usuarioActivo: any = {
    nombre: 'Noe',
    apellido: 'MG',
    dni: '658090080',
  };
  tipoTelefono: string = '';

  constructor(private form: FormBuilder) {
    this.formularioReactivo = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoTelefono: [''],
      dni: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.email, Validators.required]],
    });
  }

  ngOnInit(): void {
    // AQUI TENEMOS EJEMPLO PARA AUTORRELLENAR Y BLOQUEAR CAMPOS
    // this.formularioReactivo.patchValue({
    //   nombre: this.usuarioActivo.nombre,
    //   apellido: this.usuarioActivo.apellido,
    //   dni: this.usuarioActivo.dni,
    // });

    // this.formularioReactivo.get('nombre')?.disable();
    // this.formularioReactivo.get('apellido')?.disable();
    // this.formularioReactivo.get('dni')?.disable();
    this.formularioReactivo.get('nombre')?.setValue(this.usuarioActivo.nombre);
    this.formularioReactivo.get('nombre')?.disable();

    // AQUI TENEMOS EJEMPLO DE SUBSCRIBE
    this.formularioReactivo
      .get('tipoTelefono')
      ?.valueChanges.subscribe((valor) => {
        this.tipoTelefono = valor;
        this.mostrarDni = valor != '';
      });
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

  // Enviar formulario de tipo plantillaEX

  // public user: any = {
  //   name: '',
  //   email: ''
  // };

  // enviarFormularioPlantilla() {
  //   console.log(this.user);
  // }

  enviarFormularioReactivo() {
    console.log(this.formularioReactivo);
  }
}
