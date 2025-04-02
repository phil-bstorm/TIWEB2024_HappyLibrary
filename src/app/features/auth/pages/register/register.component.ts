import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _fb = inject(FormBuilder);

  registerForm: FormGroup;

  constructor() {
    this.registerForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.minLength(8)]]
    });
  }

  submitRegisterForm() {
    if(this.registerForm.invalid){
      console.error("Formulaire invalide!");
      return;
    }

    // appeler service Auth pour s'enregistrer
  }
}
