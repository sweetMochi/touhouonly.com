import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

import { LOCATION_NTNU_PLACE } from './location-ntnu';

@Component({
	selector: 'app-location-ntnu',
	templateUrl: './location-ntnu.component.html',
	styleUrls: ['./location-ntnu.component.less']
})
export class LocationNtnuComponent implements OnInit {

	/** 取得地圖 */
	@ViewChild(GoogleMap) map: GoogleMap;

	/** 會場地點 */
	place = LOCATION_NTNU_PLACE;

	constructor() { }

	ngOnInit(): void {
	}

}
