import { YearList } from 'src/app/@set/set.const';


/**
 * 報名社團資料
 */
export interface ClubList {
	/** 年分 */
	year: YearList;
	/** 社團列表 */
	data: string[];
}


/**
 * 社團資料
 */
export const ClubList: ClubList[] =  [
	{
		year: 2018,
		data: [
			'甜品嗜好症',
			'命由工作室',
			'長鏡頭＆人機同步',
			'RS\' Studio',
			'白阿尼',
			'白阿尼',
			'東方幻域',
			'嗨到爆',
			'嗨到爆',
			'嗨到爆',
			'小紅帽動漫坊',
			'semiworks',
			'月下修羅場',
			'月下修羅場',
			'東方（罪）攝刊',
			'極夜製作所',
			'哈梅爾吉他手',
			'十字風Crosswind',
			'雕蟲',
			'八百萬堂',
			'恆萃工坊',
			'Yonder Voice',
			'入間人行',
			'揮發性不飛花',
			'∀bb｢E Cider',
			'被世界遺忘X火腿泡芙',
			'被世界遺忘X火腿泡芙',
			'放浪樂園',
			'雨夜上邪',
			'四葉亭販售部-火腿泡芙',
			'夜大大工作室+Zephyr.',
			'夜大大工作室+Zephyr.',
			'星之軒',
			'嬌生慣養',
			'魔理莎控踢口在這裡',
			'二胡實驗室',
			'雀形目鶲亞科',
			'黑名單 by 二維鏡像',
			'黑名單 by 二維鏡像',
			'漸層次',
			'千年組同人本製作委員會',
			'東方聯盟',
			'交叉感染病毒',
			'錯落交織 Interweave',
			'終末狂氣',
			'老婆只有一個但女兒可以有很多個',
			'Karei & ooo'
		]
	}
];
