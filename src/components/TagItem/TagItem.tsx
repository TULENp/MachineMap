import React from 'react';
import { TAGS } from '../../constants';
import styles from './TagItem.module.css';

interface ITagItem {
    tagName: string;
}

//* Display tag - block with coloured border and label
export function TagItem({ tagName }: ITagItem) {
    const { color, label } = TAGS[tagName];

    return (
        <div
            className={styles.tag}
            style={{ color: color, borderColor: color }}
        >
            <p className={styles.tagLabel}>{label}</p>
        </div>
    );
}
