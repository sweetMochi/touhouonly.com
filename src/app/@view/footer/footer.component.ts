import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// 系統資源
import { EventService } from 'src/app/@sup';


@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

	/** 活動年份 */
	year: number;

	constructor(
		private eventSup: EventService,
		private aRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		// 取得年份
		this.year = this.eventSup.year(this.aRoute);
	}

}
