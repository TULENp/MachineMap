import { WEEK_DAYS } from '../../constants';
import { createPortal } from 'react-dom';
import { TWorkingTime } from '../../types';

interface IScheduleTable {
    onClose: () => void;
    workingTime: TWorkingTime;
}

export function ScheduleTable({ onClose, workingTime }: IScheduleTable) {
    const today = new Date()
        .toLocaleDateString('en-US', { weekday: 'short' })
        .toLowerCase();

    const renderSchedule = () => {
        return Object.entries(workingTime).map(([day, time]) => (
            <div key={day}>
                <h1
                    style={
                        day === today
                            ? { fontWeight: 'bold', color: 'blue' }
                            : {}
                    }
                >
                    {WEEK_DAYS[day as keyof typeof WEEK_DAYS]} : 
                    {time?.replace(';', ' - ') || 'Выходной'}
                </h1>
            </div>
        ));
    };

    return createPortal(
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>
                    закрыть
                </span>
                <div>
                    <h3>Время работы</h3>
                    {renderSchedule()}
                </div>
            </div>
        </div>,
        document.getElementById('modal')!, // DOM-узел для отображения модального окна
    );
}
