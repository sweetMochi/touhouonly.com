import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 系統資源
import { EventData } from 'src/app/@set/event';
import { EventService } from 'src/app/@sup/event.service';

@Component({
	selector: 'app-stage2020-logo',
	templateUrl: './stage2020-logo.component.html',
	styleUrls: ['./stage2020-logo.component.less']
})
export class Stage2020LogoComponent implements OnInit {

	/** 本屆活動資料 */
	event: EventData;

	/** 活動年份 */
	year: number;

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
