import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationNtnuComponent } from './location-ntnu.component';

describe('LocationNtnuComponent', () => {
  let component: LocationNtnuComponent;
  let fixture: ComponentFixture<LocationNtnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationNtnuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationNtnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
