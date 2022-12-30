import Head from "next/head";

import { PageSection } from "../components/PageSection";

export default function Home() {
    return (
        <>
            <Head>
                <title>Landmarks</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <PageSection className='mt-4'>
                <h1 className='text-2xl font-bold underline'>Developing...</h1>
            </PageSection>
        </>
    );
}
