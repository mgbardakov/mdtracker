import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import {Record} from "../../../../model/record";
import {Employee} from "../../../../model/employee";
import {Device} from "../../../../model/device";
import {Position} from "../../../../model/position";
import {RecordFormComponent} from "../../../journal/record-form/record-form.component";
import {PositionService} from "../../../../services/position.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorComponent} from "../../../error/error.component";

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.css']
})
export class PositionFormComponent implements OnInit {

  form: FormGroup;
  submitDisabled: boolean;
  deleteDisabled: boolean;

  constructor(
    public dialogRef: MatDialogRef<PositionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Position,
    private positionService: PositionService,
    private dialog: MatDialog) {}



  ngOnInit(): void {
    this.form = new FormGroup({name: new FormControl(this.data == null ? '' : this.data.name,
        Validators.required)})
    this.submitDisabled = false;
    this.deleteDisabled = false;
  }

  isSubmitDisabled() {
    return this.form.invalid || this.submitDisabled;
  }

  createNewPosition(position: Position) {
    this.submitDisabled = true;
    this.positionService.createPosition(position).subscribe(position => {
      this.dialogRef.close({status: 'created', position: position});
    }, error => {
      this.errorHandler(error);
      this.submitDisabled = false;
    })
  }

  updatePosition(position: Position) {
    this.submitDisabled = true;
    this.positionService.updatePosition(position).subscribe(() => {
      this.dialogRef.close({status: 'update', position: position});
      console.log('we ar in update method')
    }, error => {
      this.errorHandler(error);
      this.submitDisabled = false;
    })
  }

  removePosition() {
    this.deleteDisabled = true;
    this.positionService.removePosition(this.getPosition()).subscribe(() => {
      this.dialogRef.close({status: 'remove', position: this.getPosition()});
    }, error => {
      this.errorHandler(error);
      this.deleteDisabled = false;
    })
  }

  onNoClick(): void {
    console.log('no click')
    this.dialogRef.close({status: 'canceled'});
  }

  getPosition(): Position {
    return {id: this.data == null ? 0 : this.data.id,
            name: this.form.controls['name'].value}
  }

  submit() {
    console.log('we are in submit')
    if (this.data === null) {
      this.createNewPosition(this.getPosition())
    } else {
      this.updatePosition(this.getPosition())
    }
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
      default: {
        this.dialog.open(ErrorComponent, {
          width: '200px',
          data: {message: "Неизвестная ошибка"}
        });
        break;
      }
    }
  }



}
