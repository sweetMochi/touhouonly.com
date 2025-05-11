import { LANG_LIST, YEAR_LIST } from './site.const';


/**
 * 語系類型
 *
 * 		'zh-tw': 繁體
 * 		'ja-jp': 日文
 * 		'en-us': 英文
 */
export type LangType = typeof LANG_LIST[number];


/**
 * 年份範圍
 */
export type YearList = typeof YEAR_LIST[number];


/**
 * 路由格式
 */
export interface PageData {
	/** 年分 */
	year: YearList;
}


/**
 * 活動資料
 */
export interface EventData {
	/** 活動屆數 */
	nth: number;
	/** 活動年份 */
	year: YearList;
	/** 活動日期 */
	date: string;
	/** 攤位數量 */
	offer: number;
	/** 報名網址 */
	signupLink: string;
	/** 報名截止日期 */
	signupClosedDate: string;
	/** 當前活動 */
	thisYear?: boolean;
	/** 是否已經製作會場地圖 */
	venueMap?: boolean;
	/** 是否已經製作社團列表 */
	clubList?: boolean;
	/** 是否有獨立網站 */
	homeSite?: string;
	/** 是否有副標題 */
	subtitle?: boolean;
	/** 看板圖 */
	banner: string;
	/** 是否為師大地址 */
	addressNTNU?: boolean;
}
