import { makeAutoObservable, runInAction } from 'mobx';
import { TTradePoint } from '../types';
import { GetTradePoints } from '../service/api';

export class TradePointsStore {
    tradePoints: TTradePoint[] = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getAllTradePointsAction() {
        this.isLoading = true;
        const tradePoints = await GetTradePoints();
        runInAction(() => {
            this.tradePoints = tradePoints;
            this.isLoading = false;
        });
    }

    getTradePointByIdAction(id: number) {
        return this.tradePoints.find((type) => type.id === id);
    }
}
