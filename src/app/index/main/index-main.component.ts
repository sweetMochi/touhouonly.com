import { Component } from '@angular/core';
import { INDEX_LINK } from '../link/index-link';
import { BaseComponent } from '../../@sup/base.component';



/**
 * 首頁主要元件
 */
@Component({
	selector: 'app-index-main',
	templateUrl: './index-main.component.html',
	styleUrls: ['./index-main.component.less'],
	standalone: false
})
export class IndexMainComponent extends BaseComponent {


	/** 活動規範連結 */
	regulationsLink = 'visitor';

	/** 報名是否截止 */
	signupClosed = false;

	/** 社群連結 */
	links = INDEX_LINK;


	override init(): void {
		// 如果有活動資料
		if (this.event) {
			// 判斷社團報名是否截止
			this.signupClosed = this.eventSup.expired(this.event.signupClosedDate);
		}
	}


}
