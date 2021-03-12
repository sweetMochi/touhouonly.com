import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 系統資源
import { EventData } from 'src/app/@set/event';
import { EventService } from 'src/app/@sup/event.service';

// 功能資源
import { INDEX_LINK } from '../link/index-link';

@Component({
	selector: 'app-index-main',
	templateUrl: './index-main.component.html',
	styleUrls: ['./index-main.component.less']
})
export class IndexMainComponent implements OnInit {

	/** 本屆活動資料 */
	event: EventData;

	/** 活動年份 */
	year: number;

	/** 活動規範連結 */
	regulationsLink = 'visitor';

	/** 報名是否截止 */
	signupClosed: boolean;

	/** 社群連結 */
	links = INDEX_LINK;

	constructor(
		private eventSup: EventService,
		private aRoute: ActivatedRoute
	) { }


	ngOnInit(): void {
		// 取得年份
		this.year = this.eventSup.year(this.aRoute);
		// 取得活動資料
		this.event = this.eventSup.find(this.year);
		// 如果有活動資料
		if ( this.event ) {
			// 判斷社團報名是否截止
			this.signupClosed = this.eventSup.expired(this.event.signupClosedDate);
		}
	}

}
