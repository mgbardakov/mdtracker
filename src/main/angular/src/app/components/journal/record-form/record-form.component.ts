import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../../../model/employee";
import {Record} from "../../../model/record";
import {FormControl, FormGroup} from "@angular/forms";
import {Device} from "../../../model/device";

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RecordFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Record) {}

  ngOnInit(): void {
    this.form = new FormGroup({taken: new FormControl(this.data == null ? '' : this.toDateString(this.data.taken)),
    employee: new FormControl(this.data == null ? '' : this.data.employee.id),
    device: new FormControl(this.data == null ? '' : this.data.device.id),
    returned: new FormControl(this.data == null ? '' : this.toDateString(this.data.returned))});
  }

  employees: Employee[] = [{id:1, name: "Петя", position:null, devices:null},
    {id:2, name: "Маша", position:null, devices:null}]

  devices: Device[] = [{id:1, name:'Шумомер', verificationExpire:null, serialNumber: '123', taken:null},
    {id:2, name:'Линейка', verificationExpire:null, serialNumber: '123', taken:null}]

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {

  }
  private toDateString(date: Date): string {
    return (date.getFullYear().toString() + '-'
      + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
      + ("0" + (date.getDate())).slice(-2))
      + 'T' + date.toTimeString().slice(0,5);
  }

}
