import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ResolveEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


// 系統資源
import { SITE_HOME } from '../@set/set.const';
import { EVENT_DATA } from '../@set';



@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, OnDestroy {

	/** 退訂管理 */
	private ngUnsubscribe = new Subject();

	/** 當前年份 */
	year: number;

	/** 活動資料 */
	event = EVENT_DATA;


	isPage: boolean;


	constructor(
		private router: Router,
		private renderer: Renderer2,
		private aRoute: ActivatedRoute
	) { }


	activate(): void {
		this.isPage = true;
	}

	deactivate(): void {
		this.isPage = false;
	}


	ngOnInit(): void {

		this.router.events.pipe(
			// 停止關注時機
			takeUntil(this.ngUnsubscribe),
			// 只使用結束事件
			filter( event => event instanceof NavigationEnd || event instanceof ResolveEnd  )
		).subscribe( () => {

			// 取得當前路由年份
			this.year = this.aRoute.routeConfig.data ? this.aRoute.routeConfig.data.year : null;

			setTimeout( () => {
				// 尋找錨點
				const anchor = document.querySelector( this.isPage ? '#anchor-page' : '#anchor-index' );
				// 如果有找到錨點
				if ( anchor ) {
					// 捲動到錨點
					anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			});
		});

		// 取得當前路由年份
		this.year = this.aRoute.routeConfig.data ? this.aRoute.routeConfig.data.year : null;

		// 增加年份
		this.renderer.addClass(document.body, 'year-' + this.year);

	}


	ngOnDestroy(): void {
		// 解除所有訂閱，包括自己
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
		// 移除年份
		this.renderer.removeClass(document.body, 'year-' + this.year);
	}


}
