import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { IndexYearComponent } from './index-year.component';
import { EventService } from 'src/app/@sup';
import { EVENT_DATA } from 'src/app/@set';
import { INDEX_YEAR_IMAGE } from './index-year';

class MockEventService {
    // Mock any methods you need from EventService
}

describe('IndexYearComponent', () => {
    let component: IndexYearComponent;
    let fixture: ComponentFixture<IndexYearComponent>;
    let mockEventService: MockEventService;
    let mockActivatedRoute;

    beforeEach(async () => {
        mockEventService = new MockEventService();
        mockActivatedRoute = {
            params: of({ year: '2023' }) // Mock route parameters
        };

        await TestBed.configureTestingModule({
            declarations: [IndexYearComponent],
            providers: [
                { provide: EventService, useValue: mockEventService },
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ]
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

    it('should have the correct event data', () => {
        expect(component.list).toEqual(EVENT_DATA);
    });

    it('should have the correct image source', () => {
        expect(component.src).toEqual(INDEX_YEAR_IMAGE);
    });
});
