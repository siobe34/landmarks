import { ILandmark } from "../../types/ILandmark";

import { RenderMap } from "../../components/Map/RenderMap";

import landmarksJson from "../../json/landmarks.json";

export default function MapPage(json: { markers: ILandmark[] }) {
    return (
        <section className='relative flex justify-center w-full h-full'>
            <RenderMap markers={json.markers} />
        </section>
    );
}

export async function getServerSideProps() {
    // TODO make api calls to fetch markers
    return { props: { markers: landmarksJson } };
}
