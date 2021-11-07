import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import {Employee} from "../../../model/employee";
import {Record} from "../../../model/record";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Device} from "../../../model/device";
import {DeviceService} from "../../../services/device.service";
import {EmployeeService} from "../../../services/employee.service";
import {RecordService} from "../../../services/record.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorComponent} from "../../error/error.component";

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit{

  form: FormGroup;
  deleteDisabled: boolean;
  employees: Employee[];
  devices: Device[];
  submitDisabled: boolean;

  constructor(
    public dialogRef: MatDialogRef<RecordFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Record,
    private deviceService: DeviceService,
    private employeeService: EmployeeService,
    private recordService: RecordService,
    private dialog: MatDialog) {}



  ngOnInit(): void {
    this.form = new FormGroup({taken: new FormControl(this.data == null || this.data.taken == null? '' : RecordFormComponent.toDateString(this.data.taken),
        Validators.required),
    employee: new FormControl(this.data == null || this.data.employee == null ? '' : this.data?.employee,
      Validators.required),
    device: new FormControl(this.data == null || this.data.device == null ? '' : this.data.device,
      Validators.required),
    returned: new FormControl(this.data == null || this.data.returned == null ? '' : RecordFormComponent.toDateString(this.data.returned))});
    this.employeeService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    })
    this.deviceService.getAllDevices().subscribe(devices => {
      this.devices = devices;
    })
    this.submitDisabled = false;
    this.deleteDisabled = false;

  }

  isSubmitDisabled() {
    return this.form.invalid || this.submitDisabled;
  }

  createNewRecord(record: Record) {
    this.submitDisabled = true;
    this.recordService.createRecord(record).subscribe(record => {
      this.dialogRef.close(record);
    }, error => {
       this.errorHandler(error);
       this.submitDisabled = false;
    })
  }

  updateRecord(record: Record) {
    this.submitDisabled = true;
    this.recordService.updateRecord(record).subscribe(() => {
      this.dialogRef.close({status: 'update', record: record});
    }, error => {
      this.errorHandler(error);
      this.submitDisabled = false;
    })
  }

  removeRecord() {
    this.deleteDisabled = true;
    this.recordService.removeRecord(this.getRecord()).subscribe(() => {
      this.dialogRef.close({status: 'remove', record: this.getRecord()});
    }, error => {
      this.errorHandler(error);
      this.deleteDisabled = false;
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log("========FROM FORM SUBMIT METHOD========")
    console.log(this.form.controls['device'].value)
    if (this.data === null) {
      this.createNewRecord(this.getRecord())
    } else {
      this.updateRecord(this.getRecord())
    }
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
    let device = this.form.controls['device'].value;
    device['verificationExpire'] = device['verificationExpire'] === 0 ? null : new Date(device['verificationExpire'])
    return {
      id: this.data === null ? 0 : this.data.id,
      taken: new Date(this.form.controls['taken'].value),
      device: device,
      employee: this.form.controls['employee'].value,
      returned: this.form.controls['returned'].value === "" ? null : new Date(this.form.controls['returned'].value)
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
