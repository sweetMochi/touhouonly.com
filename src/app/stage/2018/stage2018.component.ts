import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventData } from 'src/app/@set/event';
import { EventService } from 'src/app/@sup/event.service';

@Component({
	selector: 'app-stage2018',
	templateUrl: './stage2018.component.html',
	styleUrls: ['./stage2018.component.less']
})
export class Stage2018Component implements OnInit {

	/** 活動年份 */
	year: number;

	/** 本屆活動資料 */
	event: EventData;

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
