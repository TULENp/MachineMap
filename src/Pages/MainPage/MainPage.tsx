import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './MachineCard.module.css';
import { machinesStore, machineTypesStore, tradePointStore } from '../../store';
import { MachineCard } from '../../components/MachineCard';

//* Display page with list of machine cards
export const MainPage = observer(() => {
    useEffect(() => {
        // get all needed info and save to stores
        machineTypesStore.getAllMachineTypesAction();
        tradePointStore.getAllTradePointsAction();
        machinesStore.getAllMachinesAction();
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
                                item.tradePointId,
                            )}
                            tags={machineTypesStore.getTagsByIdAction(
                                item.typeId,
                            )}
                        />
                    ))}
                </>
            )}
        </main>
    );
});
