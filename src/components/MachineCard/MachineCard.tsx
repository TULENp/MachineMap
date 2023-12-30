import React from 'react';
import styles from './MachineCard.module.css';
import { TMachine, TTradePoint } from '../../types';
import { TagItem } from '../TagItem/TagItem';
import { Map } from '../Map';
interface IMachineCard {
    machineData: TMachine;
    tradePointData?: TTradePoint;
    tags: string[];
}

//* Display card with machine data and "open schedule" button
export function MachineCard({
    machineData,
    tradePointData,
    tags,
}: IMachineCard) {
    return (
        <section className={styles.machineCard}>
            <div className={styles.cardContent}>
                {/* serial number and tags */}
                <div className={styles.header}>
                    <h1 className={styles.serialNumber}>
                        № {machineData.serialNumber}
                    </h1>
                    <div className={styles.tags}>
                        {tags.map((tag) => (
                            <TagItem key={tag} tagName={tag} />
                        ))}
                    </div>
                </div>
                {/* address */}
                <h2 className={styles.address}>
                    {tradePointData?.location.address}
                </h2>
                {/* floor */}
                <h2 className={styles.floor}>Этаж: {machineData.floor}</h2>
                {/* open schedule button */}
                <input
                    className={styles.button}
                    type='button'
                    value={'Время работы'}
                />
            </div>
            {/* Map */}
            <Map
                lng={tradePointData?.location.longitude}
                lat={tradePointData?.location.latitude}
            />
        </section>
    );
}
