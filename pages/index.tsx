import Head from "next/head";

import { PageSection } from "../components/PageSection";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <PageSection className='mt-4'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt inventore sed porro soluta accusantium, voluptatem eius,
                    nobis beatae illo cumque est neque odit laboriosam, necessitatibus sint consequuntur ad dolor!
                </p>
            </PageSection>
        </>
    );
}
