import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// 系統資源
import { EventData, YearList } from 'src/app/@set';
import { EventService } from 'src/app/@sup';
import { EVENT_DATA } from 'src/app/@set';

// 功能資源
import { INDEX_YEAR_IMAGE } from './index-year';


@Component({
	selector: 'app-index-year',
	templateUrl: './index-year.component.html',
	styleUrls: ['./index-year.component.less']
})
export class IndexYearComponent implements OnInit {

	/** 當前年份 */
	year: YearList;

	/** 歷屆活動資料 */
	list = EVENT_DATA;

	/** 宣傳圖片目錄 */
	src = INDEX_YEAR_IMAGE;

	constructor(
		private eventSup: EventService,
		private aRoute: ActivatedRoute
	) { }


	/**
	 * 取得路由網址
	 * @param item 活動資料
	 */
	link( item: EventData ): string {

		// 如果是外部網站
		if ( item.homeSite ) {
			return '';
		}

		// 如果是本屆活動
		if ( item.thisYear ) {
			return '/';
		}

		return '/' + item.year;
	}


	/**
	 * 取得圖片路徑
	 * @param item 當前年份
	 */
	image( item: EventData ): string {
		return this.src + '/' + item.banner;
	}


	ngOnInit(): void {
		// 取得年份
		this.year = this.eventSup.year(this.aRoute);
	}

}
