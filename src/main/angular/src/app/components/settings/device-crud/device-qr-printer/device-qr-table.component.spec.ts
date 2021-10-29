import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceQrTableComponent } from './device-qr-table.component';

describe('DeviceQrPrinterComponent', () => {
  let component: DeviceQrTableComponent;
  let fixture: ComponentFixture<DeviceQrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceQrTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceQrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
