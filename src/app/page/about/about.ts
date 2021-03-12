import { YearList } from 'src/app/@set/set.const';


/**
 * 素材連結項目
 */
export interface AboutLink {
	/** 網址 */
	url: string;
	/** 標題 */
	title: string;
}


/**
 * 年度節目表
 */
export interface AboutSchedule {
	/** 年分 */
	year: YearList;
	/** 活動時間 */
	list: string[];
}


/**
 * 節目表，對應文字於翻譯檔內
 */
export const ABOUT_SCHEDULE: AboutSchedule[] = [
	{
		year: 2021,
		list: [
			'8：30',
			'9：30',
			'10：30 - 14：00',
			'14：00 - 15：00',
			'14：00 - 15：00',
			'15：20 - 16：00'
		]
	},
	{
		year: 2020,
		list: [
			'8：30',
			'9：30',
			'10：30 - 14：00',
			'14：00 - 15：00',
			'14：00 - 15：00',
			'15：20 - 16：00'
		]
	},
	{
		year: 2018,
		list: [
			'9：00',
			'9：30',
			'10：30 - 15：30',
			'14：00 - 14：15',
			'14：30 - 15：30',
			'15：30 - 16：00'
		]
	}
];


/** 素材列表 */
export const ABOUT_LINK: AboutLink[] = [
	{
		url: '//pakutaso.com/20140232043post-3818.html',
		title: '積雪の鹽竈神社のフリー素材',
	},
	{
		url: '//pakutaso.com/20181107309post-18388.html',
		title: '玉前神社の赤い鳥居（千葉県一宮町）のフリー素材',
	},
	{
		url: '//pakutaso.com/20141012289post-4696.html',
		title: '雪が舞うのフリー素材',
	},
	{
		url: '//pakutaso.com/20151240356post-6494.html',
		title: '夜間、舞い散る雪と傘をさす人のフリー素材',
	},
	{
		url: '//pakutaso.com/20180828213post-16950.html',
		title: '晴天と積乱雲と電柱のフリー素材',
	},
	{
		url: '//pakutaso.com/20120841222post-1818.html',
		title: '木目のフリー素材',
	},
	{
		url: 'https://www.pakutaso.com/20180336078post-15583.html',
		title: 'さくらのはなの写真素材'
	}
];
