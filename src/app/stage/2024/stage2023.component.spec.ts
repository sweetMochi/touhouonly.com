import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2024Component } from './stage2024.component';

describe('Stage2024Component', () => {
    let component: Stage2024Component;
    let fixture: ComponentFixture<Stage2024Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Stage2024Component]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Stage2024Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
