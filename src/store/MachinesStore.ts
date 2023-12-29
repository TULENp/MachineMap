import { makeAutoObservable, runInAction } from 'mobx';
import { TMachine } from '../types';
import { GetMachines } from '../service/api';

export class MachinesStore {
    machines: TMachine[] = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getAllMachinesAction() {
        this.isLoading = true;
        const machines = await GetMachines();
        runInAction(() => {
            this.machines = machines;
            this.isLoading = false;
        });
    }
}
