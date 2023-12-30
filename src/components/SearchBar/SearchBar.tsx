import React from 'react';
import styles from './SearchBar.module.css';

interface ISearchBar {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: ISearchBar) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={styles.searchBar}>
            <input
                type='text'
                placeholder='Введите номер или адрес...'
                value={value}
                onChange={handleChange}
                className={styles.input}
            />
        </div>
    );
}
