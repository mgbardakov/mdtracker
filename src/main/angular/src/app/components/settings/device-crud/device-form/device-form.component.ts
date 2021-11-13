import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import {Device} from "../../../../model/device";
import {DeviceService} from "../../../../services/device.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorComponent} from "../../../error/error.component";
import {Observable} from "rxjs";
import {ConfirmDialogComponent} from "../../../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  form: FormGroup;
  submitDisabled: boolean;
  deleteDisabled: boolean;

  constructor(
    public dialogRef: MatDialogRef<DeviceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    private deviceService: DeviceService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.data == null ? '' : this.data.name, Validators.required),
      serialNumber: new FormControl(this.data == null ? '' : this.data.serialNumber, Validators.required),
      verificationExpire: new FormControl(this.data == null ? '' : DeviceFormComponent.toDateString(this.data.verificationExpire), Validators.required)
    })
    this.submitDisabled = false;
    this.deleteDisabled = false;
  }

  onNoClick(): void {
    this.dialogRef.close({status: 'canceled'});
  }

  private static toDateString(date: Date): string {
    return (date.getFullYear().toString() + '-'
      + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
      + ("0" + (date.getDate())).slice(-2))
  }

  getDevice(): Device {
    let verificationExpire = this.form.controls['verificationExpire'].value
    verificationExpire = verificationExpire === 0 ? null : new Date(verificationExpire)
    return {id: this.data == null ? 0 : this.data.id,
            name: this.form.controls['name'].value,
            serialNumber: this.form.controls['serialNumber'].value,
            taken: this.data == null ? false : this.data.taken,
            verificationExpire: verificationExpire}
  }

  createDevice() {
    this.submitDisabled = true
    this.deviceService.createDevice(this.getDevice()).subscribe(device => {
      this.dialogRef.close({status: 'created', device: device})
    }, error => {
      this.errorHandler(error)
      this.submitDisabled = false;
    })
  }

  updateDevice() {
    this.submitDisabled = true
    this.deviceService.updateDevice(this.getDevice()).subscribe(() => {
      this.dialogRef.close({status: 'updated', device: this.getDevice()})
    }, error => {
      this.errorHandler(error)
      this.submitDisabled = false;
    })
  }

  submit() {
    if (this.data === null) {
      this.createDevice();
    } else {
      this.updateDevice();
    }
  }

  remove() {
    this.confirm("Удалить выбранный прибор?").subscribe(flag => {
      if (flag) {
        this.deleteDisabled = true;
        this.deviceService.removeDevice(this.getDevice()).subscribe(() => {
          this.dialogRef.close({status: 'removed', device: this.getDevice()})
        }, error => {
          this.errorHandler(error)
          this.deleteDisabled = false;
        })
      }
    })
  }

  isSubmitDisabled() {
    return this.form.invalid || this.submitDisabled;
  }

  confirm(message: String): Observable<boolean> {
    return this.dialog.open(ConfirmDialogComponent, {
      data: message,
      disableClose: true
    }).afterClosed();
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
