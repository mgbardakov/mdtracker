(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Dhs":
/*!*************************************************************************!*\
  !*** ./src/app/components/journal/record-form/record-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordFormComponent", function() { return RecordFormComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/error.component */ "7AdY");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/device.service */ "BtSu");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/employee.service */ "pjuo");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/record.service */ "oq9T");
/* harmony import */ var _model_record__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../model/record */ "LwJF");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mat-select-filter */ "Y70v");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function RecordFormComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function RecordFormComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const employee_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", employee_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", employee_r7.name, " ");
} }
function RecordFormComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function RecordFormComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const device_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", device_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate2"](" ", device_r8.name, " ", device_r8.serialNumber, " ");
} }
function RecordFormComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0438\u0431\u043E\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function RecordFormComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function RecordFormComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RecordFormComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r9.removeRecord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx_r6.deleteDisabled);
} }
class RecordFormComponent {
    constructor(dialogRef, data, deviceService, employeeService, recordService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.deviceService = deviceService;
        this.employeeService = employeeService;
        this.recordService = recordService;
        this.dialog = dialog;
        this.objectComparisonFunction = function (option, value) {
            return option.id == value.id;
        };
    }
    ngOnInit() {
        var _a;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ taken: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data == null || this.data.taken == null ? '' : RecordFormComponent.toDateString(this.data.taken), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required), employee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data == null || this.data.employee == null ? '' : (_a = this.data) === null || _a === void 0 ? void 0 : _a.employee, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required), device: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data == null || this.data.device == null ? '' : this.data.device, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            returned: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data == null || this.data.returned == null ? '' : RecordFormComponent.toDateString(this.data.returned)) }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.employeeService.getAllEmployees().subscribe(employees => {
            this.employees = employees;
            this.filteredEmployees = employees;
        });
        this.deviceService.getAllDevices().subscribe(devices => {
            this.devices = devices;
            this.filteredDevices = devices;
        });
        this.submitDisabled = false;
        this.deleteDisabled = false;
    }
    isSubmitDisabled() {
        return this.form.invalid || this.submitDisabled;
    }
    createNewRecord(record) {
        this.submitDisabled = true;
        this.recordService.createRecord(record).subscribe(record => {
            this.dialogRef.close({ status: 'created', record: record });
        }, error => {
            this.errorHandler(error);
            this.submitDisabled = false;
        });
    }
    updateRecord(record) {
        this.submitDisabled = true;
        this.recordService.updateRecord(record).subscribe(() => {
            this.dialogRef.close({ status: 'update', record: record });
        }, error => {
            this.errorHandler(error);
            this.submitDisabled = false;
        });
    }
    removeRecord() {
        this.confirm("?????????????? ?????????????????? ?????????????").subscribe(flag => {
            if (flag) {
                this.deleteDisabled = true;
                this.recordService.removeRecord(this.getRecord()).subscribe(() => {
                    this.dialogRef.close({ status: 'remove', record: this.getRecord() });
                }, error => {
                    this.errorHandler(error);
                    this.deleteDisabled = false;
                });
            }
        });
    }
    onNoClick() {
        this.dialogRef.close({ status: 'canceled' });
    }
    submit() {
        console.log("========FROM FORM SUBMIT METHOD========");
        console.log(this.form.controls['device'].value);
        if (this.data === null) {
            this.createNewRecord(this.getRecord());
        }
        else {
            this.updateRecord(this.getRecord());
        }
    }
    static toDateString(date) {
        return (date.getFullYear().toString() + '-'
            + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
            + ("0" + (date.getDate())).slice(-2))
            + 'T' + date.toTimeString().slice(0, 5);
    }
    getRecord() {
        let device = this.form.controls['device'].value;
        device['verificationExpire'] = device['verificationExpire'] === 0 ? null : new Date(device['verificationExpire']);
        return {
            id: this.data === null ? 0 : this.data.id,
            taken: new Date(this.form.controls['taken'].value),
            device: device,
            employee: this.form.controls['employee'].value,
            returned: this.form.controls['returned'].value === "" ? null : new Date(this.form.controls['returned'].value)
        };
    }
    confirm(message) {
        return this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            data: message,
            disableClose: true
        }).afterClosed();
    }
    errorHandler(error) {
        switch (error.status) {
            case 401: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "???????????????????????? ????????" }
                });
                break;
            }
            default: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "?????????????????????? ????????????" }
                });
                break;
            }
        }
    }
}
RecordFormComponent.??fac = function RecordFormComponent_Factory(t) { return new (t || RecordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_device_service__WEBPACK_IMPORTED_MODULE_5__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_record_service__WEBPACK_IMPORTED_MODULE_7__["RecordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
RecordFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: RecordFormComponent, selectors: [["app-record-form"]], decls: 38, vars: 20, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["mat-dialog-content", "", "fxLayout", "row", "fxLayoutGap", "5%", "fxLayout.xs", "column", "fxLayoutAlign", "space-around"], ["floatLabel", "auto", "appearance", "outline"], ["matInput", "", "type", "datetime-local", "autocomplete", "off", "formControlName", "taken", "required", ""], [4, "ngIf"], ["appearance", "fill", 2, "width", "100%"], ["formControlName", "employee", "required", "", 3, "compareWith"], [3, "placeholder", "noResultsMessage", "array", "displayMember", "filteredReturn"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "device", "required", "", 3, "compareWith"], ["matInput", "", "type", "datetime-local", "autocomplete", "off", "formControlName", "returned", "required", ""], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", "color", "warn", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "disabled"], [3, "value"], ["mat-button", "", "type", "button", "color", "warn", 3, "disabled", "click"]], template: function RecordFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngSubmit", function RecordFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](9, RecordFormComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13, "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "mat-select-filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("filteredReturn", function RecordFormComponent_Template_mat_select_filter_filteredReturn_15_listener($event) { return ctx.filteredEmployees = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](16, RecordFormComponent_mat_option_16_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](17, RecordFormComponent_mat_error_17_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, "\u041F\u0440\u0438\u0431\u043E\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "mat-select-filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("filteredReturn", function RecordFormComponent_Template_mat_select_filter_filteredReturn_23_listener($event) { return ctx.filteredDevices = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](24, RecordFormComponent_mat_option_24_Template, 2, 3, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](25, RecordFormComponent_mat_error_25_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](29, "\u0414\u0430\u0442\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](31, RecordFormComponent_mat_error_31_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](33, RecordFormComponent_button_33_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RecordFormComponent_Template_button_click_34_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35, "\u041E\u0442\u043C\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.data == null ? "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.taken.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("compareWith", ctx.objectComparisonFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("placeholder", "\u041F\u043E\u0438\u0441\u043A..")("noResultsMessage", "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432")("array", ctx.employees)("displayMember", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.filteredEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.employee.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("compareWith", ctx.objectComparisonFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("placeholder", "\u041F\u043E\u0438\u0441\u043A..")("noResultsMessage", "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432")("array", ctx.devices)("displayMember", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.filteredDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.device.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.returned.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.data !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx.isSubmitDisabled());
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], mat_select_filter__WEBPACK_IMPORTED_MODULE_14__["MatSelectFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvcmQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\mdtracker\src\main\angular\src\main.ts */"zUnb");


/***/ }),

/***/ "1U8w":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-crud/user-crud.component */ "X7bZ");
/* harmony import */ var _position_crud_position_crud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position-crud/position-crud.component */ "XsiD");
/* harmony import */ var _device_crud_device_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-crud/device-crud.component */ "6ouR");






function SettingsComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-device-crud");
} }
class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.??fac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 9, vars: 0, consts: [["label", "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "5%", "fxLayout.xs", "column", 2, "padding-bottom", "30px"], ["label", "\u041F\u0440\u0438\u0431\u043E\u0440\u044B"], ["matTabContent", ""]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-employee-crud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-position-crud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, SettingsComponent_ng_template_8_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_3__["UserCrudComponent"], _position_crud_position_crud_component__WEBPACK_IMPORTED_MODULE_4__["PositionCrudComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabContent"], _device_crud_device_crud_component__WEBPACK_IMPORTED_MODULE_5__["DeviceCrudComponent"]], styles: ["h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "2eHK":
/*!*********************************************************************!*\
  !*** ./src/app/services/security/interceptors/token.interceptor.ts ***!
  \*********************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "zVt+");




class TokenInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        if (this.auth.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });
        }
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            if (error.status === 401) {
                this.auth.logout();
                return [];
            }
            else {
                throw new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"](error);
            }
        }));
    }
}
TokenInterceptor.??fac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
TokenInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.??fac });


/***/ }),

/***/ "6ouR":
/*!**************************************************************************!*\
  !*** ./src/app/components/settings/device-crud/device-crud.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeviceCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceCrudComponent", function() { return DeviceCrudComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _device_form_device_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-form/device-form.component */ "Ddng");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _device_qr_printer_device_qr_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-qr-printer/device-qr-table.component */ "uXAJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/device.service */ "BtSu");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mat-select-filter */ "Y70v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















function DeviceCrudComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "\u2116");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function DeviceCrudComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function DeviceCrudComponent_td_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r14); const device_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r13.updateOrDeleteDevice(device_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const j_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", j_r12 + 1, " ");
} }
function DeviceCrudComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function DeviceCrudComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const device_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", device_r15.name, " ");
} }
function DeviceCrudComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0421\u0435\u0440\u0438\u0439\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function DeviceCrudComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const device_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", device_r16.serialNumber, " ");
} }
function DeviceCrudComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u0430 \u043F\u043E\u0432\u0435\u0440\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function DeviceCrudComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const device_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind2"](2, 1, device_r17.verificationExpire, "dd/MM/yyyy"), " ");
} }
function DeviceCrudComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 29);
} }
function DeviceCrudComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 30);
} }
function DeviceCrudComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const device_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", device_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate2"](" ", device_r19.name, " \u2116", device_r19.serialNumber, " ");
} }
const _c0 = function () { return [5, 10, 20]; };
class DeviceCrudComponent {
    constructor(dialog, deviceService) {
        this.dialog = dialog;
        this.deviceService = deviceService;
        this.displayedColumns = ['index', 'name', 'serialNumber', 'verificationExpire'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({ devicesToPrint: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]() });
        this.deviceService.getAllDevices().subscribe(devices => {
            this.devices = devices;
            this.filteredDevices = devices;
            this.dataSource.data = this.devices;
        });
    }
    openDialog(device) {
        return this.dialog.open(_device_form_device_form_component__WEBPACK_IMPORTED_MODULE_3__["DeviceFormComponent"], {
            width: '700px',
            data: device,
            disableClose: true
        });
    }
    createNewDevice() {
        this.openDialog(null).afterClosed().subscribe(data => {
            switch (data.status) {
                case "created": {
                    this.devices.push(data.device);
                    this.dataSource.data = this.devices;
                    this.matTable.renderRows();
                    break;
                }
                case "canceled": {
                    break;
                }
            }
        });
    }
    updateOrDeleteDevice(device) {
        this.openDialog(device).afterClosed().subscribe(data => {
            let index = this.devices.findIndex(x => x.id === device.id);
            console.log(data);
            switch (data.status) {
                case 'updated': {
                    console.log('updated');
                    this.devices[index] = data.device;
                    break;
                }
                case 'removed': {
                    console.log('removed');
                    this.devices.splice(index, 1);
                    break;
                }
                case 'canceled': {
                    console.log('canceled');
                    break;
                }
            }
            this.dataSource.data = this.devices;
            this.matTable.renderRows();
        });
    }
    submit() {
        let devicePrintArray = this.form.controls.devicesToPrint.value;
        if (devicePrintArray !== null) {
            this.printableDevices = [];
            devicePrintArray.forEach(x => this.printableDevices.push(x));
        }
        else {
            this.printableDevices = this.devices;
        }
        // console.log(JSON.stringify(this.printableDevices))
        setTimeout(this.table.generatePDF, 1000);
    }
}
DeviceCrudComponent.??fac = function DeviceCrudComponent_Factory(t) { return new (t || DeviceCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_device_service__WEBPACK_IMPORTED_MODULE_8__["DeviceService"])); };
DeviceCrudComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: DeviceCrudComponent, selectors: [["app-device-crud"]], viewQuery: function DeviceCrudComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_device_qr_printer_device_qr_table_component__WEBPACK_IMPORTED_MODULE_5__["DeviceQrTableComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.matTable = _t.first);
    } }, decls: 37, vars: 12, consts: [["fxLayout", "column", 1, "mat-elevation-z8", "container", 2, "margin-bottom", "30px"], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "serialNumber"], ["matColumnDef", "verificationExpire"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "text-align", "center"], ["mat-mini-fab", "", "color", "primary", 2, "margin-top", "20px", 3, "click"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start", "fxLayoutGap", "5%"], ["fxFlex", "30%"], ["appearance", "fill", 2, "width", "100%"], ["formControlName", "devicesToPrint", "multiple", ""], [3, "placeholder", "noResultsMessage", "array", "displayMember", "filteredReturn"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 2, "margin-top", "30px"], [2, "display", "none", 3, "devices"], ["mat-header-cell", ""], [2, "margin-left", "20px"], ["mat-cell", ""], ["mat-mini-fab", "", 2, "margin-right", "1rem", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""], [3, "value"]], template: function DeviceCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041F\u0440\u0438\u0431\u043E\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, DeviceCrudComponent_th_6_Template, 3, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](7, DeviceCrudComponent_td_7_Template, 5, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, DeviceCrudComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](10, DeviceCrudComponent_td_10_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](12, DeviceCrudComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](13, DeviceCrudComponent_td_13_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](15, DeviceCrudComponent_th_15_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](16, DeviceCrudComponent_td_16_Template, 3, 4, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](17, DeviceCrudComponent_tr_17_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](18, DeviceCrudComponent_tr_18_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function DeviceCrudComponent_Template_button_click_20_listener() { return ctx.createNewDevice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](22, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](23, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("ngSubmit", function DeviceCrudComponent_Template_form_ngSubmit_24_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](28, "\u041F\u0435\u0447\u0430\u0442\u044C QR-\u043A\u043E\u0434\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](30, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](31, "mat-select-filter", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("filteredReturn", function DeviceCrudComponent_Template_mat_select_filter_filteredReturn_31_listener($event) { return ctx.filteredDevices = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](32, DeviceCrudComponent_mat_option_32_Template, 2, 3, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](34, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](35, "\u0420\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](36, "app-device-qr-table", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("placeholder", "\u041F\u043E\u0438\u0441\u043A..")("noResultsMessage", "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432")("array", ctx.devices)("displayMember", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.filteredDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("devices", ctx.printableDevices);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], mat_select_filter__WEBPACK_IMPORTED_MODULE_14__["MatSelectFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _device_qr_printer_device_qr_table_component__WEBPACK_IMPORTED_MODULE_5__["DeviceQrTableComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], styles: ["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  max-width: 200px;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%] {\r\n  padding: 8px 8px 8px 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmljZS1jcnVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiZGV2aWNlLWNydWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkICwgdGgge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5tYXQtcm93IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "6vPW":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/register-device/selector-add-device/selector-add-device.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SelectorAddDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorAddDeviceComponent", function() { return SelectorAddDeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mat-select-filter */ "Y70v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function SelectorAddDeviceComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const device_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", device_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", device_r1.name, " \u2116 ", device_r1.serialNumber, "");
} }
class SelectorAddDeviceComponent {
    constructor() {
        this.deviceEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.devices = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.subject.subscribe(devices => {
            console.log(devices);
            this.deviceList = devices;
            this.filteredDevices = devices;
        });
    }
    addNewDevice() {
        if (this.devices.value !== null) {
            this.deviceEvent.emit(this.devices.value);
        }
    }
}
SelectorAddDeviceComponent.??fac = function SelectorAddDeviceComponent_Factory(t) { return new (t || SelectorAddDeviceComponent)(); };
SelectorAddDeviceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SelectorAddDeviceComponent, selectors: [["app-selector-add-device"]], inputs: { subject: "subject" }, outputs: { deviceEvent: "deviceEvent" }, decls: 13, vars: 6, consts: [["appearance", "fill"], ["multiple", "", 3, "formControl"], [3, "placeholder", "noResultsMessage", "array", "displayMember", "filteredReturn"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "button", 3, "click"], [3, "value"]], template: function SelectorAddDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u041F\u0440\u0438\u0431\u043E\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-select-filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("filteredReturn", function SelectorAddDeviceComponent_Template_mat_select_filter_filteredReturn_7_listener($event) { return ctx.filteredDevices = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, SelectorAddDeviceComponent_mat_option_8_Template, 2, 3, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SelectorAddDeviceComponent_Template_button_click_11_listener() { return ctx.addNewDevice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placeholder", "\u041F\u043E\u0438\u0441\u043A..")("noResultsMessage", "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432")("array", ctx.deviceList)("displayMember", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.filteredDevices);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], mat_select_filter__WEBPACK_IMPORTED_MODULE_5__["MatSelectFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [".example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdG9yLWFkZC1kZXZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNlbGVjdG9yLWFkZC1kZXZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "7AdY":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ErrorComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.message = this.data.message;
    }
}
ErrorComponent.??fac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ErrorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 7, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\u041E\u0448\u0438\u0431\u043A\u0430!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.message, " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "9c4+":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent, ROLE_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE_NAMES", function() { return ROLE_NAMES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/security/auth.service */ "zVt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "np0s");





function AppComponent_app_toolbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-toolbar");
} }
class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'angular';
    }
    ngOnInit() {
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AppComponent_app_toolbar_0_Template, 1, 0, "app-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authService.isAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
const ROLE_NAMES = new Map();
ROLE_NAMES.set('ROLE_ADMIN', '??????????????????????????');
ROLE_NAMES.set('ROLE_USER', '????????????????????????');


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bczr":
/*!******************************************!*\
  !*** ./src/app/components/app.module.ts ***!
  \******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "9c4+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "W3Zi");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "a66F");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "np0s");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "BuFo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_device_register_device_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register-device/register-device.component */ "v4Rd");
/* harmony import */ var _register_device_selector_add_device_selector_add_device_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-device/selector-add-device/selector-add-device.component */ "6vPW");
/* harmony import */ var _register_device_qr_add_device_qr_add_device_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register-device/qr-add-device/qr-add-device.component */ "rJCx");
/* harmony import */ var _journal_journal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./journal/journal.component */ "wT7E");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./overview/overview.component */ "N+5l");
/* harmony import */ var _settings_user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/user-crud/user-crud.component */ "X7bZ");
/* harmony import */ var _settings_position_crud_position_crud_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/position-crud/position-crud.component */ "XsiD");
/* harmony import */ var _settings_device_crud_device_crud_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/device-crud/device-crud.component */ "6ouR");
/* harmony import */ var _settings_device_crud_device_qr_printer_device_qr_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./settings/device-crud/device-qr-printer/device-qr-table.component */ "uXAJ");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./settings/settings.component */ "1U8w");
/* harmony import */ var _journal_record_form_record_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./journal/record-form/record-form.component */ "/Dhs");
/* harmony import */ var _settings_user_crud_user_add_form_user_add_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./settings/user-crud/user-add-form/user-add-form.component */ "IUec");
/* harmony import */ var _settings_user_crud_user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./settings/user-crud/user-edit-form/user-edit-form.component */ "rfrb");
/* harmony import */ var _settings_position_crud_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settings/position-crud/position-form/position-form.component */ "ofsB");
/* harmony import */ var _settings_device_crud_device_form_device_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings/device-crud/device-form/device-form.component */ "Ddng");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular2-qrcode */ "vCDz");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @zxing/ngx-scanner */ "7Ub2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../services/security/auth-guard.service */ "PSXT");
/* harmony import */ var _services_security_role_guard_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../services/security/role-guard.service */ "sY6C");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../services/record.service */ "oq9T");
/* harmony import */ var _services_security_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../services/security/interceptors/token.interceptor */ "2eHK");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../services/employee.service */ "pjuo");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../services/device.service */ "BtSu");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./error/error.component */ "7AdY");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../services/position.service */ "g9kB");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_register_device_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../services/register-device.service */ "nIUp");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/core */ "fXoL");












































const appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], canActivate: [_services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_30__["AuthGuardService"]] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], canActivate: [_services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_30__["AuthGuardService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register-devices', component: _register_device_register_device_component__WEBPACK_IMPORTED_MODULE_9__["RegisterDeviceComponent"], canActivate: [_services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_30__["AuthGuardService"]] },
    { path: 'journal', component: _journal_journal_component__WEBPACK_IMPORTED_MODULE_12__["JournalComponent"], canActivate: [_services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_30__["AuthGuardService"]] },
    { path: 'overview', component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_15__["OverviewComponent"], canActivate: [_services_security_role_guard_service__WEBPACK_IMPORTED_MODULE_31__["RoleGuardService"]],
        data: { expectedRole: 'ROLE_ADMIN' } },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_20__["SettingsComponent"], canActivate: [_services_security_role_guard_service__WEBPACK_IMPORTED_MODULE_31__["RoleGuardService"]],
        data: { expectedRole: 'ROLE_ADMIN' } }
];
class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_42__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_42__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_29__["CookieService"],
        _services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_30__["AuthGuardService"],
        _services_security_role_guard_service__WEBPACK_IMPORTED_MODULE_31__["RoleGuardService"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_32__["JwtHelperService"],
        _services_record_service__WEBPACK_IMPORTED_MODULE_33__["RecordService"],
        _services_employee_service__WEBPACK_IMPORTED_MODULE_35__["EmployeeService"],
        _services_device_service__WEBPACK_IMPORTED_MODULE_36__["DeviceService"],
        _services_position_service__WEBPACK_IMPORTED_MODULE_38__["PositionService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_39__["UserService"],
        _services_register_device_service__WEBPACK_IMPORTED_MODULE_40__["RegisterDeviceService"],
        { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_32__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_32__["JWT_OPTIONS"] },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HTTP_INTERCEPTORS"], useClass: _services_security_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_34__["TokenInterceptor"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexModule"],
            angular2_qrcode__WEBPACK_IMPORTED_MODULE_26__["QRCodeModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_27__["ZXingScannerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_32__["JwtModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_42__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _register_device_register_device_component__WEBPACK_IMPORTED_MODULE_9__["RegisterDeviceComponent"],
        _register_device_selector_add_device_selector_add_device_component__WEBPACK_IMPORTED_MODULE_10__["SelectorAddDeviceComponent"],
        _register_device_qr_add_device_qr_add_device_component__WEBPACK_IMPORTED_MODULE_11__["QrAddDeviceComponent"],
        _journal_journal_component__WEBPACK_IMPORTED_MODULE_12__["JournalComponent"],
        _overview_overview_component__WEBPACK_IMPORTED_MODULE_15__["OverviewComponent"],
        _settings_user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_16__["UserCrudComponent"],
        _settings_position_crud_position_crud_component__WEBPACK_IMPORTED_MODULE_17__["PositionCrudComponent"],
        _settings_device_crud_device_crud_component__WEBPACK_IMPORTED_MODULE_18__["DeviceCrudComponent"],
        _settings_device_crud_device_qr_printer_device_qr_table_component__WEBPACK_IMPORTED_MODULE_19__["DeviceQrTableComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_20__["SettingsComponent"],
        _journal_record_form_record_form_component__WEBPACK_IMPORTED_MODULE_21__["RecordFormComponent"],
        _settings_user_crud_user_add_form_user_add_form_component__WEBPACK_IMPORTED_MODULE_22__["UserAddFormComponent"],
        _settings_user_crud_user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_23__["UserEditFormComponent"],
        _settings_position_crud_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_24__["PositionFormComponent"],
        _settings_device_crud_device_form_device_form_component__WEBPACK_IMPORTED_MODULE_25__["DeviceFormComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_37__["ErrorComponent"],
        _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_41__["ConfirmDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexModule"],
        angular2_qrcode__WEBPACK_IMPORTED_MODULE_26__["QRCodeModule"],
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_27__["ZXingScannerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_32__["JwtModule"]] }); })();


/***/ }),

/***/ "BtSu":
/*!********************************************!*\
  !*** ./src/app/services/device.service.ts ***!
  \********************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _model_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/device */ "dpNM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DeviceService {
    constructor(http) {
        this.http = http;
    }
    getAllDevices() {
        return this.http.get('/api/v1/devices/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(deviceJSONs => {
            let devices = [];
            deviceJSONs.forEach(deviceJSON => {
                devices.push(this.mapJSONToDevice(deviceJSON));
            });
            return devices;
        }));
    }
    createDevice(device) {
        let deviceDTO = this.mapDeviceToJSON(device);
        return this.http.post('/api/v1/devices/create', deviceDTO, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(deviceJSON => this.mapJSONToDevice(deviceJSON)));
    }
    updateDevice(device) {
        let deviceDTO = this.mapDeviceToJSON(device);
        return this.http.put('/api/v1/devices/update', deviceDTO, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => {
            return device;
        }));
    }
    removeDevice(device) {
        let deviceDTO = this.mapDeviceToJSON(device);
        return this.http.post('/api/v1/devices/delete', deviceDTO, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => {
            return device;
        }));
    }
    mapJSONToDevice(deviceJSON) {
        deviceJSON['verificationExpire'] = deviceJSON['verificationExpire'] === 0 ? null : new Date(deviceJSON['verificationExpire']);
        let device = new _model_device__WEBPACK_IMPORTED_MODULE_1__["Device"]();
        Object.assign(device, deviceJSON);
        return device;
    }
    mapDeviceToJSON(device) {
        let deviceDTO = {};
        Object.assign(deviceDTO, device);
        deviceDTO['verificationExpire'] = device.verificationExpire === null ? null : device.verificationExpire.getTime();
        return deviceDTO;
    }
}
DeviceService.??fac = function DeviceService_Factory(t) { return new (t || DeviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DeviceService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: DeviceService, factory: DeviceService.??fac, providedIn: 'root' });


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_register_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/register-device.service */ "nIUp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function HomeComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " \u2116 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function HomeComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const index_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", index_r11 + 1, " ");
} }
function HomeComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function HomeComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const record_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", record_r12.device.name, " ");
} }
function HomeComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " \u0421\u0435\u0440\u0438\u0439\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function HomeComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const record_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", record_r13.device.serialNumber, "");
} }
function HomeComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "th", 12);
} }
function HomeComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeComponent_td_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r16); const record_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r15.closeRecord(record_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function HomeComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 15);
} }
function HomeComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 16);
} }
class HomeComponent {
    constructor(router, registerDeviceService, dialog) {
        this.router = router;
        this.registerDeviceService = registerDeviceService;
        this.dialog = dialog;
        this.records = [];
        this.displayedColumns = ['id', 'name', 'serialNumber', 'deleteAction'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.registerDeviceService.getAllActiveRecords().subscribe(records => {
            this.records = records;
            this.dataSource.data = this.records;
        });
    }
    closeRecord(record) {
        this.confirm("?????????? ????????????: \"" + record.device.name + "\"?")
            .subscribe(flag => {
            if (flag) {
                this.registerDeviceService.closeRecord(record).subscribe(() => {
                    let index = this.records.indexOf(record);
                    this.records.splice(index, 1);
                    this.dataSource.data = this.records;
                    this.table.renderRows();
                });
            }
        });
    }
    closeAllRecords() {
        this.confirm("?????????? ?????? ???????????????")
            .subscribe(flag => {
            if (flag) {
                this.registerDeviceService.closeAllRecords().subscribe(() => {
                    this.records = [];
                    this.dataSource.data = this.records;
                    this.table.renderRows();
                });
            }
        });
    }
    confirm(message) {
        return this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
            data: message,
            disableClose: true
        }).afterClosed();
    }
    goToDevicePicker() {
        this.router.navigate(['register-devices']);
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_register_device_service__WEBPACK_IMPORTED_MODULE_4__["RegisterDeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 22, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", "container", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "serialNumber"], ["matColumnDef", "deleteAction"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayout.xs", "column", "fxLayoutGap", "1rem", 1, "container"], ["mat-raised-button", "", "color", "primary", 2, "float", "left", "width", "100%", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", "width", "100%", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-mini-fab", "", "color", "primary", 2, "float", "right", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0437\u044F\u0442\u044B\u0445 \u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, HomeComponent_th_4_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, HomeComponent_td_5_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, HomeComponent_th_7_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, HomeComponent_td_8_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, HomeComponent_th_10_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, HomeComponent_td_11_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](12, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, HomeComponent_th_13_Template, 1, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, HomeComponent_td_14_Template, 4, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, HomeComponent_tr_15_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, HomeComponent_tr_16_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeComponent_Template_button_click_18_listener() { return ctx.closeAllRecords(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "\u0421\u0434\u0430\u0442\u044C \u0432\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeComponent_Template_button_click_20_listener() { return ctx.goToDevicePicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "\u0412\u0437\u044F\u0442\u044C \u043F\u0440\u0438\u0431\u043E\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.records.length === 0);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  max-width: 200px;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%] {\r\n  padding: 8px 8px 8px 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding-top: 2rem;\r\n  width: 70%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  alignment: center;\r\n  }\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQjs7QUFDRjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQgLCB0aCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLm1hdC1yb3cge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBhbGlnbm1lbnQ6IGNlbnRlcjtcclxuICB9XHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "CPJB":
/*!***********************************************************************!*\
  !*** ./src/app/components/confirm-dialog/confirm-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.message = this.data;
    }
    cancel() {
        this.dialogRef.close(false);
    }
    confirm() {
        this.dialogRef.close(true);
    }
}
ConfirmDialogComponent.??fac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ConfirmDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 9, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_5_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\u041E\u0442\u043C\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_7_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.message, "\n");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Ddng":
/*!**************************************************************************************!*\
  !*** ./src/app/components/settings/device-crud/device-form/device-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DeviceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceFormComponent", function() { return DeviceFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../error/error.component */ "7AdY");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/device.service */ "BtSu");
/* harmony import */ var _model_device__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../model/device */ "dpNM");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function DeviceFormComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function DeviceFormComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0435\u0440\u0438\u0439\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function DeviceFormComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u043E\u0432\u0435\u0440\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function DeviceFormComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function DeviceFormComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r4.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx_r3.deleteDisabled);
} }
class DeviceFormComponent {
    constructor(dialogRef, data, deviceService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.deviceService = deviceService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data == null ? '' : this.data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            serialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data == null ? '' : this.data.serialNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            verificationExpire: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data == null ? '' : DeviceFormComponent.toDateString(this.data.verificationExpire), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.submitDisabled = false;
        this.deleteDisabled = false;
    }
    onNoClick() {
        this.dialogRef.close({ status: 'canceled' });
    }
    static toDateString(date) {
        return (date.getFullYear().toString() + '-'
            + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
            + ("0" + (date.getDate())).slice(-2));
    }
    getDevice() {
        let verificationExpire = this.form.controls['verificationExpire'].value;
        verificationExpire = verificationExpire === 0 ? null : new Date(verificationExpire);
        return { id: this.data == null ? 0 : this.data.id,
            name: this.form.controls['name'].value,
            serialNumber: this.form.controls['serialNumber'].value,
            taken: this.data == null ? false : this.data.taken,
            verificationExpire: verificationExpire };
    }
    createDevice() {
        this.submitDisabled = true;
        this.deviceService.createDevice(this.getDevice()).subscribe(device => {
            this.dialogRef.close({ status: 'created', device: device });
        }, error => {
            this.errorHandler(error);
            this.submitDisabled = false;
        });
    }
    updateDevice() {
        this.submitDisabled = true;
        this.deviceService.updateDevice(this.getDevice()).subscribe(() => {
            this.dialogRef.close({ status: 'updated', device: this.getDevice() });
        }, error => {
            this.errorHandler(error);
            this.submitDisabled = false;
        });
    }
    submit() {
        if (this.data === null) {
            this.createDevice();
        }
        else {
            this.updateDevice();
        }
    }
    remove() {
        this.confirm("?????????????? ?????????????????? ?????????????").subscribe(flag => {
            if (flag) {
                this.deleteDisabled = true;
                this.deviceService.removeDevice(this.getDevice()).subscribe(() => {
                    this.dialogRef.close({ status: 'removed', device: this.getDevice() });
                }, error => {
                    this.errorHandler(error);
                    this.deleteDisabled = false;
                });
            }
        });
    }
    isSubmitDisabled() {
        return this.form.invalid || this.submitDisabled;
    }
    confirm(message) {
        return this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            data: message,
            disableClose: true
        }).afterClosed();
    }
    errorHandler(error) {
        switch (error.status) {
            case 401: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "???????????????????????? ????????" }
                });
                break;
            }
            default: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "?????????????????????? ????????????" }
                });
                break;
            }
        }
    }
}
DeviceFormComponent.??fac = function DeviceFormComponent_Factory(t) { return new (t || DeviceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_device_service__WEBPACK_IMPORTED_MODULE_5__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
DeviceFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: DeviceFormComponent, selectors: [["app-device-form"]], decls: 28, vars: 7, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["mat-dialog-content", "", "fxLayout", "row", "fxLayoutGap", "5%", "fxLayout.xs", "column", "fxLayoutAlign", "space-around"], ["fxFlex", "30%"], ["floatLabel", "auto", "appearance", "outline"], ["matInput", "", "type", "text", "autocomplete", "off", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "type", "text", "autocomplete", "off", "formControlName", "serialNumber", "required", ""], ["matInput", "", "type", "date", "autocomplete", "off", "formControlName", "verificationExpire", "required", ""], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", "color", "warn", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "disabled"], ["mat-button", "", "type", "button", "color", "warn", 3, "disabled", "click"]], template: function DeviceFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngSubmit", function DeviceFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](9, DeviceFormComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13, "\u0421\u0435\u0440\u0438\u0439\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](15, DeviceFormComponent_mat_error_15_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](19, "\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u0430 \u043F\u043E\u0432\u0435\u0440\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](21, DeviceFormComponent_mat_error_21_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](23, DeviceFormComponent_button_23_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function DeviceFormComponent_Template_button_click_24_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](25, "\u041E\u0442\u043C\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](27, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.data == null ? "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u0438\u0431\u043E\u0440" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u0431\u043E\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.serialNumber.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.verificationExpire.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.data !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx.isSubmitDisabled());
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2UtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "IUec":
/*!****************************************************************************************!*\
  !*** ./src/app/components/settings/user-crud/user-add-form/user-add-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserAddFormComponent, passwordMatchValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddFormComponent", function() { return UserAddFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatchValidator", function() { return passwordMatchValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../error/error.component */ "7AdY");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.component */ "9c4+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/user.service */ "qfBg");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/position.service */ "g9kB");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../model/user */ "kl1M");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function UserAddFormComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UserAddFormComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u041D\u0435 \u043C\u0435\u043D\u0435\u0435 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UserAddFormComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UserAddFormComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u041D\u0435 \u043C\u0435\u043D\u0435\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UserAddFormComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const authority_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", authority_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", ctx_r4.getRoleName(authority_r11.role), " ");
} }
function UserAddFormComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UserAddFormComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UserAddFormComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UserAddFormComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u041D\u0435 \u043C\u0435\u043D\u0435\u0435 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UserAddFormComponent_mat_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const position_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", position_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", position_r12.name, " ");
} }
function UserAddFormComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
class UserAddFormComponent {
    constructor(dialogRef, data, userService, positionService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.positionService = positionService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({ login: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]),
            passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            authorities: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        }, { validators: passwordMatchValidator });
        this.userService.getAllAuthorities().subscribe(authorities => {
            this.authorities = authorities;
        });
        this.positionService.getAllPositions().subscribe(positions => {
            this.positions = positions;
        });
    }
    isSubmitDisabled() {
        return this.form.invalid || this.submitDisabled;
    }
    onNoClick() {
        this.dialogRef.close({ status: 'canceled' });
    }
    getUser() {
        return { id: 0, authorities: [this.form.controls['authorities'].value],
            login: this.form.controls['login'].value,
            password: this.form.controls['password'].value,
            employee: { id: 0, name: this.form.controls['name'].value,
                position: this.form.controls['position'].value } };
    }
    submit() {
        this.submitDisabled = true;
        this.userService.createUser(this.getUser()).subscribe(user => {
            this.dialogRef.close({ status: 'created', user: user });
        }, error => {
            this.errorHandler(error);
            this.submitDisabled = false;
        });
    }
    errorHandler(error) {
        switch (error.status) {
            case 401: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "???????????????????????? ????????" }
                });
                break;
            }
            case 406: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "?????????????????? ?????????? ??????????" }
                });
                break;
            }
            default: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "?????????????????????? ????????????" }
                });
                break;
            }
        }
    }
    getRoleName(name) {
        return _app_component__WEBPACK_IMPORTED_MODULE_3__["ROLE_NAMES"].get(name);
    }
}
UserAddFormComponent.??fac = function UserAddFormComponent_Factory(t) { return new (t || UserAddFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_position_service__WEBPACK_IMPORTED_MODULE_6__["PositionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
UserAddFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: UserAddFormComponent, selectors: [["app-user-add-form"]], decls: 54, vars: 13, consts: [["mat-dialog-title", "", 2, "text-align", "center"], [3, "formGroup", "ngSubmit"], ["mat-dialog-content", "", "fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-around", "fxLayoutGap.xs", "5%", "fxLayout.xs", "column"], ["fxFlex", "30%"], ["floatLabel", "auto", "appearance", "outline"], ["matInput", "", "type", "text", "autocomplete", "off", "formControlName", "login", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "autocomplete", "off", "formControlName", "password", "required", ""], ["fxFlex", "30%", "fxFlexOrder.xs", "2"], ["appearance", "fill", 2, "width", "100%"], ["formControlName", "authorities", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "30%", "fxFlexOrder.xs", "1"], ["matInput", "", "type", "password", "autocomplete", "off", "formControlName", "passwordConfirmation"], ["matInput", "", "type", "text", "autocomplete", "off", "formControlName", "name", "required", ""], ["formControlName", "position", "required", ""], ["mat-dialog-actions", "", "fxLayoutAlign", "end", 2, "margin-bottom", "10px"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "disabled"], [3, "value"]], template: function UserAddFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngSubmit", function UserAddFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](10, UserAddFormComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](11, UserAddFormComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](17, UserAddFormComponent_mat_error_17_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](18, UserAddFormComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22, "\u0420\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](25, UserAddFormComponent_mat_option_25_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](26, UserAddFormComponent_mat_error_26_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](30, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](32, UserAddFormComponent_mat_error_32_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37, "\u0424.\u0418.\u041E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](39, UserAddFormComponent_mat_error_39_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](40, UserAddFormComponent_mat_error_40_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](43, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](45, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](46, UserAddFormComponent_mat_option_46_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](47, UserAddFormComponent_mat_error_47_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](50, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function UserAddFormComponent_Template_button_click_50_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](51, "\u041E\u0442\u043C\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](53, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.login.errors == null ? null : ctx.form.controls.login.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.login.errors == null ? null : ctx.form.controls.login.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.authorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.authorities.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.passwordConfirmation.errors == null ? null : ctx.form.controls.passwordConfirmation.errors.passwordNotMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.name.errors == null ? null : ctx.form.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.name.errors == null ? null : ctx.form.controls.name.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.position.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx.isSubmitDisabled());
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexOrderDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFkZC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
const passwordMatchValidator = (control) => {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');
    if (password && passwordConfirmation && password.value !== passwordConfirmation.value) {
        passwordConfirmation.setErrors({ passwordNotMatch: true });
    }
    else {
        passwordConfirmation.setErrors(null);
    }
    return null;
};


/***/ }),

/***/ "LFfH":
/*!***********************************!*\
  !*** ./src/app/model/position.ts ***!
  \***********************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
class Position {
}


/***/ }),

/***/ "LwJF":
/*!*********************************!*\
  !*** ./src/app/model/record.ts ***!
  \*********************************/
/*! exports provided: Record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
class Record {
}


/***/ }),

/***/ "N+5l":
/*!***********************************************************!*\
  !*** ./src/app/components/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/record.service */ "oq9T");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function OverviewComponent_div_3_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const record_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](index_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](record_r3.device.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](record_r3.device.serialNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](9, 4, record_r3.taken, "dd.MM.YY/ HH:mm"));
} }
function OverviewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u2116");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\u0421\u0435\u0440\u0438\u0439\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\u0412\u0437\u044F\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, OverviewComponent_div_3_tr_15_Template, 10, 7, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const pair_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", pair_r1.value[0].employee.name, ", ", pair_r1.value[0].employee.position.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", pair_r1.value);
} }
class OverviewComponent {
    constructor(recordService) {
        this.recordService = recordService;
        this.employeeDevices = new Map();
    }
    convertRecordsToMap(records) {
        let rslMap = new Map();
        records.forEach(record => {
            if (rslMap.has(record.employee.id)) {
                rslMap.get(record.employee.id).push(record);
            }
            else {
                rslMap.set(record.employee.id, [record]);
            }
        });
        return rslMap;
    }
    ngOnInit() {
        this.recordService.getActiveRecords().subscribe(records => {
            this.records = records;
            this.employeeDevices = this.convertRecordsToMap(records);
        });
    }
}
OverviewComponent.??fac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_record_service__WEBPACK_IMPORTED_MODULE_1__["RecordService"])); };
OverviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 5, vars: 3, consts: [["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-around", 1, "container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "table"], [2, "width", "10%"], [4, "ngFor", "ngForOf"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043E\u0431\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, OverviewComponent_div_3_Template, 16, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 1, ctx.employeeDevices));
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 1rem\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  max-width: 200px;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%] {\r\n  padding: 8px 8px 8px 8px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]\r\n{\r\n  table-layout:fixed;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td.shrink[_ngcontent-%COMP%] {\r\n  white-space: nowrap\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoib3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDFyZW1cclxufVxyXG5cclxudGQgLCB0aCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLm1hdC1jZWxsLCBtYXQtaGVhZGVyLWNlbGwge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcclxufVxyXG5cclxudGFibGVcclxue1xyXG4gIHRhYmxlLWxheW91dDpmaXhlZDtcclxufVxyXG5cclxudGFibGUgdGQuc2hyaW5rIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "PSXT":
/*!*********************************************************!*\
  !*** ./src/app/services/security/auth-guard.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "zVt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuardService.??fac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.??fac });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/security/auth.service */ "zVt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.errorMessage = "";
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({ login: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]() });
        this.authService.errorStream.subscribe(errMsg => {
            this.errorMessage = errMsg;
        });
    }
    login() {
        this.authService.authorize(this.getUser());
    }
    getUser() {
        return { id: null, login: this.form.controls.login.value,
            employee: null, password: this.form.controls.password.value,
            authorities: null
        };
    }
    ngOnDestroy() {
        //this.authService.errorStream.unsubscribe();
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 2, consts: [[1, "container"], [2, "text-align", "center"], [3, "formGroup", "ngSubmit"], [2, "color", "#ff0000", "text-align", "center"], ["floatLabel", "auto", "appearance", "outline"], ["matInput", "", "type", "text", "autocomplete", "off", "formControlName", "login"], ["matInput", "", "type", "password", "formControlName", "password"], [2, "float", "right"], ["mat-raised-button", "", "color", "primary", "type", "submit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "MDTracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\r\n  margin-top: 12%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 13rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEyJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEzcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "X7bZ":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/user-crud/user-crud.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCrudComponent", function() { return UserCrudComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _user_add_form_user_add_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-add-form/user-add-form.component */ "IUec");
/* harmony import */ var _user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-edit-form/user-edit-form.component */ "rfrb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.component */ "9c4+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function UserCrudComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "\u2116");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserCrudComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function UserCrudComponent_td_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r13); const user_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r12.openEditingDialog(user_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const j_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", j_r11 + 1, " ");
} }
function UserCrudComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0418\u043C\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserCrudComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const user_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", user_r14.employee.name, " ");
} }
function UserCrudComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserCrudComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const user_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", user_r15.employee.position.name, " ");
} }
function UserCrudComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0420\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserCrudComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const user_r16 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", ctx_r7.getRoleName(user_r16.authorities[0].role), " ");
} }
function UserCrudComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 20);
} }
function UserCrudComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 21);
} }
const _c0 = function () { return [5, 10, 20]; };
class UserCrudComponent {
    constructor(dialog, userService) {
        this.dialog = dialog;
        this.userService = userService;
        this.displayedColumns = ['index', 'name', 'position', 'role'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (user, property) => {
            switch (property) {
                case 'position': return user.employee.position.name;
                case 'role': return user.authorities[0].role;
                case 'name': return user.employee.name;
                default: return user[property];
            }
        };
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        this.userService.getAllUsers().subscribe(users => {
            this.users = users;
            this.dataSource.data = users;
        });
    }
    openAddingDialog() {
        this.dialog.open(_user_add_form_user_add_form_component__WEBPACK_IMPORTED_MODULE_3__["UserAddFormComponent"], {
            disableClose: true
        }).afterClosed().subscribe(data => {
            switch (data.status) {
                case 'created': {
                    console.log('created');
                    this.users.push(data.user);
                    this.dataSource.data = this.users;
                    this.table.renderRows();
                    break;
                }
                case 'canceled': {
                    console.log('canceled');
                    break;
                }
            }
        });
    }
    openEditingDialog(user) {
        this.dialog.open(_user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_4__["UserEditFormComponent"], {
            data: user,
            disableClose: true
        }).afterClosed().subscribe(data => {
            let index = this.users.findIndex(x => x.id === user.id);
            switch (data.status) {
                case 'updated': {
                    this.users[index] = data.user;
                    break;
                }
                case 'removed': {
                    this.users.splice(index, 1);
                    break;
                }
                case 'canceled': {
                    break;
                }
            }
            this.dataSource.data = this.users;
            this.table.renderRows();
        });
    }
    getRoleName(key) {
        return _app_component__WEBPACK_IMPORTED_MODULE_5__["ROLE_NAMES"].get(key);
    }
}
UserCrudComponent.??fac = function UserCrudComponent_Factory(t) { return new (t || UserCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
UserCrudComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: UserCrudComponent, selectors: [["app-employee-crud"]], viewQuery: function UserCrudComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 24, vars: 5, consts: [["fxLayout", "column", 1, "mat-elevation-z8", "container"], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "position"], ["matColumnDef", "role"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "text-align", "center"], ["mat-mini-fab", "", "color", "primary", 2, "margin-top", "20px", 3, "click"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], [2, "margin-left", "20px"], ["mat-cell", ""], ["mat-mini-fab", "", 2, "margin-right", "1rem", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function UserCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, UserCrudComponent_th_6_Template, 3, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](7, UserCrudComponent_td_7_Template, 5, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, UserCrudComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](10, UserCrudComponent_td_10_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](12, UserCrudComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](13, UserCrudComponent_td_13_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](15, UserCrudComponent_th_15_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](16, UserCrudComponent_td_16_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](17, UserCrudComponent_tr_17_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](18, UserCrudComponent_tr_18_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function UserCrudComponent_Template_button_click_20_listener() { return ctx.openAddingDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](22, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](23, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](4, _c0));
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  max-width: 200px;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%] {\r\n  padding: 8px 8px 8px 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding-top: 2rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  alignment: left;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY3J1ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYiIsImZpbGUiOiJ1c2VyLWNydWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkICwgdGgge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5tYXQtcm93IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGFsaWdubWVudDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "XsiD":
/*!******************************************************************************!*\
  !*** ./src/app/components/settings/position-crud/position-crud.component.ts ***!
  \******************************************************************************/
/*! exports provided: PositionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionCrudComponent", function() { return PositionCrudComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _position_form_position_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./position-form/position-form.component */ "ofsB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/position.service */ "g9kB");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function PositionCrudComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "\u2116");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PositionCrudComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function PositionCrudComponent_td_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r9); const position_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r8.updatePosition(position_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const j_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", j_r7 + 1, " ");
} }
function PositionCrudComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PositionCrudComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const position_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", position_r10.name, " ");
} }
function PositionCrudComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "tr", 18);
} }
function PositionCrudComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "tr", 19);
} }
const _c0 = function () { return [5, 10, 20]; };
class PositionCrudComponent {
    constructor(dialog, positionService) {
        this.dialog = dialog;
        this.positionService = positionService;
        this.displayedColumns = ['index', 'name'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        this.positionService.getAllPositions().subscribe(positions => {
            this.positions = positions;
            this.dataSource.data = this.positions;
        });
    }
    openDialog(position) {
        return this.dialog.open(_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_3__["PositionFormComponent"], {
            width: '300px',
            data: position,
            disableClose: true
        });
    }
    createPosition() {
        this.openDialog(null).afterClosed().subscribe(data => {
            switch (data.status) {
                case 'created': {
                    this.positions.push(data.position);
                    this.dataSource.data = this.positions;
                    this.table.renderRows();
                    break;
                }
                case 'canceled': {
                    break;
                }
            }
        });
    }
    updatePosition(position) {
        this.openDialog(position).afterClosed().subscribe(data => {
            let index = this.positions.findIndex(x => x.id === position.id);
            console.log(data);
            switch (data.status) {
                case 'update': {
                    console.log('updated');
                    this.positions[index] = data.position;
                    break;
                }
                case 'remove': {
                    console.log('removed');
                    this.positions.splice(index, 1);
                    break;
                }
                case 'canceled': {
                    console.log('canceled');
                    break;
                }
            }
            this.dataSource.data = this.positions;
            this.table.renderRows();
        });
    }
}
PositionCrudComponent.??fac = function PositionCrudComponent_Factory(t) { return new (t || PositionCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_position_service__WEBPACK_IMPORTED_MODULE_6__["PositionService"])); };
PositionCrudComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: PositionCrudComponent, selectors: [["app-position-crud"]], viewQuery: function PositionCrudComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 18, vars: 5, consts: [["fxLayout", "column", 1, "mat-elevation-z8", "container"], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "text-align", "center"], ["mat-mini-fab", "", "color", "primary", 2, "margin-top", "20px", 3, "click"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], [2, "margin-left", "20px"], ["mat-cell", ""], ["mat-mini-fab", "", 2, "margin-right", "1rem", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PositionCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](6, PositionCrudComponent_th_6_Template, 3, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](7, PositionCrudComponent_td_7_Template, 5, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](9, PositionCrudComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](10, PositionCrudComponent_td_10_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](11, PositionCrudComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](12, PositionCrudComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function PositionCrudComponent_Template_button_click_14_listener() { return ctx.createPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](17, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](4, _c0));
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding-top: 2rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  alignment: left;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc2l0aW9uLWNydWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InBvc2l0aW9uLWNydWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBhbGlnbm1lbnQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "a66F":
/*!********************************************************!*\
  !*** ./src/app/components/material/material.module.ts ***!
  \********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mat-select-filter */ "Y70v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const MaterialComponents = [
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
    mat_select_filter__WEBPACK_IMPORTED_MODULE_16__["MatSelectFilterModule"]
];
class MaterialModule {
}
MaterialModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineNgModule"]({ type: MaterialModule });
MaterialModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        mat_select_filter__WEBPACK_IMPORTED_MODULE_16__["MatSelectFilterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["????setNgModuleScope"](MaterialModule, { imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        mat_select_filter__WEBPACK_IMPORTED_MODULE_16__["MatSelectFilterModule"]], exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        mat_select_filter__WEBPACK_IMPORTED_MODULE_16__["MatSelectFilterModule"]] }); })();


/***/ }),

/***/ "dpNM":
/*!*********************************!*\
  !*** ./src/app/model/device.ts ***!
  \*********************************/
/*! exports provided: Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
class Device {
}


/***/ }),

/***/ "g9kB":
/*!**********************************************!*\
  !*** ./src/app/services/position.service.ts ***!
  \**********************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PositionService {
    constructor(http) {
        this.http = http;
    }
    getAllPositions() {
        return this.http.get('/api/v1/positions/');
    }
    createPosition(position) {
        return this.http.post('/api/v1/positions/create', position, { headers: { 'Content-Type': 'application/json' } });
    }
    updatePosition(position) {
        return this.http.put('/api/v1/positions/update', position, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => {
            return position;
        }));
    }
    removePosition(position) {
        return this.http.post('/api/v1/positions/delete', position, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => {
            return position;
        }));
    }
}
PositionService.??fac = function PositionService_Factory(t) { return new (t || PositionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PositionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: PositionService, factory: PositionService.??fac, providedIn: 'root' });


/***/ }),

/***/ "kl1M":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "nIUp":
/*!*****************************************************!*\
  !*** ./src/app/services/register-device.service.ts ***!
  \*****************************************************/
/*! exports provided: RegisterDeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDeviceService", function() { return RegisterDeviceService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device.service */ "BtSu");
/* harmony import */ var _record_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./record.service */ "oq9T");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class RegisterDeviceService {
    constructor(deviceService, recordService, http) {
        this.deviceService = deviceService;
        this.recordService = recordService;
        this.http = http;
    }
    registerDevices(devices) {
        let deviceDTOs = devices.map(x => this.deviceService.mapDeviceToJSON(x));
        return this.http.post('/api/v1/register/', deviceDTOs);
    }
    closeRecord(record) {
        let recordDTO = this.recordService.mapRecordToJSON(record);
        return this.http.put('/api/v1/register/close', recordDTO)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(recordDTO => this.recordService.mapJSONToRecord(recordDTO)));
    }
    closeAllRecords() {
        return this.http.put('/api/v1/register/close-all', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => true));
    }
    getAllActiveRecords() {
        return this.http.get('/api/v1/register/active-records')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(recordDTOs => {
            let records = [];
            recordDTOs.forEach(recordDTO => records.push(this.recordService.mapJSONToRecord(recordDTO)));
            return records;
        }));
    }
}
RegisterDeviceService.??fac = function RegisterDeviceService_Factory(t) { return new (t || RegisterDeviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_record_service__WEBPACK_IMPORTED_MODULE_3__["RecordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
RegisterDeviceService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: RegisterDeviceService, factory: RegisterDeviceService.??fac, providedIn: 'root' });


/***/ }),

/***/ "np0s":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/security/auth.service */ "zVt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function ToolbarComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u041E\u0431\u0437\u043E\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ToolbarComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class ToolbarComponent {
    constructor(router, authService) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.eventStream.subscribe(employee => {
            this.userName = employee === null || employee === void 0 ? void 0 : employee.name;
        });
    }
    ngOnDestroy() {
        //this.authService.eventStream.unsubscribe();
    }
    getName() {
        let name = JSON.parse(localStorage.getItem('employee')).name;
        let lastName = name.split(" ")[0] + " ";
        let firstName = name.split(" ")[1] === undefined ? "" : name.split(" ")[1][0] + ". ";
        let middleName = name.split(" ")[2] === undefined ? "" : name.split(" ")[2][0] + ".";
        return lastName + firstName + middleName;
    }
}
ToolbarComponent.??fac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ToolbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 21, vars: 4, consts: [["color", "primary"], [2, "padding-right", "10px"], [1, "example-spacer"], [2, "padding-right", "1rem", "margin-left", "1rem", "font-size", "small", "max-width", "200px"], ["appMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "home"], ["mat-menu-item", "", "routerLink", "journal"], ["mat-menu-item", "", "routerLink", "overview", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "settings", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-mini-fab", "", "color", "white", 3, "mat-menu-trigger-for"], ["mat-menu-item", "", "routerLink", "overview"], ["mat-menu-item", "", "routerLink", "settings"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "MDTracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\u0416\u0443\u0440\u043D\u0430\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ToolbarComponent_button_14_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ToolbarComponent_button_15_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ToolbarComponent_Template_button_click_16_listener() { return ctx.authService.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\u0412\u044B\u0445\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.getName(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authService.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authService.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-menu-trigger-for", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ofsB":
/*!********************************************************************************************!*\
  !*** ./src/app/components/settings/position-crud/position-form/position-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PositionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionFormComponent", function() { return PositionFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../error/error.component */ "7AdY");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/position.service */ "g9kB");
/* harmony import */ var _model_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../model/position */ "LFfH");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function PositionFormComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function PositionFormComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function PositionFormComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r2.removePosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx_r1.deleteDisabled);
} }
class PositionFormComponent {
    constructor(dialogRef, data, positionService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.positionService = positionService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({ name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data == null ? '' : this.data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) });
        this.submitDisabled = false;
        this.deleteDisabled = false;
    }
    isSubmitDisabled() {
        return this.form.invalid || this.submitDisabled;
    }
    createNewPosition(position) {
        this.submitDisabled = true;
        this.positionService.createPosition(position).subscribe(position => {
            this.dialogRef.close({ status: 'created', position: position });
        }, error => {
            this.errorHandler(error);
            this.submitDisabled = false;
        });
    }
    updatePosition(position) {
        this.submitDisabled = true;
        this.positionService.updatePosition(position).subscribe(() => {
            this.dialogRef.close({ status: 'update', position: position });
            console.log('we ar in update method');
        }, error => {
            this.errorHandler(error);
            this.submitDisabled = false;
        });
    }
    removePosition() {
        this.confirm("?????????????? ???????????????????").subscribe(flag => {
            if (flag) {
                this.deleteDisabled = true;
                this.positionService.removePosition(this.getPosition()).subscribe(() => {
                    this.dialogRef.close({ status: 'remove', position: this.getPosition() });
                }, error => {
                    this.errorHandler(error);
                    this.deleteDisabled = false;
                });
            }
        });
    }
    onNoClick() {
        console.log('no click');
        this.dialogRef.close({ status: 'canceled' });
    }
    getPosition() {
        return { id: this.data == null ? 0 : this.data.id,
            name: this.form.controls['name'].value };
    }
    submit() {
        console.log('we are in submit');
        if (this.data === null) {
            this.createNewPosition(this.getPosition());
        }
        else {
            this.updatePosition(this.getPosition());
        }
    }
    confirm(message) {
        return this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            data: message,
            disableClose: true
        }).afterClosed();
    }
    errorHandler(error) {
        switch (error.status) {
            case 401: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "???????????????????????? ????????" }
                });
                break;
            }
            default: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "?????????????????????? ????????????" }
                });
                break;
            }
        }
    }
}
PositionFormComponent.??fac = function PositionFormComponent_Factory(t) { return new (t || PositionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_position_service__WEBPACK_IMPORTED_MODULE_5__["PositionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
PositionFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: PositionFormComponent, selectors: [["app-position-form"]], decls: 16, vars: 5, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["mat-dialog-content", "", "fxLayout", "row", "fxLayoutGap", "5%"], ["fxFlex", "100%"], ["floatLabel", "auto", "appearance", "outline"], ["matInput", "", "type", "text", "autocomplete", "off", "formControlName", "name", "required", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", "color", "warn", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "disabled"], ["mat-button", "", "type", "button", "color", "warn", 3, "disabled", "click"]], template: function PositionFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngSubmit", function PositionFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](9, PositionFormComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](11, PositionFormComponent_button_11_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function PositionFormComponent_Template_button_click_12_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13, "\u041E\u0442\u043C\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.data == null ? "\u041D\u043E\u0432\u0430\u044F \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.form.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.data !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx.isSubmitDisabled());
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3NpdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "oq9T":
/*!********************************************!*\
  !*** ./src/app/services/record.service.ts ***!
  \********************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _model_record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/record */ "LwJF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class RecordService {
    constructor(http) {
        this.http = http;
    }
    getAllRecords() {
        return this.http.get('/api/v1/records/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(recordJSONs => {
            let records = [];
            recordJSONs.forEach(recordJSON => {
                records.push(this.mapJSONToRecord(recordJSON));
            });
            return records;
        }));
    }
    createRecord(record) {
        let recordDTO = this.mapRecordToJSON(record);
        return this.http.post('/api/v1/records/create', recordDTO, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(recordJSON => {
            return this.mapJSONToRecord(recordJSON);
        }));
    }
    updateRecord(record) {
        let recordDTO = this.mapRecordToJSON(record);
        return this.http.put('/api/v1/records/update', recordDTO, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            console.log(record);
            return record;
        }));
    }
    removeRecord(record) {
        console.log(record);
        let recordDTO = this.mapRecordToJSON(record);
        return this.http.post('/api/v1/records/delete', recordDTO, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            return record;
        }));
    }
    getRecordsByRequest(request) {
        var _a, _b;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('startDate', request.startDate)
            .append('endDate', request.endDate)
            .append('employeeId', (_a = request.employee) === null || _a === void 0 ? void 0 : _a.id)
            .append('deviceId', (_b = request.device) === null || _b === void 0 ? void 0 : _b.id);
        return this.http.get('/api/v1/records/filter', { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(recordDTOs => {
            let records = [];
            recordDTOs.forEach(recordDTO => {
                records.push(this.mapJSONToRecord(recordDTO));
            });
            return records;
        }));
    }
    getEmployeesAndDevices() {
        return this.http.get('/api/v1/records/employees-and-devices');
    }
    getActiveRecords() {
        return this.http.get('/api/v1/records/active')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(recordJSONs => {
            let records = [];
            recordJSONs.forEach(recordJSON => {
                records.push(this.mapJSONToRecord(recordJSON));
            });
            return records;
        }));
    }
    mapJSONToRecord(recordJSON) {
        recordJSON['taken'] = recordJSON['taken'] === 0 ? null : new Date(recordJSON['taken']);
        recordJSON['returned'] = recordJSON['returned'] === 0 ? null : new Date(recordJSON['returned']);
        recordJSON['device']['verificationExpire'] = recordJSON['device']['verificationExpire'] === 0 ? null : new Date(recordJSON['device']['verificationExpire']);
        let record = new _model_record__WEBPACK_IMPORTED_MODULE_1__["Record"]();
        Object.assign(record, recordJSON);
        return record;
    }
    mapRecordToJSON(record) {
        let recordDTO = {};
        Object.assign(recordDTO, record);
        recordDTO['taken'] = record.taken.getTime();
        recordDTO['returned'] = record.returned === null ? 0 : record.returned.getTime();
        recordDTO['device']['verificationExpire'] = record.device.verificationExpire == null ? 0 : record.device.verificationExpire.getTime();
        return recordDTO;
    }
}
RecordService.??fac = function RecordService_Factory(t) { return new (t || RecordService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RecordService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: RecordService, factory: RecordService.??fac, providedIn: 'root' });


/***/ }),

/***/ "pjuo":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class EmployeeService {
    constructor(http) {
        this.http = http;
    }
    getAllEmployees() {
        return this.http.get('/api/v1/employees/');
    }
}
EmployeeService.??fac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmployeeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: EmployeeService, factory: EmployeeService.??fac, providedIn: 'root' });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserService {
    constructor(http) {
        this.http = http;
    }
    getAllUsers() {
        return this.http.get('/api/v1/users/');
    }
    createUser(user) {
        return this.http.post('/api/v1/users/create', user, { headers: { 'Content-Type': 'application/json' } });
    }
    updateUser(user) {
        return this.http.put('/api/v1/users/update', user, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => {
            return user;
        }));
    }
    removeUser(user) {
        return this.http.post('/api/v1/users/delete', user, { headers: { 'Content-Type': 'application/json' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => {
            return user;
        }));
    }
    getAllAuthorities() {
        return this.http.get('/api/v1/users/authorities');
    }
}
UserService.??fac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: UserService, factory: UserService.??fac, providedIn: 'root' });


/***/ }),

/***/ "rJCx":
/*!*************************************************************************************!*\
  !*** ./src/app/components/register-device/qr-add-device/qr-add-device.component.ts ***!
  \*************************************************************************************/
/*! exports provided: QrAddDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrAddDeviceComponent", function() { return QrAddDeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class QrAddDeviceComponent {
    constructor() { }
    ngOnInit() {
    }
}
QrAddDeviceComponent.??fac = function QrAddDeviceComponent_Factory(t) { return new (t || QrAddDeviceComponent)(); };
QrAddDeviceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: QrAddDeviceComponent, selectors: [["app-qr-add-device"]], decls: 2, vars: 0, template: function QrAddDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "qr-add-device works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1hZGQtZGV2aWNlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "rfrb":
/*!******************************************************************************************!*\
  !*** ./src/app/components/settings/user-crud/user-edit-form/user-edit-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditFormComponent", function() { return UserEditFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _user_add_form_user_add_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-add-form/user-add-form.component */ "IUec");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../error/error.component */ "7AdY");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.component */ "9c4+");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/user.service */ "qfBg");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/position.service */ "g9kB");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/security/auth.service */ "zVt+");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../model/user */ "kl1M");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




















function UserEditFormComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserEditFormComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041D\u0435 \u043C\u0435\u043D\u0435\u0435 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserEditFormComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const position_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", position_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", position_r7.name, " ");
} }
function UserEditFormComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserEditFormComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const authority_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", authority_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", ctx_r4.getRoleName(authority_r8.role), " ");
} }
function UserEditFormComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserEditFormComponent_div_26_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041D\u0435 \u043C\u0435\u043D\u0435\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserEditFormComponent_div_26_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function UserEditFormComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](4, "\u041F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](5, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, UserEditFormComponent_div_26_mat_error_6_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](10, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](11, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](12, UserEditFormComponent_div_26_mat_error_12_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r6.form.controls.password.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r6.form.controls.passwordConfirmation.invalid);
} }
class UserEditFormComponent {
    constructor(dialogRef, data, userService, positionService, auth, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.positionService = positionService;
        this.auth = auth;
        this.dialog = dialog;
        this.objectComparisonFunction = function (option, value) {
            return option.id == value.id;
        };
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({ password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)),
            passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            authorities: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: this.data.authorities[0],
                disabled: this.auth.getCurrentEmployee().id === this.data.employee.id }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.employee.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.employee.position, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        }, { validators: _user_add_form_user_add_form_component__WEBPACK_IMPORTED_MODULE_2__["passwordMatchValidator"] });
        console.log(JSON.stringify(this.data));
        this.isPasswordFormVisible = false;
        this.userService.getAllAuthorities().subscribe(authorities => {
            this.authorities = authorities;
        });
        this.positionService.getAllPositions().subscribe(positions => {
            this.positions = positions;
        });
        this.submitDisabled = false;
        this.deleteDisabled = false;
    }
    onNoClick() {
        this.dialogRef.close({ status: 'canceled' });
    }
    updateUser() {
        this.submitDisabled = true;
        this.userService.updateUser(this.getUser()).subscribe(() => {
            this.dialogRef.close({ status: 'updated', user: this.getUser() });
        }, error => {
            this.errorHandler(error);
            this.submitDisabled = false;
        });
    }
    deleteUser() {
        this.confirm("?????????????? ?????????????????????????").subscribe(flag => {
            if (flag) {
                this.deleteDisabled = true;
                this.userService.removeUser(this.getUser()).subscribe(() => {
                    this.dialogRef.close({ status: 'removed', user: this.getUser() });
                }, error => {
                    this.errorHandler(error);
                    this.deleteDisabled = false;
                });
            }
        });
    }
    confirm(message) {
        return this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: message,
            disableClose: true
        }).afterClosed();
    }
    getUser() {
        this.form.controls['authorities'].setValue(this.form.controls['authorities'].value);
        return { id: this.data.id, authorities: [this.form.controls['authorities'].value],
            login: this.data.login,
            password: this.form.controls['password'].value,
            employee: { id: this.data.employee.id, name: this.form.controls['name'].value,
                position: this.form.controls['position'].value } };
    }
    errorHandler(error) {
        switch (error.status) {
            case 401: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "???????????????????????? ????????" }
                });
                break;
            }
            case 406: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "?????????????????? ?????????? ??????????" }
                });
                break;
            }
            default: {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"], {
                    width: '200px',
                    data: { message: "?????????????????????? ????????????" }
                });
                break;
            }
        }
    }
    getRoleName(name) {
        return _app_component__WEBPACK_IMPORTED_MODULE_4__["ROLE_NAMES"].get(name);
    }
    isSubmitDisabled() {
        return this.form.invalid || this.submitDisabled;
    }
    isDeleteDisabled() {
        return this.auth.getCurrentEmployee().id === this.data.employee.id ||
            this.deleteDisabled;
    }
    openChangePasswordForm() {
        this.isPasswordFormVisible = !this.isPasswordFormVisible;
    }
}
UserEditFormComponent.??fac = function UserEditFormComponent_Factory(t) { return new (t || UserEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_position_service__WEBPACK_IMPORTED_MODULE_8__["PositionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
UserEditFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: UserEditFormComponent, selectors: [["app-user-edit-form"]], decls: 36, vars: 12, consts: [["mat-dialog-title", "", 2, "text-align", "center"], [3, "formGroup", "ngSubmit"], ["mat-dialog-content", "", "fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-around", "fxLayoutGap.xs", "5%", "fxLayout.xs", "column"], [2, "margin-top", "15px"], ["floatLabel", "auto", "appearance", "outline"], ["matInput", "", "type", "text", "autocomplete", "off", "formControlName", "name", "required", ""], [4, "ngIf"], ["appearance", "fill", 2, "width", "100%"], ["formControlName", "position", "required", "", 3, "compareWith"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "30%", "fxFlexOrder.xs", "2"], ["formControlName", "authorities", "required", "", 3, "compareWith"], ["fxLayout", "row", "fxLayoutAlign", "space-around", "fxLayoutGap.xs", "5%", "fxLayout.xs", "column", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayoutAlign", "end", 2, "margin-bottom", "10px"], ["mat-button", "", "type", "button", "color", "warn", 3, "disabled", "click"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "disabled"], [3, "value"], ["fxFlex", "30%"], ["matInput", "", "type", "password", "autocomplete", "off", "formControlName", "password"], ["matInput", "", "type", "password", "autocomplete", "off", "formControlName", "passwordConfirmation"]], template: function UserEditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("ngSubmit", function UserEditFormComponent_Template_form_ngSubmit_2_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](8, "\u0424.\u0418.\u041E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](10, UserEditFormComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](11, UserEditFormComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](14, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](15, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](17, UserEditFormComponent_mat_option_17_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](18, UserEditFormComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](21, "\u0420\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](22, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](23, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](24, UserEditFormComponent_mat_option_24_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](25, UserEditFormComponent_mat_error_25_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](26, UserEditFormComponent_div_26_Template, 13, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function UserEditFormComponent_Template_button_click_28_listener() { return ctx.deleteUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](29, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function UserEditFormComponent_Template_button_click_30_listener() { return ctx.openChangePasswordForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](31, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function UserEditFormComponent_Template_button_click_32_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](33, "\u041E\u0442\u043C\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](35, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.form.controls.name.errors == null ? null : ctx.form.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.form.controls.name.errors == null ? null : ctx.form.controls.name.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("compareWith", ctx.objectComparisonFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.form.controls.position.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("compareWith", ctx.objectComparisonFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.authorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.form.controls.authorities.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.isPasswordFormVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("disabled", ctx.isDeleteDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("disabled", ctx.isSubmitDisabled());
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexOrderDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], styles: [".hidden[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZWRpdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoidXNlci1lZGl0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRkZW57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "sY6C":
/*!*********************************************************!*\
  !*** ./src/app/services/security/role-guard.service.ts ***!
  \*********************************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "zVt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class RoleGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route) {
        const expectedRole = route.data.expectedRole;
        const token = localStorage.getItem('jwt');
        const tokenPayload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        else if (tokenPayload.roles[0] !== expectedRole) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }
}
RoleGuardService.??fac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RoleGuardService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: RoleGuardService, factory: RoleGuardService.??fac });


/***/ }),

/***/ "uXAJ":
/*!************************************************************************************************!*\
  !*** ./src/app/components/settings/device-crud/device-qr-printer/device-qr-table.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DeviceQrTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceQrTableComponent", function() { return DeviceQrTableComponent; });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-qrcode */ "vCDz");





function DeviceQrTableComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "qr-code", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const device_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](index_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.transliterate(device_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](device_r1.serialNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", device_r1.id.toString());
} }
class DeviceQrTableComponent {
    constructor() { }
    ngOnInit() {
    }
    generatePDF() {
        let doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]();
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default()(doc, {
            html: '#qr-table',
            bodyStyles: { minCellHeight: 17 },
            didDrawCell: function (data) {
                if (data.column.index === 3 && data.cell.section === 'body') {
                    let td = data.cell.raw;
                    console.log(td);
                    let qr = td.getElementsByTagName('qr-code')[0];
                    console.log(qr);
                    let img = qr.getElementsByTagName('img')[0];
                    console.log(img);
                    let dim = data.cell.height - data.cell.padding('vertical');
                    console.log(dim);
                    let textPos = data.cell.getTextPos();
                    doc.addImage(img.src, textPos.x, textPos.y, dim, dim);
                }
            }
        });
        doc.save('device-table.pdf');
    }
    transliterate(word) {
        let a = { "??": "YO", "??": "I", "??": "TS", "??": "U", "??": "K", "??": "E", "??": "N", "??": "G", "??": "SH", "??": "SCH", "??": "Z", "??": "H", "??": "'", "??": "yo", "??": "i", "??": "ts", "??": "u", "??": "k", "??": "e", "??": "n", "??": "g", "??": "sh", "??": "sch", "??": "z", "??": "h", "??": "'", "??": "F", "??": "I", "??": "V", "??": "a", "??": "P", "??": "R", "??": "O", "??": "L", "??": "D", "??": "ZH", "??": "E", "??": "f", "??": "i", "??": "v", "??": "a", "??": "p", "??": "r", "??": "o", "??": "l", "??": "d", "??": "zh", "??": "e", "??": "Ya", "??": "CH", "??": "S", "??": "M", "??": "I", "??": "T", "??": "'", "??": "B", "??": "YU", "??": "ya", "??": "ch", "??": "s", "??": "m", "??": "i", "??": "t", "??": "'", "??": "b", "??": "yu" };
        return word.split('').map(function (char) {
            return a[char] || char;
        }).join("");
    }
}
DeviceQrTableComponent.??fac = function DeviceQrTableComponent_Factory(t) { return new (t || DeviceQrTableComponent)(); };
DeviceQrTableComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: DeviceQrTableComponent, selectors: [["app-device-qr-table"]], inputs: { devices: "devices" }, decls: 16, vars: 1, consts: [[2, "width", "1000px"], ["id", "qr-table", 1, "table"], [4, "ngFor", "ngForOf"], [3, "value"]], template: function DeviceQrTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "\u0421\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Serial number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "QR-code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, DeviceQrTableComponent_tr_15_Template, 9, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.devices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular2_qrcode__WEBPACK_IMPORTED_MODULE_4__["QRCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2UtcXItdGFibGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "v4Rd":
/*!*************************************************************************!*\
  !*** ./src/app/components/register-device/register-device.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDeviceComponent", function() { return RegisterDeviceComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/error.component */ "7AdY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/device.service */ "BtSu");
/* harmony import */ var _services_register_device_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/register-device.service */ "nIUp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @zxing/ngx-scanner */ "7Ub2");
/* harmony import */ var _selector_add_device_selector_add_device_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selector-add-device/selector-add-device.component */ "6vPW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function RegisterDeviceComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " \u2116 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function RegisterDeviceComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const index_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", index_r11 + 1, " ");
} }
function RegisterDeviceComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function RegisterDeviceComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const device_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", device_r12.name, " ");
} }
function RegisterDeviceComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " \u0421\u0435\u0440\u0438\u0439\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function RegisterDeviceComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const device_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", device_r13.serialNumber, "");
} }
function RegisterDeviceComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "th", 21);
} }
function RegisterDeviceComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RegisterDeviceComponent_td_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r16); const device_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r15.removeDevice(device_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function RegisterDeviceComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "tr", 24);
} }
function RegisterDeviceComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "tr", 25);
} }
class RegisterDeviceComponent {
    constructor(deviceService, registerService, dialog, router) {
        this.deviceService = deviceService;
        this.registerService = registerService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['id', 'name', 'serialNumber', 'deleteAction'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.deviceService.getAllDevices().subscribe(devices => {
            this.devices = devices;
            this.subject.next(this.getValidDevices());
        });
        this.registerDevices = [];
        this.dataSource.data = this.registerDevices;
        this.scannedEnabled = false;
    }
    switchScanner() {
        this.scannedEnabled = !this.scannedEnabled;
    }
    scanSuccessHandler(result) {
        let id = Number.parseInt(result);
        let device = this.devices.find(x => x.id === id);
        console.log(device.name);
        this.addDevice(device);
        this.switchScanner();
        this.table.renderRows();
    }
    addDevice(device) {
        if (!this.deviceIsNotExpired(device)) {
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"], {
                data: { message: `???????? ?????????????? ?????????????? ${device.name} ??? ${device.serialNumber} ??????????` }
            });
        }
        else if (device.taken) {
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"], {
                data: { message: `???????????? ${device.name} ??? ${device.serialNumber} ?????? ????????????????????????` }
            });
        }
        else if (this.registerDevices.includes(device)) {
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"], {
                data: { message: `???????????? ${device.name} ??? ${device.serialNumber} ?????? ????????????` }
            });
        }
        else {
            this.registerDevices.push(device);
            this.dataSource.data = this.registerDevices;
        }
    }
    addDevices(devices) {
        devices.forEach(x => this.addDevice(x));
        this.table.renderRows();
    }
    removeDevice(device) {
        let index = this.registerDevices.indexOf(device);
        if (index > -1) {
            this.registerDevices.splice(index, 1);
        }
        this.table.renderRows();
    }
    getValidDevices() {
        return this.devices.filter(device => {
            return !device.taken && this.deviceIsNotExpired(device);
        });
    }
    deviceIsNotExpired(device) {
        return device.verificationExpire.getTime() - Date.now() > 0;
    }
    register() {
        this.confirm("???????????????????????????????? ?????????????????? ???????????????").subscribe(flag => {
            if (flag) {
                this.registerService.registerDevices(this.registerDevices).subscribe(() => {
                    this.router.navigate(['home']);
                }, error => {
                    this.errorHandler(error);
                });
            }
        });
    }
    errorHandler(error) {
        this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"], {
            data: { message: '?????????????????????? ????????????' }
        });
    }
    confirm(message) {
        return this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            data: message,
            disableClose: true
        }).afterClosed();
    }
}
RegisterDeviceComponent.??fac = function RegisterDeviceComponent_Factory(t) { return new (t || RegisterDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_device_service__WEBPACK_IMPORTED_MODULE_5__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_register_device_service__WEBPACK_IMPORTED_MODULE_6__["RegisterDeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
RegisterDeviceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: RegisterDeviceComponent, selectors: [["app-register-device"]], viewQuery: function RegisterDeviceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 29, vars: 9, consts: [[1, "container"], [2, "text-align", "center", "margin-bottom", "1rem"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "style", "width: 13%", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 13%", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "serialNumber"], ["matColumnDef", "deleteAction"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["align", "end"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "container", 2, "padding-bottom", "20px"], [3, "enable", "scanSuccess"], ["mat-flat-button", "", "color", "primary", 1, "button", 3, "click"], [3, "subject", "deviceEvent"], ["mat-header-cell", "", 2, "width", "13%"], ["mat-cell", "", 2, "width", "13%"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-mini-fab", "", "color", "primary", 2, "float", "right", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function RegisterDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "\u041F\u0440\u0438\u0431\u043E\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](6, RegisterDeviceComponent_th_6_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](7, RegisterDeviceComponent_td_7_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](9, RegisterDeviceComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](10, RegisterDeviceComponent_td_10_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](12, RegisterDeviceComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](13, RegisterDeviceComponent_td_13_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](15, RegisterDeviceComponent_th_15_Template, 1, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](16, RegisterDeviceComponent_td_16_Template, 4, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](17, RegisterDeviceComponent_tr_17_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](18, RegisterDeviceComponent_tr_18_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "mat-card-actions", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RegisterDeviceComponent_Template_button_click_20_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "zxing-scanner", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("scanSuccess", function RegisterDeviceComponent_Template_zxing_scanner_scanSuccess_23_listener($event) { return ctx.scanSuccessHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RegisterDeviceComponent_Template_button_click_25_listener() { return ctx.switchScanner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "app-selector-add-device", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("deviceEvent", function RegisterDeviceComponent_Template_app_selector_add_device_deviceEvent_28_listener($event) { return ctx.addDevices($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx.registerDevices.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????classProp"]("hidden", !ctx.scannedEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("enable", ctx.scannedEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.scannedEnabled ? "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C QR-\u0441\u043A\u0430\u043D\u0435\u0440" : "\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C QR-\u043A\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("subject", ctx.subject);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_11__["ZXingScannerComponent"], _selector_add_device_selector_add_device_component__WEBPACK_IMPORTED_MODULE_12__["SelectorAddDeviceComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  max-width: 200px;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%] {\r\n  padding: 8px 8px 8px 0;\r\n  font-size: small;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  table-layout:fixed;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  width: 70%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  alignment: center;\r\n}\r\n\r\n.mat-column-actions[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.mat-column-id[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none\r\n}\r\n\r\n@media only screen and (max-width : 480px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWRldmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci1kZXZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkICwgdGgge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5tYXQtcm93IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYWxpZ25tZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWFjdGlvbnMge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4taWQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA0ODBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "wT7E":
/*!*********************************************************!*\
  !*** ./src/app/components/journal/journal.component.ts ***!
  \*********************************************************/
/*! exports provided: JournalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalComponent", function() { return JournalComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _record_form_record_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./record-form/record-form.component */ "/Dhs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/security/auth.service */ "zVt+");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/record.service */ "oq9T");
/* harmony import */ var _services_register_device_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/register-device.service */ "nIUp");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mat-select-filter */ "Y70v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
























function JournalComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const employee_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", employee_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", employee_r16.name, " ");
} }
function JournalComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const device_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", device_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate2"](" ", device_r17.name, " ", device_r17.serialNumber, " ");
} }
function JournalComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function JournalComponent_td_42_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function JournalComponent_td_42_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r22); const record_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r20.updateRecord(record_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const record_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("disabled", record_r18.returned === null);
} }
function JournalComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, JournalComponent_td_42_button_1_Template, 3, 1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const record_r18 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r4.authService.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind2"](3, 2, record_r18.taken, "dd.MM.YY/HH:mm"), " ");
} }
function JournalComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function JournalComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const record_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", record_r24.employee.name, " ");
} }
function JournalComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function JournalComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const record_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", record_r25.device.name, " ");
} }
function JournalComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0421\u0435\u0440\u0438\u0439\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function JournalComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const record_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", record_r26.device.serialNumber, " ");
} }
function JournalComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function JournalComponent_td_54_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function JournalComponent_td_54_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r31); const record_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r29.closeRecord(record_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function JournalComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, JournalComponent_td_54_button_1_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const record_r27 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", record_r27.returned === null && ctx_r12.authService.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", record_r27.returned != null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind2"](3, 2, record_r27.returned, "dd.MM.YY/HH:mm") : "", " ");
} }
function JournalComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 42);
} }
function JournalComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 43);
} }
function JournalComponent_button_58_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function JournalComponent_button_58_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r33.createRecord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
const _c0 = function () { return [5, 10, 20]; };
class JournalComponent {
    constructor(dialog, authService, recordService, registerDeviceService) {
        this.dialog = dialog;
        this.authService = authService;
        this.recordService = recordService;
        this.registerDeviceService = registerDeviceService;
        this.employees = [];
        this.devices = [];
        this.displayedColumns = ['taken', 'employee', 'deviceName', 'serialNumber', 'returned'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (record, property) => {
            switch (property) {
                case 'deviceName': return record.device.name;
                case 'serialNumber': return record.device.serialNumber;
                case 'employee': return record.employee.name;
                default: return record[property];
            }
        };
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        this.initForm();
        this.recordService.getAllRecords().subscribe(records => {
            this.records = records;
            this.dataSource.data = this.records;
        });
        this.setEmployeesAndDevices();
    }
    openDialog(record) {
        console.log(record);
        return this.dialog.open(_record_form_record_form_component__WEBPACK_IMPORTED_MODULE_3__["RecordFormComponent"], {
            width: '1000px',
            data: record,
            disableClose: true
        });
    }
    createRecord() {
        this.openDialog(null).afterClosed().subscribe(data => {
            switch (data.status) {
                case 'created': {
                    this.records.push(data.record);
                    this.dataSource.data = this.records;
                    this.table.renderRows();
                    break;
                }
                case 'canceled': {
                    break;
                }
            }
        });
    }
    updateRecord(record) {
        console.log(record);
        this.openDialog(record).afterClosed().subscribe(data => {
            let index = this.records.findIndex(x => x.id === record.id);
            switch (data.status) {
                case 'update': {
                    this.records[index] = data.record;
                    break;
                }
                case 'remove': {
                    this.records.splice(index, 1);
                    break;
                }
                case 'canceled': {
                    break;
                }
            }
            this.dataSource.data = this.records;
            this.table.renderRows();
        });
    }
    submit() {
        console.log(this.getRequest());
        this.recordService.getRecordsByRequest(this.getRequest()).subscribe(records => {
            console.log(records);
            this.records = records;
            this.dataSource.data = records;
            this.table.renderRows();
        });
    }
    closeRecord(record) {
        this.confirm("?????????????? ?????????????????? ?????????????").subscribe(flag => {
            if (flag) {
                this.registerDeviceService.closeRecord(record).subscribe(returnedRecord => {
                    let index = this.records.indexOf(record);
                    this.records[index].returned = returnedRecord.returned;
                    this.dataSource.data = this.records;
                    this.table.renderRows();
                });
            }
        });
    }
    resetForm() {
        this.initForm();
        this.submit();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            employee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            device: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    }
    getRequest() {
        let request = this.form.value;
        request.startDate = request.startDate == null || request.startDate == 0 ? 0 : new Date(request.startDate).getTime();
        request.endDate = request.endDate == null || request.endDate == 0 ? 0 : new Date(request.endDate).getTime();
        return request;
    }
    setEmployeesAndDevices() {
        this.recordService.getEmployeesAndDevices().subscribe(obj => {
            this.employees = obj['employees'];
            this.filteredEmployees = this.employees;
            this.devices = obj['devices'];
            this.filteredDevices = this.devices;
        });
    }
    confirm(message) {
        return this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: message,
            disableClose: true
        }).afterClosed();
    }
}
JournalComponent.??fac = function JournalComponent_Factory(t) { return new (t || JournalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_record_service__WEBPACK_IMPORTED_MODULE_9__["RecordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_register_device_service__WEBPACK_IMPORTED_MODULE_10__["RegisterDeviceService"])); };
JournalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: JournalComponent, selectors: [["app-journal"]], viewQuery: function JournalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 60, vars: 19, consts: [["fxLayout", "column", 1, "mat-elevation-z8", "container", 2, "width", "100%"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "center", 2, "padding-bottom", "1rem", 3, "formGroup", "ngSubmit"], ["fxLayoutAlign", "start", "fxFlex", "20%"], ["appearance", "fill", 1, "example-form-field", 2, "width", "100%"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "\u0441", "formControlName", "startDate"], ["matEndDate", "", "placeholder", "\u043F\u043E", "formControlName", "endDate"], ["matSuffix", "", 3, "for"], ["rangePicker", ""], ["mat-button", "", "matDateRangePickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDateRangePickerApply", ""], ["fxFlex", "20%"], ["appearance", "fill", 2, "width", "100%"], ["formControlName", "employee"], [3, "placeholder", "noResultsMessage", "array", "displayMember", "filteredReturn"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "device"], ["fxLayoutAlign", "end center", "fxFlex", "30%", "fxLayoutGap", "5px", 2, "padding-bottom", "1rem"], ["mat-raised-button", "", "color", "primary", "type", "submit", 2, "float", "right", "width", "100%"], ["mat-raised-button", "", "color", "primary", "type", "button", 2, "float", "right", "width", "100%", 3, "click"], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", "matSortActive", "taken", "matSortDirection", "desc", "matSortDisableClear", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "taken"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "employee"], ["matColumnDef", "deviceName"], ["matColumnDef", "serialNumber"], ["matColumnDef", "returned"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "text-align", "center"], ["mat-mini-fab", "", "style", "margin-top: 20px", "color", "primary", 3, "click", 4, "ngIf"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], [2, "margin-left", "20px"], ["mat-cell", ""], ["mat-mini-fab", "", "style", "margin-right: 1rem", 3, "disabled", "click", 4, "ngIf"], ["mat-mini-fab", "", 2, "margin-right", "1rem", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-mini-fab", "", "color", "primary", 2, "margin-top", "20px", 3, "click"]], template: function JournalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u0416\u0443\u0440\u043D\u0430\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("ngSubmit", function JournalComponent_Template_form_ngSubmit_3_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](7, "\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "mat-date-range-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](11, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "mat-date-range-picker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "mat-date-range-picker-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](16, "\u041E\u0442\u043C\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](18, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](22, "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](23, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "mat-select-filter", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("filteredReturn", function JournalComponent_Template_mat_select_filter_filteredReturn_24_listener($event) { return ctx.filteredEmployees = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](25, JournalComponent_mat_option_25_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](27, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](29, "\u041F\u0440\u0438\u0431\u043E\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](30, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](31, "mat-select-filter", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("filteredReturn", function JournalComponent_Template_mat_select_filter_filteredReturn_31_listener($event) { return ctx.filteredDevices = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](32, JournalComponent_mat_option_32_Template, 2, 3, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](35, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function JournalComponent_Template_button_click_36_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](37, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](39, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](40, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](41, JournalComponent_th_41_Template, 3, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](42, JournalComponent_td_42_Template, 4, 5, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](43, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](44, JournalComponent_th_44_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](45, JournalComponent_td_45_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](46, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](47, JournalComponent_th_47_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](48, JournalComponent_td_48_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](49, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](50, JournalComponent_th_50_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](51, JournalComponent_td_51_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](52, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](53, JournalComponent_th_53_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](54, JournalComponent_td_54_Template, 4, 5, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](55, JournalComponent_tr_55_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](56, JournalComponent_tr_56_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](58, JournalComponent_button_58_Template, 3, 0, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](59, "mat-paginator", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????reference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("placeholder", "\u041F\u043E\u0438\u0441\u043A..")("noResultsMessage", "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432")("array", ctx.employees)("displayMember", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.filteredEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("placeholder", "\u041F\u043E\u0438\u0441\u043A..")("noResultsMessage", "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432")("array", ctx.devices)("displayMember", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.filteredDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.authService.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](18, _c0));
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangePicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerCancel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerApply"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], mat_select_filter__WEBPACK_IMPORTED_MODULE_16__["MatSelectFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]], styles: ["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  max-width: 200px;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%] {\r\n  padding: 8px 8px 8px 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding-top: 2rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  alignment: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvdXJuYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFLQSxlQUFlOztBQUNmLG1CQUFtQjs7QUFDbkIsNEJBQTRCOztBQUM1Qix1QkFBdUI7O0FBQ3ZCLHNCQUFzQjs7QUFDdEIsSUFBSTs7QUFFSixlQUFlOztBQUNmLG9CQUFvQjs7QUFDcEIsdUJBQXVCOztBQUN2QixJQUFJOztBQUVKLGtCQUFrQjs7QUFDbEIsbUJBQW1COztBQUNuQixJQUFJOztBQUVKLDZCQUE2Qjs7QUFDN0Isb0JBQW9COztBQUNwQixtQkFBbUI7O0FBQ25CLDZCQUE2Qjs7QUFDN0IseUJBQXlCOztBQUN6QixNQUFNOztBQUVOLHNCQUFzQjs7QUFDdEIscUJBQXFCOztBQUNyQixNQUFNOztBQUVOLGVBQWU7O0FBQ2YsOEJBQThCOztBQUM5QiwwQkFBMEI7O0FBQzFCLHlCQUF5Qjs7QUFDekIsTUFBTTs7QUFDTixJQUFJIiwiZmlsZSI6ImpvdXJuYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkICwgdGgge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5tYXQtcm93IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGFsaWdubWVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKi5jb250YWluZXIgeyovXHJcbi8qICBkaXNwbGF5OiBmbGV4OyovXHJcbi8qICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXHJcbi8qICBtYXgtaGVpZ2h0OiA1MDBweDsqL1xyXG4vKiAgbWluLXdpZHRoOiAzMDBweDsqL1xyXG4vKn0qL1xyXG5cclxuLyoubWF0LXRhYmxlIHsqL1xyXG4vKiAgb3ZlcmZsb3c6IGF1dG87Ki9cclxuLyogIG1heC1oZWlnaHQ6IDUwMHB4OyovXHJcbi8qfSovXHJcblxyXG4vKi5tb2JpbGUtbGFiZWwgeyovXHJcbi8qICBkaXNwbGF5OiBub25lOyovXHJcbi8qfSovXHJcblxyXG4vKkBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSB7Ki9cclxuLyogIC5tb2JpbGUtbGFiZWwgeyovXHJcbi8qICAgIHdpZHRoOiA4MHB4OyovXHJcbi8qICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xyXG4vKiAgICBmb250LXdlaWdodDogYm9sZDsqL1xyXG4vKiAgfSovXHJcblxyXG4vKiAgLm1hdC1oZWFkZXItcm93IHsqL1xyXG4vKiAgICBkaXNwbGF5OiBub25lOyovXHJcbi8qICB9Ki9cclxuXHJcbi8qICAubWF0LXJvdyB7Ki9cclxuLyogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xyXG4vKiAgICBhbGlnbi1pdGVtczogc3RhcnQ7Ki9cclxuLyogICAgcGFkZGluZzogOHB4IDI0cHg7Ki9cclxuLyogIH0qL1xyXG4vKn0qL1xyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/app.module */ "Bczr");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_components_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zVt+":
/*!***************************************************!*\
  !*** ./src/app/services/security/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(http, jwtHelper, router) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.router = router;
        this.eventStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.errorStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
    }
    authorize(user) {
        localStorage.removeItem('jwt');
        localStorage.removeItem('employee');
        this.http.post('/api/v1/users/login', JSON.stringify(user), { headers: { 'Content-Type': 'application/json' }, withCredentials: true, observe: "response" })
            .subscribe(response => {
            console.log("???? ???????? ?????????????");
            localStorage.setItem("jwt", response.headers.get("Authorization").split(" ")[1]);
            console.log('jwt added to local storage');
            let employee = JSON.parse(JSON.stringify(response.body));
            console.log('employee created');
            this.eventStream.next(employee);
            console.log('employee emitted tot toolbar');
            localStorage.setItem('employee', JSON.stringify(employee));
            console.log('jwt added to local storage');
            this.router.navigate(['home']);
        }, error => {
            console.log(error);
            this.errorStream.next(this.getErrorMessage(error));
        });
    }
    isAuthenticated() {
        const token = localStorage.getItem('jwt');
        return !this.jwtHelper.isTokenExpired(token);
    }
    isAdmin() {
        const token = localStorage.getItem('jwt');
        const tokenPayload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
        return tokenPayload.roles[0] === 'ROLE_ADMIN';
    }
    getErrorMessage(error) {
        console.log(error.status);
        switch (error.status) {
            case 422: {
                return "???????????????? ?????????? ?????? ????????????";
            }
            default: {
                return "?????????????????????? ????????????";
            }
        }
    }
    getToken() {
        return localStorage.getItem('jwt');
    }
    getCurrentEmployee() {
        return JSON.parse(localStorage.getItem('employee'));
    }
    logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('employee');
        this.router.navigate(['login']);
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map