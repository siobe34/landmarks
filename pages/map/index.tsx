import { ILandmark } from "../../types/ILandmark";
import dbConnection from "../../lib/mongodbConnection";

import { RenderMap } from "../../components/Map/RenderMap";

export default function MapPage(json: { markers: ILandmark[] }) {
    return (
        <section className='relative flex justify-center w-full h-full'>
            <RenderMap markers={json.markers} />
        </section>
    );
}

export async function getServerSideProps() {
    try {
        // * Connect to mongodb server
        const client = await dbConnection;

        // * Get database instance from server
        const db = client.db("landmarks");

        // * Query all markers from database
        const markers = await db.collection("markers").find({}).toArray();

        return { props: { markers: JSON.parse(JSON.stringify(markers)) } };
    } catch (e) {
        console.error(e);
    }
}
