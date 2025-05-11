import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../@sup/base.component';



/**
 * LOGO 元件
 */
@Component({
	selector: 'app-logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.less'],
	standalone: false
})
export class LogoComponent extends BaseComponent {


    /** 是否為主視覺 */
    @Input() isStage = false;


    /**
     * 顯示 LOGO 年份樣式
     */
    logoYearStyle(): string {
        return this.isStage ? `logo-${this.year}` : `logo-header-${this.year}`;
    }


}
