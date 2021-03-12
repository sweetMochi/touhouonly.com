import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2020LogoComponent } from './stage2020-logo.component';

describe('Stage2020LogoComponent', () => {
	let component: Stage2020LogoComponent;
	let fixture: ComponentFixture<Stage2020LogoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ Stage2020LogoComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Stage2020LogoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
