import { TAGS } from '../../constants';

interface ITagItem {
    tagName: string;
}

export function TagItem({ tagName }: ITagItem) {
    const { color, label } = TAGS[tagName];
    return (
        <div style={{ backgroundColor: color }}>
            <h1>{label}</h1>
        </div>
    );
}
