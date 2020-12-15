import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-tan',
  templateUrl: './tan.component.html',
  styleUrls: ['./tan.component.css']
})
export class TanComponent {

  tanFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(("^[0-9]{4}$"))
  ]);

  matcher = new MyErrorStateMatcher();

}
