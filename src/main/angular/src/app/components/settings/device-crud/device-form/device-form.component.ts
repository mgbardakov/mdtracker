import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Device} from "../../../../model/device";

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DeviceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.data == null ? '' : this.data.name),
      serialNumber: new FormControl(this.data == null ? '' : this.data.serialNumber),
      verificationExpire: new FormControl(this.data == null ? '' : DeviceFormComponent.toDateString(this.data.verificationExpire))
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private static toDateString(date: Date): string {
    return (date.getFullYear().toString() + '-'
      + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
      + ("0" + (date.getDate())).slice(-2))
      + 'T' + date.toTimeString().slice(0,5);
  }

  getDevice(): Device {
    return {id: this.data == null ? 0 : this.data.id,
            name: this.form.controls['name'].value,
            serialNumber: this.form.controls['serialNumber'].value,
            taken: this.data == null ? false : this.data.taken,
            verificationExpire: this.form.controls['verificationExpire'].value}
  }

  submit() {
    console.log(JSON.stringify(this.getDevice()))
  }

}
