import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Record} from "../../../../model/record";
import {Employee} from "../../../../model/employee";
import {Device} from "../../../../model/device";
import {Position} from "../../../../model/position";
import {RecordFormComponent} from "../../../journal/record-form/record-form.component";

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.css']
})
export class PositionFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PositionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Position) {}

  ngOnInit(): void {
    this.form = new FormGroup({name: new FormControl(this.data == null ? '' : this.data.name,
        Validators.required)})
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getPosition(): Position {
    return {id: this.data == null ? 0 : this.data.id,
            name: this.form.controls['name'].value}
  }

  submit() {
    console.log(JSON.stringify(this.getPosition()))
  }



}
