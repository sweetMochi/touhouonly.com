import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


// System
import { LangType } from './@set/set.const';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {

	constructor(
		private router: Router,
		private translate: TranslateService
	) {

		// Default lang is 正體中文
		const lang: LangType = 'zh-tw';

		// Set lang, but there is one lang _(:3
		this.translate.setDefaultLang(lang);
		this.translate.use(lang);

		// Watch router event
		this.router.events.subscribe(event => {
			if ( event instanceof NavigationEnd ) {
				// Send GA page view data
				ga('set', 'page', event.urlAfterRedirects);
				ga('send', 'pageview');
			}
		});

	}


}
