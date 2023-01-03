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
                    <p>
                        <span className='text-2xl font-bold'>Landmarks</span> is a world map of various points of interest with a brief description
                        about each landmark. It's an interactive way to learn about interesting geography, weird archeological facts, random history,
                        and any other intriguing geospatial data.
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
                    <span className='flex self-start text-2xl font-bold'>Other</span>
                    <ul className='list-disc pl-6'>
                        <li>
                            <a href='https://snazzymaps.com/' className={linkUtils}>
                                Snazzy Maps
                            </a>{" "}
                            was used to get the different map themes. They provide a large library of map styles to use with your own Google Maps
                            application.
                        </li>
                        <li>
                            This is a hobby project created because I love maps, you can check out{" "}
                            <a href='https://ibadrashid.vercel.app' className={linkUtils}>
                                my portfolio
                            </a>{" "}
                            for other projects I've worked on.
                        </li>
                    </ul>
                </article>
            </PageSection>
        </>
    );
}
