import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YEAR_LIST, YearList, EventData } from 'src/app/@set';
import { EventService } from 'src/app/@sup/event.service';



/**
 * 2018 LOGO 元件
 */
@Component({
	selector: 'app-stage2018-logo',
	templateUrl: './stage2018-logo.component.html',
	styleUrls: ['./stage2018-logo.component.less']
})
export class Stage2018LogoComponent implements OnInit {

	/** 本屆活動資料 */
	event: EventData = null;

	/** 活動年份 */
	year: YearList = YEAR_LIST[0];

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
