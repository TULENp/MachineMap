interface IMap {
    lng?: number;
    lat?: number;
}

//* Display small static map with marker(by lat, lng from props) in the center
export function Map({ lng, lat }: IMap) {
    return (
        <img
            src={`http://static.maps.2gis.com/1.0?&size=120,120&markers=pmgnm${lng},${lat}`}
            alt='2GIS map'
        />
    );
}
