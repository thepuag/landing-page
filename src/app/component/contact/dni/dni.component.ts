import { CommonModule } from '@angular/common';
import { TEXTS } from './../../../resources/texts';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  imports: [CommonModule],
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css',
})
export class DniComponent {
  tipoTelefono: string = '';
  TEXTS = TEXTS;
  formularioNuevo: FormGroup;

  constructor(private form: FormBuilder) {
    this.formularioNuevo = this.form.group({
      dni: [''],
    });
  }

  onlyNumbers(event: KeyboardEvent) {
    const key = event.key;
    if (!/^[0-9]$/.test(key)) {
    event.preventDefault();
  }
  }

  hasErrors(text: string, errorType: string) {
    return (
      this.formularioNuevo.get(text)?.hasError(errorType) &&
      this.formularioNuevo.get(text)?.touched
    );
  }
}
