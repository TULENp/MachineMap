import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './MainPage.module.css';
import { machinesStore, machineTypesStore, tradePointStore } from '../../store';
import { MachineCard } from '../../components/MachineCard';
import { TMachine, TWorkingTime } from '../../types';
import { ScheduleTable } from '../../components/ScheduleTable';
import { SearchBar } from '../../components/SearchBar';

//* Display page with list of machine cards
export const MainPage = observer(() => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    // set 1 machine working time to display on modal "ScheduleTable"
    const [selectSchedule, setSelectSchedule] = useState<TWorkingTime | null>();
    const openModal = (schedule?: TWorkingTime) => {
        setSelectSchedule(schedule || null);
    };

    useEffect(() => {
        loadData();
    }, []);

    //reset schedule modal on search
    useEffect(() => {
        setSelectSchedule(null);
    }, [searchValue]);

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

    // return machines found by serial number or address
    function getFilteredMachines(query: string) {
        query = query.toLowerCase().trim();
        if (!query) {
            return machinesStore.machines;
        }
        const result = machinesStore.machines.filter((machine) => {
            const tradePoint = tradePointStore.getTradePointByIdAction(
                machine.tradePointId,
            );
            return (
                machine.serialNumber.toLowerCase().includes(query) ||
                tradePoint?.location?.address.toLowerCase().includes(query)
            );
        });

        return result;
    }

    // render machine cards list
    function MachinesList({ machines }: { machines: TMachine[] }) {
        return (
            <section>
                {machines.length ? (
                    machines.map((item) => {
                        // Get tradePoint data by machine tradePointId
                        const tradePoint =
                            tradePointStore.getTradePointByIdAction(
                                item.tradePointId,
                            );
                        // Get tags by machine typeId
                        const tags = machineTypesStore.getTagsByIdAction(
                            item.typeId,
                        );
                        return (
                            <MachineCard
                                key={item.id}
                                machineData={item}
                                tradePointData={tradePoint}
                                tags={tags}
                                selectSchedule={openModal}
                            />
                        );
                    })
                ) : (
                    <h1 className={styles.nothingFound}>Ничего не найдено</h1>
                )}
            </section>
        );
    }

    return (
        <main>
            {/* //TODO add search bar */}
            <SearchBar value={searchValue} onChange={setSearchValue} />
            {isLoading ? (
                <div className={styles.spinnerContainer}>
                    <div className={styles.spinner}></div>
                </div>
            ) : (
                <div className={styles.container}>
                    <MachinesList machines={getFilteredMachines(searchValue)} />
                    {selectSchedule && (
                        <ScheduleTable workingTime={selectSchedule} />
                    )}
                </div>
            )}
        </main>
    );
});
