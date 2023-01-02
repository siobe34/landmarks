import Head from "next/head";

import { ILandmark } from "../types/ILandmark";
import dbConnection from "../lib/mongodbConnection";

import { RenderMap } from "../components/Map/RenderMap";

export default function Home(json: { markers: ILandmark[] }) {
    return (
        <>
            <Head>
                <title>Landmarks</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <section className='relative flex justify-center w-full h-full'>
                <RenderMap markers={json.markers} />
            </section>
        </>
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
