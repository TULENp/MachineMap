import React, { useEffect, useState } from 'react';
import styles from './MachineCard.module.css';
import {
    GetMachineTypes,
    GetMachines,
    GetTradePoints,
} from '../../service/api';

export function MainPage() {
    const [machines, setMachines] = useState([]);
    const [tradePoints, setTradePoints] = useState([]);
    const [machineTypes, setMachineTypes] = useState([]);

    useEffect(() => {
        getMachines();
        getTradePoints();
        getMachineTypes();
    }, []);

    async function getMachines() {
        const res = await GetMachines();
        setMachines(res);
    }

    async function getTradePoints() {
        const res = await GetTradePoints();
        setTradePoints(res);
    }

    async function getMachineTypes() {
        const res = await GetMachineTypes();
        setMachineTypes(res);
    }

    return (
        <main>
            <p>{JSON.stringify(machines)}</p>
            <p>{JSON.stringify(tradePoints)}</p>
            <p>{JSON.stringify(machineTypes)}</p>
        </main>
    );
}
