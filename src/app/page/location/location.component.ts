import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { LOCATION_PLACE } from './location';
import { YearList } from '../../@set';
import { EventService } from '../../@sup';


@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	standalone: false
})
export class LocationComponent implements OnInit {

	/** 取得地圖 */
	@ViewChild(GoogleMap) map: GoogleMap | null = null;

	/** 會場地點 */
	place = LOCATION_PLACE;

	/** 今年年份 */
	year: YearList | null = null;

	constructor(
		private eventSup: EventService,
		private aRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.year = this.eventSup.year(this.aRoute);
	}

}
