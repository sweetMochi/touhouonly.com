import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 系統資源
import { EventData } from 'src/app/@set/event';
import { EventService } from 'src/app/@sup/event.service';

@Component({
	selector: 'app-logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit {

	/** 本屆活動資料 */
	event: EventData;

	/** 活動年份 */
	year: number;

    /** 是否為主視覺 */
    @Input() isStage = false;

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


    /**
     * 顯示 LOGO 年份樣式
     */
    logoYearStyle(): string {
        return this.isStage ? `logo-${this.year}` : '';
    }


}
