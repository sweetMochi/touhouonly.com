import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2025Component } from './stage2025.component';

describe('Stage2025Component', () => {
    let component: Stage2025Component;
    let fixture: ComponentFixture<Stage2025Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Stage2025Component]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Stage2025Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
