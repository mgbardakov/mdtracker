import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module'
import {ReactiveFormsModule} from "@angular/forms";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { SelectorAddDeviceComponent } from './register-device/selector-add-device/selector-add-device.component';
import { QrAddDeviceComponent } from './register-device/qr-add-device/qr-add-device.component';
import { JournalComponent } from './journal/journal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {FlexModule} from "@angular/flex-layout";
import { OverviewComponent } from './overview/overview.component';
import { UserCrudComponent } from './settings/user-crud/user-crud.component';
import { PositionCrudComponent } from './settings/position-crud/position-crud.component';
import { DeviceCrudComponent } from './settings/device-crud/device-crud.component';
import { DeviceQrTableComponent } from './settings/device-crud/device-qr-printer/device-qr-table.component';
import { SettingsComponent } from './settings/settings.component';
import { RecordFormComponent } from './journal/record-form/record-form.component';
import { UserAddFormComponent } from './settings/user-crud/user-add-form/user-add-form.component';
import { UserEditFormComponent } from './settings/user-crud/user-edit-form/user-edit-form.component';
import { PositionFormComponent } from './settings/position-crud/position-form/position-form.component';
import { DeviceFormComponent } from './settings/device-crud/device-form/device-form.component';
import {QRCodeModule} from "angular2-qrcode";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {AuthGuardService} from "../services/security/auth-guard.service";
import {RoleGuardService} from "../services/security/role-guard.service";
import {A} from "@angular/cdk/keycodes";
import {JWT_OPTIONS, JwtHelperService, JwtModule} from "@auth0/angular-jwt";
import {RecordService} from "../services/record.service";
import {TokenInterceptor} from "../services/security/interceptors/token.interceptor";
import {EmployeeService} from "../services/employee.service";
import {DeviceService} from "../services/device.service";
import { ErrorComponent } from './error/error.component';
import {PositionService} from "../services/position.service";
import {UserService} from "../services/user.service";
import {RegisterDeviceService} from "../services/register-device.service";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register-devices', component: RegisterDeviceComponent, canActivate: [AuthGuardService]},
  {path: 'journal', component: JournalComponent, canActivate: [AuthGuardService]},
  {path: 'overview', component: OverviewComponent, canActivate: [RoleGuardService],
    data: {expectedRole: 'ROLE_ADMIN'}},
  {path: 'settings', component: SettingsComponent, canActivate: [RoleGuardService],
    data: {expectedRole: 'ROLE_ADMIN'}}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    HomeComponent,
    RegisterDeviceComponent,
    SelectorAddDeviceComponent,
    QrAddDeviceComponent,
    JournalComponent,
    OverviewComponent,
    UserCrudComponent,
    PositionCrudComponent,
    DeviceCrudComponent,
    DeviceQrTableComponent,
    SettingsComponent,
    RecordFormComponent,
    UserAddFormComponent,
    UserEditFormComponent,
    PositionFormComponent,
    DeviceFormComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FlexModule,
    QRCodeModule,
    ZXingScannerModule,
    HttpClientModule,
    JwtModule
  ],
  providers: [CookieService,
    AuthGuardService,
    RoleGuardService,
    JwtHelperService,
    RecordService,
    EmployeeService,
    DeviceService,
    PositionService,
    UserService,
    RegisterDeviceService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
      bootstrap: [AppComponent]
})
export class AppModule { }
