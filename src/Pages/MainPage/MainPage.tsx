import React, { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './MainPage.module.css';
import { machinesStore, machineTypesStore, tradePointStore } from '../../store';
import { MachineCard } from '../../components/MachineCard';

//* Display page with list of machine cards
export const MainPage = observer(() => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    // get all needed data and save to stores
    async function loadData() {
        setIsLoading(true);
        await Promise.all([
            machineTypesStore.getAllMachineTypesAction(),
            tradePointStore.getAllTradePointsAction(),
            machinesStore.getAllMachinesAction(),
        ]);
        setIsLoading(false);
    }

    // memoize machine cards
    const renderMachineCards = useMemo(() => {
        return machinesStore.machines.map((item) => {
            // Get tradePoint data by machine tradePointId
            const tradePoint = tradePointStore.getTradePointByIdAction(
                item.tradePointId,
            );
            // Get tags by machine typeId
            const tags = machineTypesStore.getTagsByIdAction(item.typeId);
            return (
                <MachineCard
                    key={item.id}
                    machineData={item}
                    tradePointData={tradePoint}
                    tags={tags}
                />
            );
        });
    }, [machinesStore.machines]);

    return (
        <main>
            {/* //TODO add search bar */}
            {isLoading ? (
                <div className={styles.spinnerContainer}>
                    <div className={styles.spinner}></div>
                </div>
            ) : (
                <>{renderMachineCards}</>
            )}
        </main>
    );
});
