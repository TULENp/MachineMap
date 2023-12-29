import axios from 'axios';
import { BASE_URL } from '../constants';

axios.defaults.baseURL = BASE_URL;

// return list of machines
export async function GetMachines() {
    return await axios
        .get('http://localhost:3000/machines')
        .then((response) => response.data)
        .catch((error) => error);
}

// return list of types (list with tags)
export async function GetMachineTypes() {
    return await axios
        .get('http://localhost:3000/machineTypes')
        .then((response) => response.data)
        .catch((error) => error);
}

// return list of trade points
export async function GetTradePoints() {
    return await axios
        .get('http://localhost:3000/tradePoints')
        .then((response) => response.data)
        .catch((error) => error);
}