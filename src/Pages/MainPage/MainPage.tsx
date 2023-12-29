import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './MachineCard.module.css';
import { machinesStore, machineTypesStore, tradePointStore } from '../../store';

export const MainPage = observer(() => {
    useEffect(() => {
        machinesStore.getAllMachinesAction();
        machineTypesStore.getAllMachineTypesAction();
        tradePointStore.getAllTradePointsAction();
    }, []);

    return (
        <main>
            {machinesStore.isLoading ? (
                <p>Загрузка</p>
            ) : (
                <p>{JSON.stringify(machinesStore.machines)}</p>
            )}

            {tradePointStore.isLoading ? (
                <p>Загрузка</p>
            ) : (
                <>
                    <p>{JSON.stringify(tradePointStore.tradePoints)}</p>
                    <p>
                        {JSON.stringify(
                            tradePointStore.getTradePointByIdAction(1),
                        )}
                    </p>
                </>
            )}

            {machineTypesStore.isLoading ? (
                <p>Загрузка</p>
            ) : (
                <>
                    <p>{JSON.stringify(machineTypesStore.machineTypes)}</p>
                    <p>
                        {JSON.stringify(machineTypesStore.getTagsByIdAction(1))}
                    </p>
                </>
            )}
        </main>
    );
});
