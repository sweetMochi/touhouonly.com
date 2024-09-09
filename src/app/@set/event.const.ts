import { EventData } from './type';



/**
 * 歷年活動資料
 */
export const EVENT_DATA: EventData[] = [
	{
		nth: 6,
		year: '2024',
		date: '2024-07-06',
		offer: 60,
		thisYear: true,
		banner: '2024.jpg',
		signupLink: 'https://www.accupass.com/go/touhouonly6',
		signupClosedDate: '2024-06-02',
		venueMap: true
	},
	{
		nth: 5,
		year: '2023',
		date: '2023-06-11',
		offer: 50,
		banner: '2023.jpg',
		signupLink: 'https://www.accupass.com/go/touhouonly5in2023',
		signupClosedDate: '2023-05-11',
		venueMap: true
	},
	{
		nth: 4,
		year: '2020',
		date: '2020-01-05',
		offer: 100,
		banner: '2020.jpg',
		signupLink: 'https://www.accupass.com/go/touhounoly4',
		signupClosedDate: '2020-12-05',
		subtitle: true,
		venueMap: true
	},
	{
		nth: 3,
		year: '2018',
		date: '2018-10-20',
		offer: 80,
		banner: '2018.jpg',
		signupLink: 'https://www.accupass.com/go/touhouonly3',
		signupClosedDate: '2018-09-20',
		addressNTNU: true,
		subtitle: true,
		venueMap: true
	},
	{
		nth: 2,
		year: '2016',
		date: '2016-04-30',
		offer: 100,
		banner: '2016.jpg',
		signupLink: 'https://www.accupass.com/go/touhouonly2',
		signupClosedDate: '2016-03-10',
		addressNTNU: true,
		subtitle: true,
		venueMap: true,
		homeSite: 'http://home.touhouonly.com/2016'
	},
	{
		nth: 1,
		year: '2015',
		date: '2015-02-22',
		offer: 100,
		banner: '2015.jpg',
		signupLink: 'https://www.accupass.com/go/touhouonly',
		signupClosedDate: '2018-01-22',
		venueMap: true,
		homeSite: 'http://home.touhouonly.com'
	},
] as const;
