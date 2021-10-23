import { NgModule } from '@angular/core';
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
import { DeviceQrPrinterComponent } from './settings/device-crud/device-qr-printer/device-qr-printer.component';
import { SettingsComponent } from './settings/settings.component';
import { RecordFormComponent } from './journal/record-form/record-form.component';
import { UserAddFormComponent } from './settings/user-crud/user-add-form/user-add-form.component';
import { UserEditFormComponent } from './settings/user-crud/user-edit-form/user-edit-form.component';
import { PositionFormComponent } from './settings/position-crud/position-form/position-form.component';
import { DeviceFormComponent } from './settings/device-crud/device-form/device-form.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register-devices', component: RegisterDeviceComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'settings', component: SettingsComponent}
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
    DeviceQrPrinterComponent,
    SettingsComponent,
    RecordFormComponent,
    UserAddFormComponent,
    UserEditFormComponent,
    PositionFormComponent,
    DeviceFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
