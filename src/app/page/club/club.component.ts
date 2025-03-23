import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData, SITE_IMAGE, YearList } from '../../@set';
import { EventService } from '../../@sup';



@Component({
	selector: 'app-club',
	templateUrl: './club.component.html',
	standalone: false
})
export class ClubComponent implements OnInit {


	/** 會場地圖 */
	venueMap = '';

	/** 本屆活動資料 */
	event: EventData | null = null;

	/** 活動年份 */
	year: YearList | null = null;

	/** 報名是否截止 */
	signupClosed = false;

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
