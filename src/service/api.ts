import axios from 'axios';
import { BASE_URL } from '../constants';
import { TMachine, TMachineType, TTradePoint } from '../types';

axios.defaults.baseURL = BASE_URL;

// return list of machines
export async function GetMachines() {
    return await axios
        .get<TMachine[]>('/machines')
        .then((response) => response.data)
        .catch((error) => error);
}

// return list of types (list with tags)
export async function GetMachineTypes() {
    return await axios
        .get<TMachineType[]>('/machineTypes')
        .then((response) => response.data)
        .catch((error) => error);
}

// return list of trade points
export async function GetTradePoints() {
    return await axios
        .get<TTradePoint[]>('/tradePoints')
        .then((response) => response.data)
        .catch((error) => error);
}
