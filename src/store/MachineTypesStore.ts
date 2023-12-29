import { makeAutoObservable } from 'mobx';
import { TMachineType } from '../types';
import { GetMachineTypes } from '../service/api';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

export class MachineTypesStore {
    machineTypes?: IPromiseBasedObservable<TMachineType[]>;

    constructor() {
        makeAutoObservable(this);
    }

    async getMachineTypesAction() {
        this.machineTypes = fromPromise(GetMachineTypes());
    }
}
