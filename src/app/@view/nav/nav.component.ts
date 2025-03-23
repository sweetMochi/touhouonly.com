import { Component } from '@angular/core';
import { NavigationEnd, Routes } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SITE_HOME } from '../../@set';
import { BaseComponent } from '../../@sup/base.component';



/**
 * 選單元件
 */
@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: [
		'./nav.component.less',
		'./nav-mobile.component.less',
	],
	standalone: false
})
export class NavComponent extends BaseComponent {


	/** 手機板側欄開啟狀態 */
	show = false;

	/** 首頁網址 */
	home = SITE_HOME;

	/** 選單 */
	list: Routes = [];


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
		this.home = this.event?.thisYear ? '/' : '/' + this.event?.year;
	}


	override init(): void {
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


}
