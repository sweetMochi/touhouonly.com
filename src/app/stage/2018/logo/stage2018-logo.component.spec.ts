import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2018LogoComponent } from './stage2018-logo.component';

describe('Stage2018LogoComponent', () => {
	let component: Stage2018LogoComponent;
	let fixture: ComponentFixture<Stage2018LogoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ Stage2018LogoComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Stage2018LogoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
