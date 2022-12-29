import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { Map } from "./Map";
import { Marker } from "./Marker";

export const RenderMap = () => {
    const handleMapStatus = (status: Status) => {
        switch (status) {
            default:
            case Status.LOADING:
                // TODO add Loading component
                return <div>Loading...</div>;
            case Status.FAILURE:
                // TODO add Failure component
                return <div>Failed to load...</div>;
            case Status.SUCCESS:
                return (
                    <Map centre={{ lng: -79.998372, lat: 43.454564 }} zoom={10}>
                        <Marker position={{ lng: -79.998372, lat: 43.454564 }} />
                    </Map>
                );
        }
    };
    // TODO secure api key
    return <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""} render={handleMapStatus} version='beta' libraries={["marker"]} />;
};
