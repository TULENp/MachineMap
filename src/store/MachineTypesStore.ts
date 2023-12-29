import { makeAutoObservable, runInAction } from 'mobx';
import { TMachineType } from '../types';
import { GetMachineTypes } from '../service/api';

export class MachineTypesStore {
    machineTypes: TMachineType[] = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getAllMachineTypesAction() {
        this.isLoading = true;
        const machineTypes = await GetMachineTypes();
        runInAction(() => {
            this.machineTypes = machineTypes;
            this.isLoading = false;
        });
    }

    getTagsByIdAction(id: number) {
        return this.machineTypes.find((type) => type.id === id)?.tags || [];
    }
}
