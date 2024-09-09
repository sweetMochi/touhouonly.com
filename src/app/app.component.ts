import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangType } from './@set';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {

	constructor(
		private translate: TranslateService
	) {

		// Default lang is 正體中文
		const lang: LangType = 'zh-tw';

		// Set lang, but there is one lang _(:3
		this.translate.setDefaultLang(lang);
		this.translate.use(lang);

	}


}
