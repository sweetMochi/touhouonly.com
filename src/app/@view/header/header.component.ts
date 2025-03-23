import { Component } from '@angular/core';
import { BaseComponent } from '../../@sup/base.component';
import { SITE_HOME } from '../../@set';



/**
 * 通用頁首元件
 */
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
	standalone: false
})
export class HeaderComponent extends BaseComponent {

	/** 首頁網址 */
	home = SITE_HOME;

	override init(): void {
		// 首頁網址
		let home = this.eventSup.eventLink(this.event);
		this.home = home ? home : this.home;
	}


}
