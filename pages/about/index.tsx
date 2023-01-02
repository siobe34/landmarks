import Head from "next/head";
import Link from "next/link";

import { PageSection } from "../../components/PageSection";

const linkUtils = "px-2 py-1 rounded bg-secondary text-txtOnSecondary hover:underline";

export default function About() {
    return (
        <>
            <Head>
                <title>Landmarks | About</title>
            </Head>

            <PageSection className='justify-start gap-12 mt-4 px-8'>
                <article className='flex flex-col gap-4'>
                    <h1 className='flex self-center text-2xl font-bold underline'>What is Landmarks?</h1>
                    <p>
                        A world map of various landmarks with a brief description about each landmark. It's an interactive way to learn about
                        interesting geography, weird archeological facts, various points of interest, and any other intriguing geospatial data.
                    </p>
                    <p>
                        Just head over to the{" "}
                        <Link href='/' className={linkUtils}>
                            Map
                        </Link>{" "}
                        and explore the various markers.
                    </p>
                </article>
                <article className='flex flex-col gap-4'>
                    <p>
                        <a href='https://snazzymaps.com/' className={linkUtils}>
                            Snazzy Maps
                        </a>{" "}
                        was used to get the different map themes. Snazzy Maps provides a large variety of map styles to use with your own Google Maps
                        application.
                    </p>
                </article>
            </PageSection>
        </>
    );
}
