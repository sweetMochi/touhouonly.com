import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ResolveEnd, Router } from '@angular/router';
import { of } from 'rxjs';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
	let component: IndexComponent;
	let fixture: ComponentFixture<IndexComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ IndexComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(IndexComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('IndexComponent', () => {
		let component: IndexComponent;
		let fixture: ComponentFixture<IndexComponent>;
		let router: Router;
		let renderer: Renderer2;
		let activatedRoute: ActivatedRoute;

		beforeEach(async () => {
			const routerMock = {
				events: of(new NavigationEnd(0, '', ''), new ResolveEnd(0, '', '', null))
			};
			const rendererMock = {
				addClass: jasmine.createSpy('addClass'),
				removeClass: jasmine.createSpy('removeClass')
			};
			const activatedRouteMock = {
				routeConfig: { data: { year: 2023 } }
			};

			await TestBed.configureTestingModule({
				declarations: [ IndexComponent ],
				providers: [
					{ provide: Router, useValue: routerMock },
					{ provide: Renderer2, useValue: rendererMock },
					{ provide: ActivatedRoute, useValue: activatedRouteMock }
				]
			})
			.compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(IndexComponent);
			component = fixture.componentInstance;
			router = TestBed.inject(Router);
			renderer = TestBed.inject(Renderer2);
			activatedRoute = TestBed.inject(ActivatedRoute);
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should activate the page', () => {
			component.activate();
			expect(component.isPage).toBeTrue();
		});

		it('should deactivate the page', () => {
			component.deactivate();
			expect(component.isPage).toBeFalse();
		});

		it('should set the year and add class on init', () => {
			component.ngOnInit();
			expect(component.year).toBe(2023);
			expect(renderer.addClass).toHaveBeenCalledWith(document.body, 'year-2023');
		});

		it('should remove class on destroy', () => {
			component.ngOnDestroy();
			expect(renderer.removeClass).toHaveBeenCalledWith(document.body, 'year-2023');
		});

		it('should unsubscribe on destroy', () => {
			const ngUnsubscribeSpy = spyOn(component['ngUnsubscribe'], 'next');
			const ngUnsubscribeCompleteSpy = spyOn(component['ngUnsubscribe'], 'complete');
			component.ngOnDestroy();
			expect(ngUnsubscribeSpy).toHaveBeenCalledWith(null);
			expect(ngUnsubscribeCompleteSpy).toHaveBeenCalled();
		});

		it('should scroll to anchor on navigation end', (done) => {
			// spyOn(document, 'querySelector').and.returnValue({
			// 	scrollIntoView: jasmine.createSpy('scrollIntoView')
			// });
			// component.ngOnInit();
			// setTimeout(() => {
			// 	expect(document.querySelector).toHaveBeenCalledWith('#anchor-index');
			// 	done();
			// });
		});
	});
});
