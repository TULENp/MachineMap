import React from 'react';
import { WEEK_DAYS } from '../../constants';
import { TWorkingTime } from '../../types';
import styles from './ScheduleTable.module.css';

interface IScheduleTable {
    workingTime: TWorkingTime;
}

type TDayKey = keyof typeof WEEK_DAYS;

export function ScheduleTable({ workingTime }: IScheduleTable) {
    const today = new Date()
        .toLocaleDateString('en-US', { weekday: 'short' })
        .toLowerCase() as TDayKey;

    const renderSchedule = () => {
        return Object.entries(workingTime).map(([day, time]) => (
            <div key={day} className={styles.scheduleItem}>
                <h3
                    className={
                        day === today ? styles.todaySchedule : styles.schedule
                    }
                >
                    <span>{WEEK_DAYS[day as TDayKey]}</span>
                    <span>{time?.replace(';', ' - ') || 'Выходной'}</span>
                </h3>
            </div>
        ));
    };

    // return string depends on working time
    function checkIsOpen() {
        const currentWorkingTime = workingTime[today];
        if (currentWorkingTime) {
            const currentTime = new Date().toLocaleTimeString();
            const [openTime, closeTime] = currentWorkingTime.split(';');

            if (currentTime >= openTime && currentTime < closeTime) {
                return 'Открыто до ' + closeTime;
            } else {
                return 'Закрыто до ' + openTime;
            }
        } else {
            return 'Выходной';
        }
    }

    return (
        <div className={styles.scheduleContainer}>
            <div className={styles.scheduleContent}>
                <h1>Время работы</h1>
                <h2 className={styles.today}>{checkIsOpen()}</h2>
                {renderSchedule()}
            </div>
        </div>
    );
}
