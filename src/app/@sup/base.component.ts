import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventData, YEAR_LIST, YearList } from '../@set';
import { EventService } from './event.service';



/**
 * 基礎元件
 */
@Injectable()
export abstract class BaseComponent implements OnInit {


	/** 本屆活動資料 */
	event: EventData | null = null;

	/** 活動年份 */
	year: YearList = YEAR_LIST[0];

	constructor(
		public eventSup: EventService,
		public aRoute: ActivatedRoute,
		public router: Router
	) { }


	ngOnInit(): void {
		// 取得年份
		this.year = this.eventSup.year(this.aRoute);
		// 取得活動資料
		this.event = this.eventSup.find(this.year);
		// 初始化
		this.init();
	}


	/**
	 * 初始化方法
	 * @override
	 */
	init(): void {
		// 定義自己的方法
	}


}
