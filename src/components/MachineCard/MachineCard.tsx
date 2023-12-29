import React from 'react';
import styles from './MachineCard.module.css';
import { TMachine, TTradePoint } from '../../types';

interface IMachineCard {
    machineData: TMachine;
    tradePointData?: TTradePoint;
    tags: string[];
}

export function MachineCard({
    machineData,
    tradePointData,
    tags,
}: IMachineCard) {
    return (
        <div>
            <div>
                {/* number and tags  */}
                <div>
                    <h1>#{machineData.serialNumber}</h1>
                    <div>
                        {/*//TODO add dictionary with russian tag and color. And add TagCard */}
                        {tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                </div>
                {/* address */}
                <h2>{tradePointData?.location.address}</h2>
                {/* floor */}
                <h2>Этаж: {machineData.floor}</h2>
                {/* schedule */}
                {/* //TODO open scheduleTable onClick */}
                <input type='button' value={'Время работы'} />
            </div>
            {/*//TODO add map */}
        </div>
    );
}
