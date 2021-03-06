import { YearList } from './set.const';


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
	/** 是否有獨立網站 */
	homeSite?: string;
	/** 是否有副標題 */
	subtitle?: boolean;
	/** 是否為師大地址 */
	addressNTNU?: boolean;
}


/**
 * 活動行程
 */
export interface EventSchedule {
	time: string;
}



/** 歷年活動資料 */
export const EVENT_DATA: EventData[] = [
	{
		nth: 5,
		year: 2021,
		date: '2021-06-19',
		offer: 50,
		thisYear: true,
		signupLink: 'https://www.accupass.com/go/touhouonly5',
		signupClosedDate: '2021-05-01'
	},
	{
		nth: 4,
		year: 2020,
		date: '2020-01-05',
		offer: 100,
		signupLink: 'https://www.accupass.com/go/touhounoly4',
		signupClosedDate: '2020-12-05',
		subtitle: true,
		venueMap: true
	},
	{
		nth: 3,
		year: 2018,
		date: '2018-10-20',
		offer: 80,
		signupLink: 'https://www.accupass.com/go/touhouonly3',
		signupClosedDate: '2018-09-20',
		addressNTNU: true,
		subtitle: true,
		venueMap: true
	},
	{
		nth: 2,
		year: 2016,
		date: '2016-04-30',
		offer: 100,
		signupLink: 'https://www.accupass.com/go/touhouonly2',
		signupClosedDate: '2016-03-10',
		addressNTNU: true,
		subtitle: true,
		venueMap: true,
		homeSite: 'http://home.touhouonly.com/2016'
	},
	{
		nth: 1,
		year: 2015,
		date: '2015-02-22',
		offer: 100,
		signupLink: 'https://www.accupass.com/go/touhouonly',
		signupClosedDate: '2018-01-22',
		venueMap: true,
		homeSite: 'http://home.touhouonly.com'
	},
];
