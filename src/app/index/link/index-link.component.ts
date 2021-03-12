import { Component, Input, OnInit } from '@angular/core';
import { IndexLink } from './index-link';

@Component({
	selector: 'app-index-link',
	templateUrl: './index-link.component.html',
	styleUrls: ['./index-link.component.less']
})
export class IndexLinkComponent implements OnInit {

	/** 項目名稱 */
	@Input() item: IndexLink;

	constructor() { }

	ngOnInit(): void {
	}

}
