import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAddDeviceComponent } from './selector-add-device.component';

describe('SelectorAddDeviceComponent', () => {
  let component: SelectorAddDeviceComponent;
  let fixture: ComponentFixture<SelectorAddDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorAddDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorAddDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
