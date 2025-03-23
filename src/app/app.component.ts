import { Component } from '@angular/core';
import { LangType } from './@set';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.less',
	standalone: false
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
