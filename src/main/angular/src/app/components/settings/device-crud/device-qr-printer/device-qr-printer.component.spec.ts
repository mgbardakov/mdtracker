import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceQrPrinterComponent } from './device-qr-printer.component';

describe('DeviceQrPrinterComponent', () => {
  let component: DeviceQrPrinterComponent;
  let fixture: ComponentFixture<DeviceQrPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceQrPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceQrPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
