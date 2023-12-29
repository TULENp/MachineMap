export type TMachine = {
    id: number;
    serialNumber: string;
    tradePointId: number;
    floor: number;
    typeId: number;
};

export type TTradePoint = {
    id: number;
    location: {
        address: string;
        latitude: number;
        longitude: number;
    };
    workingTime: {
        mon: string[] | null;
        tue: string[] | null;
        wed: string[] | null;
        thu: string[] | null;
        fri: string[] | null;
        sat: string[] | null;
        sun: string[] | null;
    };
};

export type TMachineType = {
    id: number;
    tags: string[];
};

export type TTagItem = { color: string; label: string };
