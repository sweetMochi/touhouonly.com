import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 系統資源
import { EventData } from 'src/app/@set';
import { EventService } from 'src/app/@sup';
import { SITE_HOME } from 'src/app/@set';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

	/** 首頁網址 */
	home = SITE_HOME;

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
		// 首頁網址
		// 如果是今年活動，則為 "/"
		// 之前的活動則為 "/" + year
		if ( this.event ) {
			this.home = this.event.thisYear ? '/' : '/' + this.event.year;
		}
	}

}
