import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SITE_IMAGE, YearList } from '../../@set';
import { EventService } from '../../@sup';
import { ABOUT_LINK, ABOUT_SCHEDULE, AboutSchedule } from './about';



@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	standalone: false
})
export class AboutComponent implements OnInit {

	/** 當前年份 */
	year: YearList | null = null;

	/** 本屆節目表 */
	schedule: AboutSchedule | null = null;

	/** 素材連結 */
	link = ABOUT_LINK;

	/** 圖片網址 */
	image = SITE_IMAGE;

	constructor(
		private eventSup: EventService,
		private aRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		// 取得本屆年份
		this.year = this.eventSup.year(this.aRoute);

		// 取得本屆節目表
		let schedule = ABOUT_SCHEDULE.find( item => item.year === this.year);
		this.schedule = schedule ? schedule : null;
	}

}
