import { makeAutoObservable } from 'mobx';
import { TTradePoint } from '../types';
import { GetTradePoints } from '../service/api';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

export class TradePointsStore {
    tradePoints?: IPromiseBasedObservable<TTradePoint[]>;

    constructor() {
        makeAutoObservable(this);
    }

    async getTradePointsAction() {
        this.tradePoints = fromPromise(GetTradePoints());
    }
}
