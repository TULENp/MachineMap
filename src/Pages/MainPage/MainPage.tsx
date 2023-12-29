import React, { useEffect, useState } from 'react';
import styles from './MachineCard.module.css';
import { observer } from 'mobx-react-lite';
import { machinesStore, machineTypesStore, tradePointStore } from '../../store';
export const MainPage = observer(() => {
    useEffect(() => {
        machinesStore.getMachinesAction();
        machineTypesStore.getMachineTypesAction();
        tradePointStore.getTradePointsAction();
    }, []);

    return (
        <main>
            <div>
                {machinesStore.machines?.case({
                    pending: () => <p>Загрузка</p>,
                    rejected: () => <p>Ошибка</p>,
                    fulfilled: () => (
                        <p>{JSON.stringify(machinesStore.machines)}</p>
                    ),
                })}
            </div>
            {tradePointStore.tradePoints?.case({
                pending: () => <p>Загрузка</p>,
                rejected: () => <p>Ошибка</p>,
                fulfilled: () => (
                    <p>{JSON.stringify(tradePointStore.tradePoints)}</p>
                ),
            })}
            {machineTypesStore.machineTypes?.case({
                pending: () => <p>Загрузка</p>,
                rejected: () => <p>Ошибка</p>,
                fulfilled: () => (
                    <p>{JSON.stringify(machineTypesStore.machineTypes)}</p>
                ),
            })}
        </main>
    );
});
