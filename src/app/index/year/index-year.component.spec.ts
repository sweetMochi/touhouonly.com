import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexYearComponent } from './index-year.component';

describe('IndexYearComponent', () => {
  let component: IndexYearComponent;
  let fixture: ComponentFixture<IndexYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
