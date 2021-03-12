import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2018Component } from './stage2018.component';

describe('Stage2018Component', () => {
	let component: Stage2018Component;
	let fixture: ComponentFixture<Stage2018Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ Stage2018Component ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Stage2018Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
