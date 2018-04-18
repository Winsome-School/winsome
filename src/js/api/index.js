import AchieversData from '../Data/achieversData';
import CalenderData from '../Data/calenderData';
import Blogdata from '../Data';
import promoData from '../components/promo/promoData';

export function getAchieversData() {
	return AchieversData;
}
export function getCalenderData() {
	return CalenderData;
}
export function blogDataApi() {
	return Blogdata;
}

export function promoDataApi() {
	return promoData;
}
