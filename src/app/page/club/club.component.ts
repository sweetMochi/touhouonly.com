import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SITE_IMAGE } from 'src/app/@set';

// 系統資源
import { EventData } from 'src/app/@set/event';
import { EventService } from 'src/app/@sup/event.service';


@Component({
	selector: 'app-club',
	templateUrl: './club.component.html'
})
export class ClubComponent implements OnInit {


	/** 會場地圖 */
	venueMap = '';

	/** 本屆活動資料 */
	event: EventData;

	/** 活動年份 */
	year: number;

	/** 報名是否截止 */
	signupClosed: boolean;

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
		if (this.event) {
			// 判斷社團報名是否截止
			this.signupClosed = this.eventSup.expired(this.event.signupClosedDate);

			if (this.event.venueMap) {
				this.venueMap = `${SITE_IMAGE}/event/venue/${this.event.year}.jpg`;
			}

		}
	}

}
