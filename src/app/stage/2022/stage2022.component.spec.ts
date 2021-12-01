import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2022Component } from './stage2022.component';

describe('Stage2022Component', () => {
  let component: Stage2022Component;
  let fixture: ComponentFixture<Stage2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
