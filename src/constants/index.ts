import { TTagItem } from '../types';
import {
    colorBlue,
    colorBrown,
    colorGreen,
    colorDarkBrown,
    colorYellow,
} from './colors';

export const BASE_URL = 'http://localhost:3000/';

export const WEEK_DAYS = {
    mon: 'Понедельник',
    tue: 'Вторник',
    wed: 'Среда',
    thu: 'Четверг',
    fri: 'Пятница',
    sat: 'Суббота',
    sun: 'Воскресенье',
};

export const TAGS: Record<string, TTagItem> = {
    only_non_cash_payments: { color: colorBlue, label: 'только безнал' },
    coffee: { color: colorBrown, label: 'кофе' },
    cashier: { color: colorGreen, label: 'есть кассир' },
    hot_chocolate: { color: colorDarkBrown, label: 'горячий шоколад' },
    juices: { color: colorYellow, label: 'соки' },
};
