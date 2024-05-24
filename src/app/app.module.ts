import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import {
	HTTP_INTERCEPTORS,
	HttpClient,
	HttpClientModule,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
	IndexComponent,
	IndexLinkComponent,
	IndexMainComponent,
	IndexYearComponent,
} from './index';

// Stage
import {
    Stage2024Component,
	Stage2023Component,
	Stage2020Component,
	Stage2020LogoComponent,
	Stage2018Component,
	Stage2018LogoComponent,
} from './stage';


// View
import {
	FooterComponent,
	HeaderComponent,
	LogoComponent,
	NavComponent,
} from './@view';


// Page
import {
	AboutComponent,
	ClubComponent,
	ComingComponent,
	CosplayComponent,
	LocationComponent,
	LocationNtnuComponent,
	VisitorComponent
} from './page';
import { DateWeekPipe } from './@sup/date-week.pipe';


@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		IndexLinkComponent,
		IndexMainComponent,
		IndexYearComponent,
		// Stage
		Stage2024Component,
		Stage2023Component,
		Stage2020Component,
		Stage2020LogoComponent,
		Stage2018Component,
		Stage2018LogoComponent,
		// View
		FooterComponent,
		HeaderComponent,
		LogoComponent,
		NavComponent,
		// Page
		AboutComponent,
		ClubComponent,
		ComingComponent,
		CosplayComponent,
		LocationComponent,
		LocationNtnuComponent,
		VisitorComponent,
		DateWeekPipe,
	],
	imports: [
		BrowserModule,
		GoogleMapsModule,
		AppRoutingModule,
		// ngx-translate and the loader module
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }


/**
 * 加載 Json 語系檔案
 * @param [http] htpp 功能
 */
export function createTranslateLoader(http: HttpClient): TranslateLoader {
	return new TranslateHttpLoader(http, './assets/lang/', '.json');
}
