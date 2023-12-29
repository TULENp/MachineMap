import { TTagItem } from '../types';
import {
    colorLightGreen,
    colorOrange,
    colorPurple,
    colorRed,
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
    only_non_cash_payments: { color: colorOrange, label: 'только безнал' },
    coffee: { color: colorLightGreen, label: 'кофе' },
    cashier: { color: colorRed, label: 'есть кассир' },
    hot_chocolate: { color: colorPurple, label: 'горячий шоколад' },
    juices: { color: colorYellow, label: 'соки' },
};
