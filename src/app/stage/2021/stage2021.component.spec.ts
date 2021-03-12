import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2021Component } from './stage2021.component';

describe('Stage2021Component', () => {
  let component: Stage2021Component;
  let fixture: ComponentFixture<Stage2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
