import styles from './Map.module.css';

interface IMap {
    lng?: number;
    lat?: number;
}

//* Display small static map with marker(by lat, lng from props) in the center
export function Map({ lng, lat }: IMap) {
    return (
        <img
            className={styles.map}
            src={`http://static.maps.2gis.com/1.0?&size=200,200&markers=pmgnm${lng},${lat}`}
            alt='2GIS map'
        />
    );
}
