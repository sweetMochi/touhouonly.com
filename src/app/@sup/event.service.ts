import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EVENT_DATA } from '../@set/event.const';
import { EventData, PageData, YEAR_LIST, YearList } from '../@set';



/**
 * 場次資料
 */
@Injectable({
	providedIn: 'root'
})
export class EventService {

	/** 活動資料 */
	data = EVENT_DATA;

	constructor() { }

	/**
	 * 判斷是否過期
	 * @param date 日期
	 */
	expired( date: string ): boolean {
		return new Date() > new Date(date);
	}


	/**
	 * 取得年份
	 * @param route 當前路由
	 */
	year(route: ActivatedRoute): YearList {

		// 取得路由設定
		let data = route.routeConfig?.data as PageData;

		if (data) {
			return data.year;
		}

		// 如果有上層路由設定
		if ( route.parent?.routeConfig && route.parent.routeConfig.data ) {
			let parentData = route.parent.routeConfig.data as PageData;
			return parentData.year;
		}

		return YEAR_LIST[0];
	}


	/**
	 * 依活動年份尋找資料
	 * @param year 活動年份
	 */
	find(year: string | null): EventData | null {

		if (!year) {
			return null;
		}

		let data = this.data.find( item => item.year === year);

		return data ? data : null;
	}


	/**
	 * 活動連結
	 * @param event 活動資料
	 */
	eventLink(event: EventData | null): string {

		if (!event) {
			return '';
		}

		// 如果是今年活動，則為 "/"
		// 之前的活動則為 "/" + year
		return event.thisYear ? '/' : '/' + event.year;
	}


}
