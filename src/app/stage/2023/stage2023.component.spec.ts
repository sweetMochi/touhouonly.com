import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2023Component } from './stage2023.component';

describe('Stage2023Component', () => {
  let component: Stage2023Component;
  let fixture: ComponentFixture<Stage2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage2023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
