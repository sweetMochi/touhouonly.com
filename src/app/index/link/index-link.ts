import { SOCIAL_LINK } from '../../@set';



/**
 * 連結項目
 */
export interface IndexLink {
	/** 連結網址 */
	url: string;
	/** 圖標 */
	icon: string;
	/** 識別名稱 */
	id: string;
}


/**
 * 連結列表
 */
export const INDEX_LINK: IndexLink[] = [
	{
		url: SOCIAL_LINK.facebook,
		icon: 'facebook-f',
		id: 'facebook'
	},
	{
		url: SOCIAL_LINK.twitter,
		icon: 'twitter',
		id: 'twitter'
	},
	{
		url: SOCIAL_LINK.plurk,
		icon: 'product-hunt',
		id: 'plurk'
	}
];

