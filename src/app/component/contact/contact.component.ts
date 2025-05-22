import { CommonModule } from '@angular/common';
import { TEXTS } from './../../resources/texts';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule, //Formularios de tipo plantilla
    ReactiveFormsModule,
    CommonModule //Formularios reactivos
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formularioReactivo: FormGroup;
  hasError: boolean = false;
  TEXTS = TEXTS;

  constructor(private form: FormBuilder) { 
    
    this.formularioReactivo = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.email, Validators.required]],
    });
  }

  hasErrors(text: string, errorType: string){
    return this.formularioReactivo.get(text)?.hasError(errorType) && this.formularioReactivo.get(text)?.touched;
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
