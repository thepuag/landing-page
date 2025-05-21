import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule, //Formularios de tipo plantilla
    ReactiveFormsModule //Formularios reactivos
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formularioReactivo: FormGroup;

  constructor(private form: FormBuilder) { 
    
    this.formularioReactivo = this.form.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.email, Validators.required]],
    });
  }

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
