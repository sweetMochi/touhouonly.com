import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLinkComponent } from './index-link.component';

describe('IndexLinkComponent', () => {
	let component: IndexLinkComponent;
	let fixture: ComponentFixture<IndexLinkComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ IndexLinkComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(IndexLinkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
