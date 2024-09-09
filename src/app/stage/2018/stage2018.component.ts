import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YEAR_LIST, YearList, EventData } from 'src/app/@set';
import { EventService } from 'src/app/@sup/event.service';



/**
 * 2018 主視覺
 */
@Component({
	selector: 'app-stage2018',
	templateUrl: './stage2018.component.html',
	styleUrls: ['./stage2018.component.less']
})
export class Stage2018Component implements OnInit {

	/** 活動年份 */
	year: YearList = YEAR_LIST[0];

	/** 本屆活動資料 */
	event: EventData = null;

	constructor(
		private eventSup: EventService,
		private aRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		// 取得年份
		this.year = this.eventSup.year(this.aRoute);
		// 取得活動資料
		this.event = this.eventSup.find(this.year);
	}

}
