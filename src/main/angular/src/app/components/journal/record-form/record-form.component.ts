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
    this.form = new FormGroup({taken: new FormControl(this.data == null || this.data.taken == null? '' : RecordFormComponent.toDateString(this.data.taken)),
    employee: new FormControl(this.data == null || this.data.employee == null ? '' : this.data.employee),
    device: new FormControl(this.data == null || this.data.device == null ? '' : this.data.device),
    returned: new FormControl(this.data == null || this.data.returned == null ? '' : RecordFormComponent.toDateString(this.data.returned))});
  }

  employees: Employee[] = [{id:1, name: "Петя", position:null},
    {id:2, name: "Маша", position: null}]

  devices: Device[] = [{id:1, name:'Шумомер', verificationExpire:null, serialNumber: '123', taken:null},
    {id:2, name:'Линейка', verificationExpire:null, serialNumber: '123', taken:null}]

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log(JSON.stringify(this.getRecord()));
  }
  private static toDateString(date: Date): string {
    return (date.getFullYear().toString() + '-'
      + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
      + ("0" + (date.getDate())).slice(-2))
      + 'T' + date.toTimeString().slice(0,5);
  }

  public objectComparisonFunction = function(option, value) : boolean {
    return option.id == value.id
  }

  private getRecord(): Record {
    return {id: this.data == null ? 0 : this.data.id,
      taken: this.form.controls['taken'].value,
      device: this.form.controls['device'].value,
      employee: this.form.controls['employee'].value,
      returned: this.form.controls['returned'].value}
  }

}
