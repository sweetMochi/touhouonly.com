import { Component } from '@angular/core';
import { SITE_HOME } from 'src/app/@set';
import { BaseComponent } from 'src/app/@sup/base.component';



/**
 * 通用頁首元件
 */
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less']
})
export class HeaderComponent extends BaseComponent {

	/** 首頁網址 */
	home = SITE_HOME;

	override init(): void {
		// 首頁網址
		this.home = this.eventSup.eventLink(this.event);
	}


}
