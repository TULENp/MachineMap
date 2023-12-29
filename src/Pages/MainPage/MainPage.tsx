import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './MachineCard.module.css';
import { machinesStore, machineTypesStore, tradePointStore } from '../../store';
import { MachineCard } from '../../components/MachineCard';

export const MainPage = observer(() => {
    useEffect(() => {
        // get all needed info and save to stores
        machinesStore.getAllMachinesAction();
        machineTypesStore.getAllMachineTypesAction();
        tradePointStore.getAllTradePointsAction();
    }, []);

    return (
        <main>
            {/* //TODO add search bar */}
            {machinesStore.isLoading ? (
                <p>Загрузка</p>
            ) : (
                <>
                    {machinesStore.machines.map((item) => (
                        <MachineCard
                            key={item.id}
                            machineData={item}
                            tradePointData={tradePointStore.getTradePointByIdAction(
                                item.id,
                            )}
                            tags={machineTypesStore.getTagsByIdAction(item.id)}
                        />
                    ))}
                </>
            )}
        </main>
    );
});
