import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrAddDeviceComponent } from './qr-add-device.component';

describe('QrAddDeviceComponent', () => {
  let component: QrAddDeviceComponent;
  let fixture: ComponentFixture<QrAddDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrAddDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrAddDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
