import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageData, YEAR_LIST, YearList } from '../@set';



/**
 * 首頁
 */
@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, OnDestroy {

	/** 當前年份 */
	year: YearList = YEAR_LIST[0];

	/** 是否為內頁 */
	isPage = false;


	constructor(
		private renderer: Renderer2,
		private aRoute: ActivatedRoute
	) { }


	ngOnInit(): void {

		// 判斷當前是否為內頁
		this.isPage = this.aRoute.snapshot.firstChild ? true : false;

		// 更新年份
		this.updateYear();

		// 增加年份樣式
		this.renderer.addClass(document.body, 'year-' + this.year);

	}


	/**
	 * 路由事件
	 */
	scrollToTitle(): void {
		this.updateYear();

		setTimeout(() => {
			// 尋找錨點
			const anchor = document.querySelector(this.isPage ? '#anchor-page' : '#anchor-index');

			// 如果有找到錨點
			if (anchor) {
				// 捲動到錨點
				anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, 100);
	}


	/**
	 * 更新年份
	 */
	updateYear(): void {
		// 取得當前路由年份
		let data = this.aRoute.routeConfig.data as PageData;
		this.year = data ? data.year : null;
	}


	/**
	 * 路由啟動
	 */
	activate(): void {

		this.scrollToTitle();

		// 變更為內頁
		this.isPage = true;
	}


	/**
	 * 路由關閉
	 */
	deactivate(): void {

		this.scrollToTitle();

		// 變更為首頁
		this.isPage = false;
	}


	ngOnDestroy(): void {
		// 移除年份
		this.renderer.removeClass(document.body, 'year-' + this.year);
	}


}
