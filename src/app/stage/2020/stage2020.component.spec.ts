import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2020Component } from './stage2020.component';

describe('Stage2020Component', () => {
  let component: Stage2020Component;
  let fixture: ComponentFixture<Stage2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
