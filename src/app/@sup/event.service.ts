import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData } from '../@set/event';
import { EVENT_DATA } from '../@set/event';
import { YearList } from '../@set/set.const';

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
	year( route: ActivatedRoute ): YearList {

		if ( route.routeConfig.data ) {
			return  route.routeConfig.data['year'];
		}

		if ( route.parent.routeConfig && route.parent.routeConfig.data ) {
			return route.parent.routeConfig.data['year'];
		}

		return null;
	}


	/**
	 * 依活動年份尋找資料
	 * @param year 活動年份
	 */
	find( year: number ): EventData {
		return this.data.find( item => {
			return item.year === year;
		});
	}

}
