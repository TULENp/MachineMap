import { makeAutoObservable } from 'mobx';
import { TMachine } from '../types';
import { GetMachines } from '../service/api';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

export class MachinesStore {
    machines?: IPromiseBasedObservable<TMachine[]>;

    constructor() {
        makeAutoObservable(this);
    }

    async getMachinesAction() {
        this.machines = fromPromise(GetMachines());
    }
}
