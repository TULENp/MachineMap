import React from 'react';
import { WEEK_DAYS } from '../../constants';
import { TWorkingTime } from '../../types';
import styles from './ScheduleTable.module.css';

interface IScheduleTable {
    workingTime: TWorkingTime;
}

export function ScheduleTable({ workingTime }: IScheduleTable) {
    const today = new Date()
        .toLocaleDateString('en-US', { weekday: 'short' })
        .toLowerCase();

    const renderSchedule = () => {
        return Object.entries(workingTime).map(([day, time]) => (
            <div key={day} className={styles.scheduleItem}>
                <h3
                    className={
                        day === today ? styles.todaySchedule : styles.schedule
                    }
                >
                    <span>{WEEK_DAYS[day as keyof typeof WEEK_DAYS]}</span>
                    <span>{time?.replace(';', ' - ') || 'Выходной'}</span>
                </h3>
            </div>
        ));
    };

    return (
        <div className={styles.scheduleContainer}>
            <div className={styles.scheduleContent}>
                <h1>Время работы</h1>
                {/* //TODO add "Сегодня открыто до ..."  */}
                {renderSchedule()}
            </div>
        </div>
    );
}
