import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import {User} from "../../../../model/user";
import {Authority} from "../../../../model/authority";
import {Position} from "../../../../model/position";
import {UserService} from "../../../../services/user.service";
import {PositionService} from "../../../../services/position.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorComponent} from "../../../error/error.component";
import {ROLE_NAMES} from "../user-crud.component";

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent implements OnInit {

  form: FormGroup
  authorities: Authority[];
  positions: Position[];
  submitDisabled: boolean;

  constructor(
    public dialogRef: MatDialogRef<UserAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService,
    private positionService: PositionService,
    private dialog: MatDialog) {}

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
    this.userService.getAllAuthorities().subscribe(authorities => {
      this.authorities = authorities;
    })
    this.positionService.getAllPositions().subscribe(positions => {
      this.positions = positions;
    })
  }

  isSubmitDisabled() {
    return this.form.invalid || this.submitDisabled;
  }

  onNoClick(): void {
    this.dialogRef.close({status: 'canceled'});
  }

  private getUser(): User {
    return {id: 0, authorities: [this.form.controls['authorities'].value],
            login: this.form.controls['login'].value,
            password: this.form.controls['password'].value,
            employee: {id: 0, name: this.form.controls['name'].value,
                       position: this.form.controls['position'].value}}
  }

  submit() {
    this.submitDisabled = true;
    this.userService.createUser(this.getUser()).subscribe(user => {
      this.dialogRef.close({status: 'created', user: user});
    }, error => {
      this.errorHandler(error);
      this.submitDisabled = false;
    })
  }

  private errorHandler(error: HttpErrorResponse) {
    switch (error.status) {
      case 401: {
        this.dialog.open(ErrorComponent, {
          width: '200px',
          data: {message: "Недостаточно прав"}
        });
        break;
      }
      case 406: {
        this.dialog.open(ErrorComponent, {
          width: '200px',
          data: {message: "Выбранный логин занят"}
        });
        break;
      }
      default: {
        this.dialog.open(ErrorComponent, {
          width: '200px',
          data: {message: "Неизвестная ошибка"}
        });
        break;
      }
    }
  }

  getRoleName(name: string): string {
    return ROLE_NAMES.get(name);
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
