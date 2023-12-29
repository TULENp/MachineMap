import React, { useEffect, useState } from 'react';
import styles from './MachineCard.module.css';
import { machinesStore } from '../../store/MachinesStore';
import { observer } from 'mobx-react-lite';

export const MainPage = observer(() => {
    useEffect(() => {
        machinesStore.getMachinesAction();
    }, []);

    return (
        <main>
            {machinesStore.machines?.case({
                pending: () => <p>Загрузка</p>,
                rejected: () => <p>Ошибка</p>,
                fulfilled: () => (
                    <p>{JSON.stringify(machinesStore.machines)}</p>
                ),
            })}
        </main>
    );
});
