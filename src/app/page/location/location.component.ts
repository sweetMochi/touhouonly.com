import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { YearList } from 'src/app/@set';
import { EventService } from 'src/app/@sup';
import { LOCATION_PLACE } from './location';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit, AfterViewInit {

	/** 取得地圖 */
	@ViewChild(GoogleMap) map: GoogleMap;

	/** 會場地點 */
	place = LOCATION_PLACE;

	/** 今年年份 */
	year: YearList;

	constructor(
		private eventSup: EventService,
		private aRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.year = this.eventSup.year(this.aRoute);
	}

	ngAfterViewInit(): void {
		// const service = new google.maps.places.PlacesService(this.map.googleMap);
		// service.getDetails(
		// 	{
		// 		placeId: 'ChIJ720FM02pQjQRkDfu-c63hRU'
		// 	},
		// 	data => {
		// 		this.map.center = data.geometry.location;
		// 		console.log(data);
		// 	}
		// );
	}

}
