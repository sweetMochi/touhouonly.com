import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EVENT_DATA, EventData, YEAR_LIST, YearList } from '../../@set';
import { INDEX_YEAR_IMAGE } from './index-year';
import { EventService } from '../../@sup';



/**
 * 年份列表元件
 */
@Component({
	selector: 'app-index-year',
	templateUrl: './index-year.component.html',
	styleUrls: ['./index-year.component.less'],
	standalone: false
})
export class IndexYearComponent implements OnInit {

	/** 當前年份 */
	year: YearList = YEAR_LIST[0];

	/** 歷屆活動資料 */
	list = EVENT_DATA;

	/** 宣傳圖片目錄 */
	src = INDEX_YEAR_IMAGE;

	constructor(
		public eventSup: EventService,
		private aRoute: ActivatedRoute,
		private i18n: TranslateService
	) { }


	ngOnInit(): void {
		// 取得年份
		this.year = this.eventSup.year(this.aRoute);
	}


	/**
	 * 取得路由網址
	 * @param item 活動資料
	 */
	link(item: EventData): string {

		// 如果是外部網站
		if (item.homeSite) {
			return '';
		}

		// 如果是本屆活動
		if (item.thisYear) {
			return '/';
		}

		return '/' + item.year;
	}


	/**
	 * 取得圖片路徑
	 * @param item 活動資料
	 */
	image(item: EventData): string {
		return this.src + '/' + item.banner;
	}


	/**
	 * 第 X 屆翻譯文字
	 * @param i 排序
	 */
	i18nNth(i: number): string {
		return this.i18n.instant('site.nthX', { x: this.list.length - i });
	}


}
