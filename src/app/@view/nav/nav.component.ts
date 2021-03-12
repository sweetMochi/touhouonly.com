import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EventData, EVENT_DATA } from 'src/app/@set';

// 系統資源
import { SITE_HOME } from 'src/app/@set/set.const';
import { EventService } from 'src/app/@sup';


@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: [
		'./nav.component.less',
		'./nav-mobile.component.less',
	]
})
export class NavComponent implements OnInit, OnDestroy {

	/** 退訂管理 */
	private ngUnsubscribe = new Subject();

	/** 指定年份 */
	@Input() year: number;

	/** 活動資料 */
	event: EventData;

	/** 手機板側欄開啟狀態 */
	show: boolean;

	/** 首頁網址 */
	home = SITE_HOME;

	/** 選單 */
	list: Routes = [];

	constructor(
		private router: Router,
		private eventSup: EventService
	) { }


	/**
	 * 開啟側欄
	 * @param show 是否開啟
	 */
	userShow( show: boolean ): void {
		this.show = show;
	}


	/**
	 * 生成首頁網址
	 */
	homeUrl(): void {
		// 尋找活動資料
		this.event = this.eventSup.find(this.year);
		// 更新首頁網址
		this.home = this.event.thisYear ? '/' : '/' + this.event.year;
	}


	ngOnInit(): void {
		// 更新首頁網址
		this.homeUrl();
		// 從路由建立選單列表
		// 必須為有路徑的路由
		this.list = this.router.config[0].children ? this.router.config[0].children.filter( item => item.path ) : [];
		// 關注葉面切換事件
		this.router.events.pipe(
			filter( event => event instanceof NavigationEnd )
		).subscribe( () => {
			// 關閉選單
			this.show = false;
			// 更新首頁網址
			this.homeUrl();
		});
	}

	ngOnDestroy(): void {
		// 解除所有訂閱，包括自己
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

}
