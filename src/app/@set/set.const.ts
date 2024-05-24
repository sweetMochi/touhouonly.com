

/** 年份範圍 */
export type YearList = 2024 | 2023 | 2020 | 2018 | 2016 | 2015;


/** 首頁網址 */
export const SITE_HOME = '/';


/** 圖片網址 */
export const SITE_IMAGE = '/assets/images';


/** 社群連結 */
export const SOCIAL_LINK = {
	facebook: '//zh-tw.facebook.com/TouhouOnly',
	twitter: '//twitter.com/touhouonly_tw',
	plurk: '//www.plurk.com/TouhouOnly'
};


/**
 * 語系類型
 */
export const LANG_LIST = [
	'zh-tw',
	'ja-jp',
	'en-us'
] as const;

/**
 * 語系類型
 * zh-tw: 繁體
 * ja-jp: 日文
 * en-us: 英文
 */
export type LangType = typeof LANG_LIST[number];
