import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../../model/user";
import {Authority} from "../../../../model/authority";
import {Position} from "../../../../model/position";

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  ngOnInit(): void {
    this.form = new FormGroup({login: new FormControl('',
                         [Validators.required, Validators.minLength(3)]),
                                      password: new FormControl('',
                         [Validators.required, Validators.minLength(6)]),
                                      passwordConfirmation: new FormControl(),
                                      authorities: new FormControl('', Validators.required),
                                      name: new FormControl('',
                         [Validators.required, Validators.minLength(3)]),
                                      position: new FormControl('', Validators.required)
                                      }, {validators: passwordMatchValidator} );
  }

  authorities: Authority[] = [{id:1, role: "Администратор"},
                              {id:2, role: "Пользователь"}]

  positions: Position[] = [{id:1, name: "инженер"},
    {id:2, name: "врач"}]


  onNoClick(): void {
    this.dialogRef.close();
  }

  private getUser(): User {
    return {id: 0, authorities: [this.form.controls['authorities'].value],
            login: this.form.controls['login'].value,
            password: this.form.controls['password'].value,
            employee: {id: 0, name: this.form.controls['name'].value,
                       position: this.form.controls['position'].value}}
  }

  submit() {
    console.log(JSON.stringify(this.getUser()))
  }



}

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirmation = control.get('passwordConfirmation');
  if (password && passwordConfirmation && password.value !== passwordConfirmation.value) {
    passwordConfirmation.setErrors({passwordNotMatch: true})
  } else {
    passwordConfirmation.setErrors(null)
  }
  return null;
};
